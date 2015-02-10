<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser-grid/src/main/webapp/template/widgets/teaserGrid/view/render-item.jsp#2 $
 * Last edited by : $Author: ira $ $Date: 2014/07/31 $
 * Version        : $Revision: #2 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%@ page session="false"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:choose>
  <c:when test="${empty item.content}">
    <wf-util:use var="group" value="${item}">
      <jsp:include page="group/${item.type}.jsp"/>
    </wf-util:use>
  </c:when>
  <c:otherwise>
    <wf-util:use var="teaser" value="${item}">
      <jsp:include page="render-teaser.jsp"/>
    </wf-util:use>
  </c:otherwise>
</c:choose>