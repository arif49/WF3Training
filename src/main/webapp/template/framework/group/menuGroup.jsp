<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/menuGroup.jsp#1 $
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

<c:set var="menuGroupArea" value="${item.areas['menuGroup-area']}"/>
<c:set var="menuGroupStyleClass" value="${item.options.customStyleClass}"/>
<c:set var="menuGroupStyleId" value="${item.options.styleId}"/>
<c:set var="items" value="${menuGroupArea.items}" scope="request"/>

<ul <c:if test="${not empty menuGroupStyleId}">id="${menuGroupStyleId}"</c:if>
    class="${btCss.nav} ${btCss.navbarNav} <c:if test='${not empty menuGroupStyleClass}'>${menuGroupStyleClass}</c:if>">
  <wf-core:showItems/>
</ul>

<c:remove var="menuGroupStyleClass" scope="page"/>
<c:remove var="menuGroupStyleId" scope="page"/>