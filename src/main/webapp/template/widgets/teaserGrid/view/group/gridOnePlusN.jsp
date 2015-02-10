<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser-grid/src/main/webapp/template/widgets/teaserGrid/view/group/gridOnePlusN.jsp#1 $
 * Last edited by : $Author: ira $ $Date: 2014/07/31 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%@ page session="false"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:set var="area" value="${group.areas.gridTwoColArea}"/>
<div class="row">
  <div class="col-md-${group.options.col1span}">
    <wf-core:renderGridItem item="${area.items[0]}"/>
  </div>

  <div class="col-md-${12-group.options.col1span}">
    <c:forEach var="item" begin="1" items="${area.items}">
      <wf-core:renderGridItem item="${item}"/>
    </c:forEach>
  </div>
</div>