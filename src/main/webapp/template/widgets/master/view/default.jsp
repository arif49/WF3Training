<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-master/src/main/webapp/template/widgets/master/view/default.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2010 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%-- this is the default view of master widget --%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<%-- the controller has already set a HashMap named 'master' in the requestScope --%>
<jsp:useBean id="master" type="java.util.Map" scope="request"/>

<%-- first, store the map attributes in pageScope variables, since we want to remove the map from requestScope --%>
<c:set var="showWrapperDiv" value="${master.showWrapperDiv}"/>
<c:set var="wrapperStyleClass" value="${master.wrapperStyleClass}" />
<c:set var="styleId" value="${master.styleId}"/>

<%-- store the master config section items in the requestScope, which will be used by showItems.tag in framework --%>
<c:set var="items" value="${master.items}" scope="request" />

<%-- remove the master map from requestScope, so that it doesn't create any conflict with nested master widgets--%>
<c:remove var="master" scope="request" />

<c:if test="${not empty requestScope.items}">
  <c:choose>
    <c:when test="${showWrapperDiv==true}">
      <div class="${wrapperStyleClass}"  <c:if test="${not empty styleId}">id="${styleId}"</c:if> >
        <wf-core:showItems level="0"/>
      </div>
    </c:when>
    <c:otherwise>
      <wf-core:showItems level="0"/>
    </c:otherwise>
  </c:choose>
</c:if>

<c:if test="${not empty requestScope.items}">
  <c:remove var="items" scope="request" />
</c:if>

<c:remove var="showWrapperDiv" scope="page" />
<c:remove var="styleClass" scope="page" />
<c:remove var="styleId" scope="page" />