<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-breadcrumb/src/main/webapp/template/widgets/breadcrumb/view/default.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%-- the purpose of this page is to render the default view of the breadcrumb widget --%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="util" uri="http://www.escenic.com/taglib/escenic-util" %>

<%-- the controller has already set a Map named 'navigation' in the requestScope --%>
<c:set var="breadcrumb" value="${widget.model}"/>
<c:set var="breadcrumbItems" value="${breadcrumb.items}"/>

<c:if test="${not empty breadcrumbItems}">
  <ul class="${btCss.breadcrumb}">
    <c:forEach var="breadcrumbItem" items="${breadcrumbItems}">
      <c:choose>
        <c:when test="${breadcrumbItem.active == true}">
          <c:choose>
            <c:when test="${requestScope['com.escenic.context']=='art'}">
              <c:if test="${breadcrumbItem.type == 1}">
                <li><a href="${breadcrumbItem.url}"><c:out value="${breadcrumbItem.text}"
                                                           escapeXml="true"/> </a></li>
              </c:if>
              <c:if test="${breadcrumb.displayArticleTitle}">
                <li><c:out value="${article.title}" escapeXml="true"/></li>
              </c:if>
            </c:when>
            <c:otherwise>
              <li><c:out value="${breadcrumbItem.text}" escapeXml="true"/></li>
            </c:otherwise>
          </c:choose>
        </c:when>
        <c:otherwise>
          <li><a href="${breadcrumbItem.url}"><c:out value="${breadcrumbItem.text}" escapeXml="true"/> </a>
          </li>
        </c:otherwise>
      </c:choose>
    </c:forEach>
  </ul>
</c:if>

<c:remove var="breadcrumbItems" scope="request"/>
<c:remove var="navigation" scope="request"/>