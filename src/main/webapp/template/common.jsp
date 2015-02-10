<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/common.jsp#1 $
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
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="section" uri="http://www.escenic.com/taglib/escenic-section" %>
<%@ taglib prefix="article" uri="http://www.escenic.com/taglib/escenic-article" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>

<%-- Determine if we're in a config section --%>
<c:set var="isConfigSection"
       value="${fn:startsWith(section.uniqueName,'config') and (requestScope['com.escenic.context']=='sec')}"
       scope="request"/>

<c:if test="${not isConfigSection}">
  <c:set var="contentAreaName" value="contentArea" scope="request"/>

  <%-- Creating central placeholder for request scope variables --%>
  <jsp:useBean id="template" class="java.util.HashMap" scope="request" />

  <%-- Setting theme base and variants --%>
  <c:set target="${template}" property="themeName" value="${section.parameters['theme.name']}"/>
  <c:set target="${template}" property="themeVariant" value="${section.parameters['theme.variant']}"/>

  <%-- The following code is for preview of a particular theme when designer mode is enabled --%>
  <c:choose>
    <c:when test="${section.parameters['wf.template.designermode'] eq true}">
      <c:if test="${not empty param.themeName}">
        <c:set var="designerTheme" value="${fn:escapeXml(param.themeName)}" scope="application"/>
      </c:if>
      <c:set target="${template}" property="themeName" value="${applicationScope.designerTheme}"/>
    </c:when>
    <c:otherwise>
      <c:remove var="designerTheme" scope="application"/>
    </c:otherwise>
  </c:choose>

  <%-- Falling back to default theme if none is provided --%>
  <c:if test="${empty template.themeName}">
    <c:set target="${template}" property="themeName" value="default"/>
  </c:if>

  <%-- Setting resources to use for this request --%>
  <c:set target="${template}" property="templateUrl" value="${publication.url}template/framework/"/>
  <c:set var="pubStaticUrl" value="${publication.url}static/"/>
  <c:set target="${template}" property="publicationTitle" value="${section.parameters['publication.title']}"/>

  <c:set target="${template}" property="staticUrl">
    ${not empty section.parameters['wf.resource.static.rootUrl']
      ? section.parameters['wf.resource.static.rootUrl'] : pubStaticUrl}
  </c:set>
  <c:set target="${template}" property="widgetUrl" value="${publication.url}template/widgets/"/>
  <c:set target="${template}" property="themeBaseUrl" value="${template.staticUrl}theme/${template.themeName}/base/"/>

  <%-- Theme variant only if there is a variant to work with --%>
  <c:if test="${not empty template.themeVariant}">
    <c:set target="${template}" property="themeVariantUrl" value="${template.staticUrl}theme/${template.themeName}/${template.themeVariant}/"/>
  </c:if>

  <%-- Get correct wireframe and config section pool --%>
  <wf-core:resolveWireframe var="wireframe" scope="request"/>
  <wf-core:resolveConfigSections/>
  <wf-core:getConfigSectionPool/>

  <%-- Set content profile to use --%>
  <c:if test="${requestScope.wfContentProfile['name'] eq 'default'}">

    <%-- For mobile site, we need to override wireframe value --%>
    <c:set var="overrideTemplatePath" value="/template/framework/misc/overrideForMobile.jsp"/>
    <wf-core:exists id="overrideTemplateExists" type="general" path="${overrideTemplatePath}" scope="page"/>

    <c:if test="${pageScope.overrideTemplateExists eq true}">
      <jsp:include page="${overrideTemplatePath}"/>
    </c:if>

  </c:if>

  <c:if test="${empty applicationScope.wfCss}">
    <wf-core:mapCSS var="wfCss" fileNamePrefix="WFCssResources" scope="application"/>
  </c:if>
  <c:if test="${empty applicationScope.btCss}">
    <wf-core:mapCSS var="btCss" fileNamePrefix="BootstrapCssResources" scope="application"/>
  </c:if>

  <%-- This moved out from config.jsp to make picturefill choosing the right image in lazy widgets --%>
  <c:choose>
    <c:when test="${not empty requestScope.wfContentProfile['image.grid.refViewportWidth']}">
      <c:set var="viewPortWidth" value="${fn:trim(requestScope.wfContentProfile['image.grid.refViewportWidth'])}" scope="request"/>
    </c:when>
    <c:otherwise>
      <c:set var="viewPortWidth" value="1140" scope="request"/>
    </c:otherwise>
  </c:choose>

  <%-- For backwards compatibility; some JSPs may still reference these variables --%>
  <c:set var="templateUrl" value="${template.templateUrl}" scope="request"/>
  <c:set var="resourceUrl" value="${template.staticUrl}" scope="request"/>
  <c:set var="widgetUrl" value="${template.widgetUrl}" scope="request"/>
  <c:set var="skinUrl" value="${template.themeBaseUrl}" scope="request"/>
  <c:set var="skinName" value="${template.themeName}" scope="request"/>
  <c:set var="publicationTitle" value="${template.publicationTitle}" scope="request"/>
  <c:set var="articleListDateString" value="${wfn:getDateString(publication.features['article.list.age.max'])}" scope="request"/>

  <%-- Forwarding to the wireframe --%>
  <c:choose>
    <c:when test="${empty requestScope.wfFragmentToken}">
      <jsp:forward page="framework/wireframe/${requestScope.wireframe}.jsp"/>
    </c:when>
    <c:otherwise>
      <wf-core:findFragmentItem var="items" fragmentToken="${requestScope.wfFragmentToken}"/>
      <c:set var="elementwidth" value="${param.elementwidth}" scope="request"/>
      <wf-core:showItems/>
    </c:otherwise>
  </c:choose>
</c:if>

<c:if test="${isConfigSection}">
  <jsp:include page="framework/preview/config-message.jsp"/>
</c:if>