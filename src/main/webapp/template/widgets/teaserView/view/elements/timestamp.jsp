<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/timestamp.jsp#1 $
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
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>


<c:choose>
  <c:when test="${widget.model.datetoshow eq 'lastModifiedDate'}">
    <c:set var="selectedDate" value="${resultItem.lastModifiedDate}"/>
  </c:when>
  <c:when test="${widget.model.datetoshow eq 'publishedDate'}">
    <c:set var="selectedDate" value="${resultItem.publishedDate}"/>
  </c:when>
  <c:when test="${widget.model.datetoshow eq 'createdDate'}">
    <c:set var="selectedDate" value="${resultItem.content.createdDateAsDate}"/>
  </c:when>
</c:choose>

<c:if test="${not empty fn:trim(selectedDate)}">
  <wf-util:wrap htmlTag="${widget.model.elementSettings['timestamp.htmltag']}"
                styleClass="${widget.model.elementSettings['timestamp.styleclass']} ${widget.model.elementSettings['timestamp.textsize']}">
    <c:set target="${widget}" property="selectedDate" value="${selectedDate}"/>
    <jsp:include page="helpers/${widget.model.timeMode}.jsp"/>
  </wf-util:wrap>
</c:if>


