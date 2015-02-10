<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-page-meta/src/main/webapp/template/widgets/pageMeta/view/default.jsp#1 $
 * Last edited by : $Author: dbs $ $Date: 2014/08/22 $
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

<c:set var="metaNameAttribute" value="${widget.model.metaKeyAttribute}"/>
<c:forEach var="metaTag" items="${widget.metaTags}">
  <c:if test="${not empty metaTag.value}">
    <c:choose>
      <c:when test="${metaNameAttribute eq 'name'}">
        <meta name="${metaTag.key}" content="${metaTag.value}"/>
      </c:when>
      <c:when test="${metaNameAttribute eq 'property'}">
        <meta property="${metaTag.key}" content="${metaTag.value}"/>
      </c:when>
      <c:when test="${metaNameAttribute eq 'itemprop'}">
        <meta itemprop="${metaTag.key}" content="${metaTag.value}"/>
      </c:when>
    </c:choose>
  </c:if>
</c:forEach>