<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/wf-project-core/wf-demo-resources/src/main/webapp/template/widgets/helloWorld/controller/controller.jsp#1 $
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
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<jsp:useBean id="helloWorld" type="java.util.Map" scope="request"/>

<%--read fields that affects all views --%>
<c:set target="${helloWorld}" property="wrapperStyleClass">widget helloWorld ${helloWorld.view}<c:if test="${noPrint=='true'}"> noPrint</c:if><c:if test="${not empty helloWorld.customStyleClass}"> ${helloWorld.customStyleClass}</c:if></c:set>
