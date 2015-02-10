<%--* File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/head/head.jsp#7 $* Last edited by : $Author: dbs $ $Date: 2014/08/26 $* Version        : $Revision: #7 $** Copyright (C) 2008 Escenic AS.* All Rights Reserved.  No use, copying or distribution of this* work may be made except in accordance with a valid license* agreement from Escenic AS.  This notice must be included on* all copies, modifications and derivatives of this work. --%><%@ page session="false" %><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %><%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %><%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %><%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %><jsp:include page="language.jsp"/><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><c:set var="tag" value="${requestScope['com.escenic.framework.ece.tag']}"/><c:set var="pageTitle">  <c:choose>    <c:when test="${requestScope['com.escenic.context']=='art' and not empty article.title}">      <c:out value="${article.title}" escapeXml="true"/> -    </c:when>    <c:when test="${not empty tag}">      <c:out value="${tag} ${not empty tag.description ? '-' :''} ${fn:trim(tag.description)}" escapeXml="true"/> -    </c:when>    <c:when test="${section.uniqueName != 'ece_frontpage'}">      <c:out value="${section.name}" escapeXml="true"/> -    </c:when>  </c:choose></c:set><title>${pageTitle} ${publicationTitle}</title><%--viewport meta is required for responsive layout--%><meta name="viewport" content="width=device-width, initial-scale=1.0"><%-- trigger for search engines to notify about Ajax crawling --%><c:if test="${wfn:hasLazyFragment(requestScope.configSectionPool.rootElement)}">  <meta name="fragment" content="!"></c:if><wf-core:renderItemsInArea areaName="meta"/><jsp:include page="icons.jsp"/><%-- include canonical link --%><jsp:include page="canonical.jsp"/><%-- include stylesheets --%><jsp:include page="style.jsp"/><%-- HTML5 shim, Respond.js for IE6-8 support of HTML5 elements --%><!--[if lt IE 9]><script src="${template.staticUrl}js/html5shiv.js"></script><script src="${template.staticUrl}js/respond.min.js"></script><![endif]--><%--respond.min.js works by requesting a pristine copy of your CSS via AJAX, so if you host your stylesheets on a CDN (or a subdomain),you'll need to upload a proxy page to enable cross-domain communication. Please follow the steps in the following link :https://github.com/scottjehl/Respond%><%-- script required to safely use ready before including jQuery --%><script>(function(w,d,u){w.readyQ=[];w.bindReadyQ=[];function p(x,y){if(x=="ready"){w.bindReadyQ.push(y);}else{w.readyQ.push(x);}};var a={ready:p,bind:p};w.$=w.jQuery=function(f){if(f===d||f===u){return a}else{p(f)}}})(window,document)</script>