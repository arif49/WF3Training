<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/processor/fixed.jsp#1 $
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
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="item" value="${requestScope.groupItem}"/>
<c:set var="customStyleClass" value="${fn:trim(item.options.customStyleClass)}"/>
<c:set var="styleId" value="${fn:trim(item.options.styleId)}"/>

<div class="${item.type}${' '}${customStyleClass}" <c:if test="${not empty styleId}">id="${styleId}"</c:if> >

  <c:forEach var="columnItem" items="${requestScope.columnItems}">
    <c:set var="elementwidth" value="${columnItem.elementwidth}" scope="request"/>

    <div class="${columnItem.areaString}">
      <c:set var="items" value="${columnItem.area.items}" scope="request"/>
      <wf-core:showItems level="${columnItem.level}"/>
    </div>
  </c:forEach>
  <c:remove var="elementwidth" scope="request"/>
</div>

