<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/errorpages/generalError.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2008 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>

<%@ page session="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<c:set var="skin" value="${section.parameters['skin']}"/>

<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <title>An unexpected error occurred</title>
  <link rel="stylesheet" type="text/css" href="${publication.url}skins/${skin}/css/error-style.css"/>
</head>

<body>
<div class="${wfCss.errorPage}">
  <div class="${wfCss.logo}">
    <img src="${publication.url}skins/${skin}/gfx/escenic_logo.gif" alt=""/>
  </div>
  <div class="${wfCss.subtitle}">
    <img src="${publication.url}skins/${skin}/gfx/payoff.gif" alt=""/>
  </div>

  <p class="${wfCss.title}">An unexpected error occurred</p>

  <p>Please contact your system administrator</p>
</div>
</body>
</html>
