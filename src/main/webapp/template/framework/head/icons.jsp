<%--
 @author <a href="mailto:IRashid@vizrt.com">Ivey Rashid</a>
 @author last modified by $ 
 @version $ $
--%>
<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%-- Visuals for Pinned Sites in Windows 8 --%>
<meta name="msapplication-TileImage" content="${template.themeBaseUrl}ico/${section.parameters['theme.icon.msapplication-TileImage']}"/>
<meta name="msapplication-TileColor" content="${section.parameters['theme.icon.msapplication-TileColor']}" />

<%-- Favicon and touch icons --%>
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="${template.themeBaseUrl}ico/${section.parameters['theme.icon.apple-touch-icon-144-precomposed']}">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="${template.themeBaseUrl}ico/${section.parameters['theme.icon.apple-touch-icon-114-precomposed']}">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="${template.themeBaseUrl}ico/${section.parameters['theme.icon.apple-touch-icon-72-precomposed']}">
<link rel="apple-touch-icon-precomposed" href="${template.themeBaseUrl}ico/${section.parameters['theme.icon.apple-touch-icon-57-precomposed']}">
<link rel="shortcut icon" href="${template.themeBaseUrl}ico/${section.parameters['theme.icon']}">
