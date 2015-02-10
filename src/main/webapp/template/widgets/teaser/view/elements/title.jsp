<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/title.jsp#3 $
 * Last edited by : $Author: dbs $ $Date: 2014/07/23 $
 * Version        : $Revision: #3 $
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
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:choose>
  <c:when test="${resultItem.type eq 'summary'}">
    <c:set var="titleText" value="${resultItem.actualItem.fields.title}"/>
  </c:when>
  <c:when test="${resultItem.type eq 'searchResult'}">
    <c:set var="titleText" value="${empty resultItem.extra.highlights.title[0] ? resultItem.content.fields.title : resultItem.extra.highlights.title[0]}"/>
  </c:when>
  <c:otherwise>
    <c:set var="titleText" value="${resultItem.content.title}"/>
  </c:otherwise>
</c:choose>

<c:if test="${not empty fn:trim(titleText)}">
  <c:set var="titleTextSize"
         value="${not empty resultItem.extra.titleSize? resultItem.extra.titleSize : widget.model.elementSettings['title.textsize']}"/>
  <wf-util:wrap htmlTag="${widget.model.elementSettings['title.htmltag']}"
                styleClass="${widget.model.elementSettings['title.styleclass']} ${titleTextSize}">
    <wf-util:link url="${resultItem.content.url}"
                  styleClass="${widget.model.linkSettings.title.inline ? 'inline' : ''}"
                  loadingDevices="${widget.model.inlineDevices}"
                  showLink="${widget.model.linkSettings.title.enabled}">
      ${titleText}
    </wf-util:link>
  </wf-util:wrap>
</c:if>