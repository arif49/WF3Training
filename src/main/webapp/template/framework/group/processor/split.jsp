<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/processor/split.jsp#4 $
 * Last edited by : $Author: ira $ $Date: 2014/05/30 $
 * Version        : $Revision: #4 $
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
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="item" value="${requestScope.groupItem}" scope="page"/>
<c:set var="styleClass" value="${fn:trim(item.options['customStyleClass'])}"/>
<c:set var="styleId" value="${fn:trim(item.options['styleId'])}"/>

<c:set var="splitTag" value="${not empty item.options['htmlTag'] ? item.options['htmlTag'] : 'div'}"/>
<${splitTag} class="${btCss.row} ${styleClass}" <c:if test="${not empty styleId}">id="${styleId}"</c:if> >

<c:forEach var="columnItem" items="${requestScope.columnItems}" varStatus="status">
    <c:set var="styleIdVar" value="column-${status.count}-styleId"/>
    <c:set var="styleClassVar" value="column-${status.count}-styleClass"/>

    <c:set var="styleId" value="${columnItem.area.options[styleIdVar]}"/>
    <c:set var="styleClass" value="${columnItem.area.options[styleClassVar]}"/>

    <c:set var="elementwidth" value="${columnItem.elementwidth}" scope="request"/>
    <c:set var="columnTag" value="${not empty columnItem.area.options['htmlTag'] ? columnItem.area.options['htmlTag'] : 'div'}"/>
    <c:set var="columnKey" value="column${columnItem.columnSpan}"/>
    <${columnTag} class="${btCss[columnKey]} ${styleClass}" <c:if test="${not empty styleId}">id="${styleId}"</c:if> >
      <wf-core:renderFragment element="${columnItem.area}">
        <c:set var="items" value="${columnItem.area.items}" scope="request"/>
        <wf-core:showItems level="${columnItem.level}"/>
      </wf-core:renderFragment>
    </${columnTag}>
    <c:remove var="columnTag" scope="page"/>
    <c:remove var="items" scope="request"/>
    <c:remove var="elementwidth" scope="request"/>
    <c:remove var="styleClass" scope="page"/>
    <c:remove var="styleId" scope="page"/>

</c:forEach>

</${splitTag}>

