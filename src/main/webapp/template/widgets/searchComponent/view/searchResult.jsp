<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-search-component/src/main/webapp/template/widgets/searchComponent/view/searchResult.jsp#1 $
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
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:set var="resultArticles" value="${requestScope.contentSearchResult.resultItems}"/>

<c:choose>
  <c:when test="${not empty resultArticles and fn:length(resultArticles) > 0}">
    <c:choose>
      <c:when test="${widget.model.renderingMode eq 'default'}">
        <jsp:include page="helpers/defaultResultView.jsp"/>
      </c:when>
      <c:when test="${widget.model.renderingMode eq 'delegateView'}">
        <c:if test="${not empty widget.model.viewWidget}">
          <wf-core:view widget="${widget.model.viewWidget}"/>
        </c:if>
      </c:when>
      <c:when test="${widget.model.renderingMode eq 'iterateView'}">
        <wf-core:iterateViews var="viewWidget"
                              items="${resultArticles}"
                              selectableViewMap="${widget.model.selectableView}">
          <wf-core:view widget="${viewWidget}"/>
        </wf-core:iterateViews>
      </c:when>
    </c:choose>
  </c:when>
  <c:otherwise>
    <fmt:message key="search.component.widget.searchresultview.no.result"/>
  </c:otherwise>

</c:choose>