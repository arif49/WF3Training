<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/wireframe/print.jsp#1 $
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
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<html>
<head>
  <style type="text/css">
    @media print {
      * {
        background-color: white !important;
        background-image: none !important;
      }
    }

    html, body {
      padding: 0;
      font-size: 16px;
      font-weight: bold;
      text-align: justify;
      background: transparent;
      margin: 0;
    }

    body {
      font-family: Arial, Verdana, Helvetica, sans-serif;
    }

    div#container {
      width: auto;
      border: 0;
      margin: 0 5%;
      padding: 0;
      float: none !important;
    }

    h1, h2, h3 {
      color: #000;
      font-family: Arial, Verdana, Helvetica, sans-serif;
      font-weight: normal;
    }

    h1 {
      font-size: 36px;
    }

    p.copyright {
      font-size: 0.8em;
    }

    div#logo {
      border-bottom: 1px solid #d9d9d9;
    }

    div#logo img {
      border: 0;
      margin: 20px 0;
    }
  </style>
  <jwr:style src="/bundles/${skinName}.css"/>
  <title>${article.title}</title>
</head>
<body style="background:white none;margin:0; text-align: justify;" onload="self.print()">
<div id="container" >
  <div id="logo">
    <a href="${article.url}" title="${article.title}"><img src="${skinUrl}gfx/logo.png" alt="${skinName}" width="260" height="60"/></a>
  </div>
  <div class="${wfCss.storyContent}">
    <wf-core:getFieldValueByKey var="titleMap" key="title" articleId="${article.id}"/>
    <h1><c:out value="${requestScope.titleMap.fieldValue}" escapeXml="true"/></h1>
    <c:remove var="titleMap" scope="request"/>
  </div>
  <div class="${wfCss.storyContent}">
    <p class="${wfCss.byline}">
      <fmt:message key="pageTools.widget.print.author"/> <span class="authorName"><c:out
        value="${article.author.name}" escapeXml="true"/></span>
    </p>
  </div>

  <div class="${wfCss.dateline}">
    <ul>
      <li class="${wfCss.current} ${wfCss.first}">
        <fmt:message key="pageTools.widget.print.published"/> <c:out value="${article.publishedDate}" escapeXml="true"/>
      </li>
      <li class="${wfCss.modified}">
        <fmt:message key="pageTools.widget.print.updated"/> <c:out value="${article.lastModifiedDate}" escapeXml="true"/>
      </li>
    </ul>
  </div>

  <div class="${wfCss.storyContent}">
    <wf-core:getFieldValueByKey var="leadtextMap" key="leadtext" articleId="${article.id}"/>
    <h5><c:out value="${requestScope.leadtextMap.fieldValue}" escapeXml="true"/></h5>
    <c:remove var="leadtextMap" scope="request"/>
  </div>

  <div class="${wfCss.storyContent}">
    <div class="${wfCss.body}" style="text-align:justify;">
      <c:out value="${article.fields.body.value}" escapeXml="false"/>
    </div>
  </div>
  <p class="${wfCss.copyright}">&copy; <fmt:message key="pageTools.widget.print.copyright"/></p>
</div>
</body>
</html>