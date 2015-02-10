<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/leadtext.jsp#4 $
 * Last edited by : $Author: dbs $ $Date: 2014/07/23 $
 * Version        : $Revision: #4 $
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
    <c:set var="leadtext" value="${resultItem.actualItem.fields.leadtext}"/>
  </c:when>
  <c:otherwise>
    <c:set var="leadtext" value="${resultItem.content.fields.leadtext}"/>
  </c:otherwise>
</c:choose>

<c:if test="${not empty fn:trim(leadtext)}">
  <c:set var="leadTextSize"
         value="${not empty resultItem.extra.leadTextSize? resultItem.extra.leadTextSize : widget.model.elementSettings['leadtext.textsize']}"/>
  <wf-util:wrap htmlTag="${widget.model.elementSettings['leadtext.htmltag']}"
                styleClass="${widget.model.elementSettings['leadtext.styleclass']} ${leadTextSize}">
    <wf-util:link url="${resultItem.content.url}"
                  styleClass="${widget.model.linkSettings.leadtext.inline ? 'inline' : ''}"
                  loadingDevices="${widget.model.inlineDevices}"
                  showLink="${widget.model.linkSettings.leadtext.enabled}">
      ${leadtext}
    </wf-util:link>
  </wf-util:wrap>
</c:if>
