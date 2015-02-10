<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/image/renderPicturefill.jsp#1 $
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

<c:set var="gridImageUrl"
       value="${responsiveImage.imgArticle.fields.alternates.value[responsiveImage.imgVersion].href}"/>

<c:if test="${not empty responsiveImage.imgOnclick}">
  <a href="${responsiveImage.imgOnclick}">
</c:if>
<span data-picture>
  <%--rendering image source variations required for picturefill--%>
  <span data-src="${gridImageUrl}"></span>
  <c:forEach var="entry" items="${responsiveImage.breakpointsImageMap}">
    <span data-src="${responsiveImage.imgArticle.fields.alternates.value[entry.value].href}"
          data-media="(max-width: ${entry.key}px)"></span>
  </c:forEach>

  <%--The default img element markup to set the default attributes--%>
  <img src="${responsiveImage.placeholderImageUrl}"
       alt="${fn:trim(responsiveImage.imgAlt)}"
       title="${fn:trim(responsiveImage.imgTitle)}"
       class="${responsiveImage.imgStyle} ${responsiveImage.useProxyPlaceholder? 'lazy' : ''} ${responsiveImage.usePlaceholder? 'placeholder' : ''}"
       style="width: 100%">

  <%--Fallback content for non-JS browsers.--%>
  <noscript>
    <img src="${gridImageUrl}"
         alt="${fn:trim(responsiveImage.imgAlt)}"
         width="${responsiveImage.imgWidth}"
         height="${responsiveImage.imgHeight}"
         title="${fn:trim(responsiveImage.imgTitle)}"
         class="${responsiveImage.imgStyle}">
  </noscript>

</span>
<c:if test="${not empty responsiveImage.imgOnclick}">
  </a>
</c:if>