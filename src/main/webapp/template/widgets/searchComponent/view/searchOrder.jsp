<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-search-component/src/main/webapp/template/widgets/searchComponent/view/searchOrder.jsp#1 $
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
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<ul class="${btCss.listInline} ${wfCss.meta}">
  <span><fmt:message key="search.component.widget.orderview.order.by.text"/></span>
  <li class="${widget.scoreLinkClass}">
    <a href="${widget.scorePageLink}">
      <fmt:message key="search.component.widget.orderview.option.relevance"/>
    </a>
  </li>
  <li class="${widget.latestLinkClass}">
    <a href="${widget.latestSortLink}">
      <fmt:message key="search.component.widget.orderview.option.latest"/>
    </a>
  </li>
  <li class="${widget.oldestLinkClass}">
    <a href="${widget.oldestSortLink}">
      <fmt:message key="search.component.widget.orderview.option.oldest"/>
    </a>
  </li>
</ul>
