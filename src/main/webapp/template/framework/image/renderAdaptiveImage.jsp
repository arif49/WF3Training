<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/image/renderAdaptiveImage.jsp#1 $
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
<jsp:useBean id="responsiveImage" type="java.util.HashMap" scope="request"/>

<c:if test="${not empty responsiveImage.imgOnclick}">
  <a href="${responsiveImage.imgOnclick}">
</c:if>

<img src="${responsiveImage.placeholderImageUrl}"
     data-variant="${responsiveImage.representationVariant}"
     data-src-template="${responsiveImage.imgArticle.fields.binary.value.thumbnail}"
     data-proxy-image="${responsiveImage.proxyImageUrl}"
     data-proxy-width="${responsiveImage.proxyImgWidth}"
     style="width:100%"
     alt="${fn:trim(responsiveImage.imgAlt)}"
     title="${fn:trim(responsiveImage.imgTitle)}"
     class="${responsiveImage.imgStyle} adaptive ${responsiveImage.useProxyPlaceholder? 'lazy' : ''} ${responsiveImage.usePlaceholder? 'placeholder' : ''}"
    />
<c:if test="${not empty responsiveImage.imgOnclick}">
  </a>
</c:if>
