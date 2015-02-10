<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/wireframe/widget.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>


<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="article" uri="http://www.escenic.com/taglib/escenic-article" %>
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>

<c:set var="esiRequest" value="${fn:trim(param.esiRequest)}"/>

<c:choose>
  <c:when test="${esiRequest eq 'true'}">
    <%--the request came from ESI filter, so all required attributes are set in request scope --%>
    <c:set var="widgetName" value="${requestScope.widgetName}"/>
    <c:set var="widgetContentId" value="${requestScope.widgetContentId}"/>
    <c:set var="elementwidth" value="${requestScope.elementwidth}"/>
    <c:set var="widgetView" value="${requestScope.widgetView}"/>
  </c:when>
  <c:otherwise>
    <%--we'll try to read the required values from request parameters --%>
    <c:set var="widgetName" value="${fn:trim(param.widgetName)}"/>
    <c:set var="widgetContentId" value="${fn:trim(param.widgetContentId)}"/>
    <c:set var="elementwidth" value="${fn:trim(param.elementwidth)}"/>
    <c:set var="widgetView" value="${fn:trim(param.widgetView)}"/>
  </c:otherwise>
</c:choose>

<c:if test="${empty pageScope.elementwidth}">
  <c:set var="elementwidth" value="300"/>
</c:if>

<c:if test="${not empty pageScope.widgetName and not empty pageScope.widgetContentId}">
  <c:set var="widgetNameValid" value="${wfn:isValidName(pageScope.widgetName)}" scope="request" />
  <c:if test="${requestScope.widgetNameValid eq true}">
    <c:set var="contentAreaName" value="contentArea" scope="request"/>
    <c:set var="elementwidth" value="${pageScope.elementwidth}" scope="request"/>

    <article:use articleId="${pageScope.widgetContentId}">
      <c:set var="widgetContent" value="${article}" scope="request"/>
    </article:use>

    <c:set var="viewNameValid" value="${wfn:isValidName(pageScope.widgetView)}" scope="request" />

    <c:choose>
      <c:when test="${not empty pageScope.widgetView and requestScope.viewNameValid eq true}">
        <wf-core:view widgetName="${pageScope.widgetName}" view="${pageScope.widgetView}"/>
      </c:when>
      <c:otherwise>
        <wf-core:view widgetName="${pageScope.widgetName}"/>
      </c:otherwise>
    </c:choose>

    <c:remove var="viewNameValid" scope="request"/>
    <c:remove var="elementwidth" scope="request"/>
    <c:remove var="widgetContent" scope="request"/>
    <c:remove var="contentAreaName" scope="request"/>
  </c:if>

  <c:remove var="widgetNameValid" scope="request"/>
</c:if>


