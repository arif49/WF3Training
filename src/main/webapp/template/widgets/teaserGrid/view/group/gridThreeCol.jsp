<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser-grid/src/main/webapp/template/widgets/teaserGrid/view/group/gridThreeCol.jsp#2 $
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
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:set var="area" value="${group.areas.gridThreeColArea}"/>
<c:set var="totalItems" value="${fn:length(area.items)}"/>
<c:set var="itemsPerColumn" value="${fn:substringBefore(totalItems/3 + 0.5, '.') + 0}"/>
<div class="row">
  <div class="col-md-${group.options.col1span}">
    <c:forEach var="item" items="${area.items}" end="${itemsPerColumn - 1}">
      <wf-core:renderGridItem item="${item}"/>
    </c:forEach>
  </div>

  <div class="col-md-${group.options.col2span}">
    <c:forEach var="item" items="${area.items}" begin="${itemsPerColumn}" end="${2*itemsPerColumn-1}">
      <wf-core:renderGridItem item="${item}"/>
    </c:forEach>
  </div>

  <div class="col-md-${12 - group.options.col1span - group.options.col2span}">
    <c:forEach var="item" items="${area.items}" begin="${2*itemsPerColumn}">
      <wf-core:renderGridItem item="${item}"/>
    </c:forEach>
  </div>
</div>