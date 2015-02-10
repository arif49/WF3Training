<%@ page import="com.escenic.framework.tag.util.ConfigUtil" %>
<%@ page import="neo.xredsys.api.Section" %>
<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/preview/config-message.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>

<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
  <style type="text/css">
    body {
      -webkit-user-select: none;
      user-select: none;
      margin: 0;
      font: 13px "Lucida Grande", Arial, sans-serif;
    }

    .msg {
      padding: 10px; border-bottom: 1px solid silver; color: #525252;
      font-size: 14px; text-align: left;
    }
  </style>
</head>

<c:set var='configType' value='<%=new ConfigUtil().getConfigType((Section) request.getAttribute("section"))%>'/>
<c:set var="contextType">
  <c:choose>
    <c:when test="${configType == 'master'}">content item or section</c:when>
    <c:when test="${configType == 'profile'}">content item or section</c:when>
    <c:when test="${configType == 'article'}">content item</c:when>
    <c:when test="${configType == 'section'}">section</c:when>
    <c:otherwise></c:otherwise>
  </c:choose>
</c:set>

<body>
<c:if test="${not empty contextType}">
  <div class="msg">Please choose a ${contextType} as context to preview this template.</div>
</c:if>
<c:if test="${empty contextType}">
  <div class="msg">This template cannot be previewed.</div>
</c:if>
</body>
</html>