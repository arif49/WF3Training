<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/processor/column.jsp#1 $
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

<c:set var="columnGroupArea" value="${item.areas['column-area']}"/>
<c:set var="columnGroupStyleClass" value="${item.options.customStyleClass}"/>
<c:set var="columnGroupStyleId" value="${item.options.styleId}"/>
<c:set var="items" value="${columnGroupArea.items}" scope="request"/>

<c:set var="htmlTag" value="${not empty item.options['htmlTag'] ? item.options['htmlTag'] : 'div'}"/>
<c:set var="columnKey" value="column${param.columnSpan}"/>
<c:set var="styleId">
    <c:if test="${not empty columnGroupStyleId}">id="${columnGroupStyleId}"</c:if>
</c:set>
<${htmlTag} ${styleId} class="${btCss[columnKey]} ${columnGroupStyleClass}">
    <wf-core:showItems/>
</${htmlTag}>

<c:remove var="columnKey"/>
