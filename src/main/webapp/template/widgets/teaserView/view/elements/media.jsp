<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/media.jsp#5 $
 * Last edited by : $Author: saz $ $Date: 2014/06/27 $
 * Version        : $Revision: #5 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="mediaList" value="${resultItem.related.media}"/>

<c:if test="${fn:length(mediaList)>0}">
  <c:set var="mediaItem" value="${mediaList[0]}" scope="request"/>
  <c:set var="mediaContentType" value="${mediaItem.content.articleTypeName}"/>
  <c:set var="imageMode" value="${widget.model.imagemode}"/>
  <c:set var="wfMediaContentTypes" value="video,videoIngest,videoFile,audio,audioIngest,audioFile"/>

  <c:choose>
    <c:when test="${imageMode eq 'firstimage' and mediaContentType eq 'picture'}">
      <jsp:include page="helpers/picture.jsp"/>
    </c:when>
    <c:when test="${imageMode eq 'firstimage' and fn:contains(wfMediaContentTypes,mediaContentType)}">
      <jsp:include page="helpers/media.jsp"/>
    </c:when>
    <c:when test="${imageMode eq 'firstimage' and !fn:contains(wfMediaContentTypes,mediaContentType)}">
      <jsp:include page="helpers/${mediaItem.content.articleTypeName}.jsp"/>
    </c:when>
    <c:when test="${imageMode eq 'slideshow'}">
      <jsp:include page="helpers/slideshow.jsp"/>
    </c:when>
  </c:choose>
</c:if>