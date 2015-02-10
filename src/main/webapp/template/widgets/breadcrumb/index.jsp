<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-breadcrumb/src/main/webapp/template/widgets/breadcrumb/index.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%-- this JSP page is the entry point of the Breadcumb widget. --%>

<%@ page session="false" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="util" uri="http://www.escenic.com/taglib/escenic-util" %>
<%@ taglib prefix="article" uri="http://www.escenic.com/taglib/escenic-article" %>

<c:set var="utilCacheEnabled" value="${widgetContent.fields.utilCacheEnabled.value}"/>
<c:set var="updateInterval" value="${fn:trim(widgetContent.fields.updateInterval.value)}" />
<c:if test="${empty updateInterval}">
  <c:set var="updateInterval" value="60"/>
</c:if>
<c:choose>
  <c:when test="${utilCacheEnabled}">
    <util:cache id="navigation-cache-breadcrumb-view-${widgetContent.id}" expireTime="${updateInterval}m"
                includeSection="${true}" includeArticle="${true}">
      <%-- expire the cache if the widget configuration has changed --%>
      <article:expiresCache articleId="${widgetContent.id}"/>
      <wf-core:view widget="${widgetContent}"/>
    </util:cache>
  </c:when>
  <c:otherwise>
    <wf-core:view widget="${widgetContent}"/>
  </c:otherwise>
</c:choose>