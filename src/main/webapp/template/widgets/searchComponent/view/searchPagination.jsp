<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-search-component/src/main/webapp/template/widgets/searchComponent/view/searchPagination.jsp#1 $
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
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:if test="${fn:length(widget.paginationLinkInfo) > 0}">
  <ul class="pagination">
    <c:forEach var="paginationInfo" items="${widget.paginationLinkInfo}">
      <c:choose>
        <c:when test="${paginationInfo.active == true}">
          <li class="${btCss.active}"><span>${paginationInfo.linkText}</span></li>
        </c:when>
        <c:otherwise>
          <li><a href="${paginationInfo.linkURL}">${paginationInfo.linkText}</a></li>
        </c:otherwise>
      </c:choose>
    </c:forEach>
  </ul>
</c:if>