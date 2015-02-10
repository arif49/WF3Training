<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/summary.jsp#1 $
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
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:choose>
  <c:when test="${resultItem.type eq 'searchResult'}">
    <c:set var="summary" value="${empty resultItem.extra.highlights.summary[0] ?
        wfn:getArticleSummary(resultItem.content.articleId) : resultItem.extra.highlights.summary[0]}"/>
  </c:when>
  <c:otherwise>
    <c:set var="summary" value="${wfn:getArticleSummary(resultItem.content.articleId)}"/>
  </c:otherwise>
</c:choose>

<c:if test="${not empty fn:trim(summary)}">
  <wf-util:wrap htmlTag="${widget.model.elementSettings['summary.htmltag']}"
                styleClass="${widget.model.elementSettings['summary.styleclass']} ${widget.model.elementSettings['summary.textsize']}">
    ${summary}
  </wf-util:wrap>
</c:if>