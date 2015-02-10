<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-search-component/src/main/webapp/template/widgets/searchComponent/view/searchInfo.jsp#1 $
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

<c:set var="contentResult" value="${requestScope.contentSearchResult}"/>
<c:if test="${contentResult.totalItemCount > 0  and contentResult.offset < contentResult.totalItemCount}">
  <%--This view will display count info: showing 1-10 of about 2000 results--%>
  <fmt:message key="search.component.widget.countinfoview.label">
    <fmt:param value="${contentResult.offset + 1}"/>
    <fmt:param value="${contentResult.offset + contentResult.resultItemCount}"/>
    <fmt:param value="${contentResult.totalItemCount}"/>
  </fmt:message>
</c:if>
