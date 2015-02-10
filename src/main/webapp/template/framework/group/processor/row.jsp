<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/processor/row.jsp#1 $
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
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:set var="item" value="${requestScope.groupItem}" scope="page"/>
<c:set var="rowStyleClass" value="${item.options.customStyleClass}"/>
<c:set var="rowStyleId" value="${item.options.styleId}"/>

<c:set var="rowGroupArea" value="${item.areas['row-area']}"/>
<c:set var="items" value="${rowGroupArea.items}" scope="request"/>
<c:set var="htmlTag" value="${not empty item.options['htmlTag'] ? item.options['htmlTag'] : 'div'}"/>
<${htmlTag} class="${btCss.row} ${rowStyleClass}" <c:if test="${not empty rowStyleId}">id="${rowStyleId}"</c:if>>
  <wf-core:showItems/>
</${htmlTag}>