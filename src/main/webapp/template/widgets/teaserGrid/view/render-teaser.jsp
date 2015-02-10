<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser-grid/src/main/webapp/template/widgets/teaserGrid/view/render-teaser.jsp#2 $
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

<%@ page import="com.escenic.framework.presentation.SummaryResultItem" %>
<%@ page import="neo.xredsys.presentation.PresentationElement" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<%
  PresentationElement teaser = (PresentationElement) request.getAttribute("teaser");
  SummaryResultItem resultItem = new SummaryResultItem(teaser);
%>

<wf-core:resolveView var="viewWidget" item="<%=resultItem%>" selectableViewMap="${widget.model.selectableView}">
  <wf-core:view widget="${viewWidget}"/>
</wf-core:resolveView>
