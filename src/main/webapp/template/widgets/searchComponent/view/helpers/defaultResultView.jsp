<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-search-component/src/main/webapp/template/widgets/searchComponent/view/helpers/defaultResultView.jsp#1 $
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

<c:forEach var="resultItem" items="${requestScope.contentSearchResult.resultItems}">
  <c:set var="content" value="${resultItem.content}"/>
  <c:set var="document" value="${resultItem.actualItem.solrDocument}"/>
  <div class="${btCss.media}">
    <h4 class="${btCss.mediaHeading}">
      <a href="${resultItem.content.url}">
          ${empty resultItem.extra.highlights.title[0] ? document.title : resultItem.extra.highlights.title[0]}
      </a>
    </h4>

    <div class="${btCss.mediaBody}">
      <small class="text-muted">${content.publishedDate} by ${content.author.name} in
        <a href="${content.homeSection.url}">${content.homeSection.name}</a></small>
      <p>
        ${empty resultItem.extra.highlights.summary[0] ?
          document.summary : resultItem.extra.highlights.summary[0]}
      </p>
    </div>
  </div>
</c:forEach>

