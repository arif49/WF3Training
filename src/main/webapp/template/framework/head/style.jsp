<%--
 @author <a href="mailto:IRashid@vizrt.com">Ivey Rashid</a>
 @author last modified by $ 
 @version $ $
--%>
<%@ page session="false" %>
<%@ page import="com.escenic.framework.tag.util.ScriptHelper" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
  ScriptHelper.resolveVersionedResources(pageContext);
%>

<%-- bootstrap stylesheets --%>
<link href="${template.staticUrl}css/bootstrap.css" rel="stylesheet">
<link href="${template.staticUrl}css/bootstrap-theme.css" rel="stylesheet">

<%-- Generic helper classes, extending Bootstrap helper classes --%>
<link href="${template.staticUrl}css/wf-helper-classes.css" rel="stylesheet">

<%-- Skin base CSS styles, always last for overrides --%>
<c:set var="themeBase" value="${template.themeName}-base.css"/>
<link href="${template.themeBaseUrl}css/${resourceVersions[themeBase]}" rel="stylesheet">

<%-- Skin variant CSS styles, always last for overrides --%>
<c:set var="themeVariant" value="${template.themeName}-${template.themeVariant}.css"/>
<link href="${template.themeVariantUrl}css/${resourceVersions[themeVariant]}" rel="stylesheet">

<%--Flowplayer css--%>
<link href="${template.staticUrl}css/minimalist.css" rel="stylesheet">

<%--MediaElementPlayer css--%>
<link href="${template.staticUrl}css/mediaelementplayer.min.css" rel="stylesheet">

<%-- we may have some inlineStyle in the requestScope set by the style widget --%>
<c:if test="${not empty requestScope.inlineStyle}">
  <style type="text/css">
    ${requestScope.inlineStyle}
  </style>
</c:if>

<c:remove var="inlineStyle" scope="request"/>
