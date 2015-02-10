<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/image/selectImageTemplate.jsp#1 $
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

<c:set var="imageTemplateName">
  <c:choose>
    <c:when test="${responsiveImage.policy == 'grid'}">renderGridImage.jsp</c:when>
    <c:when test="${responsiveImage.policy == 'picturefill'}">renderPicturefill.jsp</c:when>
    <c:when test="${responsiveImage.policy == 'adaptive'}">renderAdaptiveImage.jsp</c:when>
  </c:choose>
</c:set>

<jsp:include page="/template/framework/image/${imageTemplateName}"/>
