<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/wrapperGroup.jsp#1 $
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

<c:set var="wrapperGroupArea" value="${item.areas['wrapperGroup-area']}"/>
<c:set var="wrapperGroupStyleClass" value="${item.options.customStyleClass}"/>
<c:set var="wrapperGroupStyleId" value="${item.options.styleId}"/>
<c:set var="items" value="${wrapperGroupArea.items}" scope="request"/>
<c:set var="wrapperGroupTag" value="${not empty item.options['htmlTag'] ? item.options['htmlTag'] : 'div'}"/>

<${wrapperGroupTag} <c:if test="${not empty wrapperGroupStyleId}">id="${wrapperGroupStyleId}"</c:if>
     <c:if test="${not empty wrapperGroupStyleClass}">class="${wrapperGroupStyleClass}"</c:if>>
  <wf-core:showItems/>
</${wrapperGroupTag}>