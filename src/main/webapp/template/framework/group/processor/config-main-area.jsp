<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/processor/config-main-area.jsp#1 $
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

<c:set var="columnKey" value="column${param.areaRatio}"/>
<c:set var="elementwidth" value="${requestScope.viewPortWidth*param.areaRatio/12}"/>

<c:set var="cssClass" value=""/>
<%-- Bootstrap col class needed only if ratio is not 12 --%>
<c:if test="${param.areaRatio < 12}">
  <c:set var="cssClass" value="${btCss[columnKey]}"/>
</c:if>

<jsp:include page="../renderAreasInGroup.jsp">
  <jsp:param name="areaName" value="main"/>
  <jsp:param name="elementClass" value="${cssClass}"/>
  <jsp:param name="elementWidth" value="${elementwidth}"/>
  <jsp:param name="elementRole" value="main"/>
</jsp:include>