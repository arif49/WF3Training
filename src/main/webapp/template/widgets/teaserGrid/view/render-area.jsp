<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser-grid/src/main/webapp/template/widgets/teaserGrid/view/render-area.jsp#2 $
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
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:forEach var="item" items="${area.items}">
  <wf-util:use var="item" value="${item}">
    <jsp:include page="render-item.jsp"/>
  </wf-util:use>
</c:forEach>