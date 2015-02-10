<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/image/renderGridImage.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%-- The purpose of this page is to display teaser picture of a story --%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>

<%-- The requires the following attributes in the requestScope --%>
<jsp:useBean id="responsiveImage" type="java.util.HashMap" scope="request" />

<c:set var="imageUrl" value="${responsiveImage.imgArticle.fields.alternates.value[responsiveImage.imgVersion].href}"/>

<c:if test="${not empty responsiveImage.imgOnclick}">
  <a href="${responsiveImage.imgOnclick}">
</c:if>

<c:set var="imageSrcUrl" value="${not empty responsiveImage.placeholderImageUrl ? responsiveImage.placeholderImageUrl : imageUrl}"/>
<img src="${imageSrcUrl}"
     data-original="${not empty responsiveImage.placeholderImageUrl? imageUrl : ''}"
     style="width:100%"
     alt="${fn:trim(responsiveImage.imgAlt)}"
     title="${fn:trim(responsiveImage.imgTitle)}"
     class="${responsiveImage.imgStyle} ${responsiveImage.usePlaceholder || responsiveImage.useProxyPlaceholder ? 'lazy' : ''}"
  />
<c:if test="${not empty responsiveImage.imgOnclick}">
  </a>
</c:if>
