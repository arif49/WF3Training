<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-menu/src/main/webapp/template/widgets/menu/controller/controller.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%-- this is the general controller for menu widget --%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>


<%--create a hash map that will contain necessary configurations --%>
<jsp:useBean id="menu" type="java.util.Map" scope="request" />

<%-- constants --%>
<c:set target="${menu}" property="styleClass" value="menu"/>
<c:set target="${menu}" property="activeMenuStyleClass" value="${btCss.active}"/>

<c:set target="${menu}" property="wrapperStyleClass">widget menu ${menu.view}<c:if test="${menu.noPrint=='true'}"> noPrint</c:if><c:if test="${not empty menu.customStyleClass}"> ${menu.customStyleClass}</c:if></c:set>