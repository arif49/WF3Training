<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/renderAreasInGroup.jsp#4 $
 * Last edited by : $Author: ira $ $Date: 2014/05/30 $
 * Version        : $Revision: #4 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<%--
 This page renders an area from the parentGroup
- requestScope.parentGroup: required the group to find the area from
- param.areaName : required, the name of the area to render
- param.elementClass: optional, class to add in the area element
- param.elementWidth: required, the elementWidth value to set for responsive image
--%>

<c:set var="area" value="${requestScope.parentGroup.areas[param.areaName]}"/>
<c:set var="htmlTag" value="${area.options.htmlTag}"/>
<c:set var="areaStyleClass" value="${area.options.areaStyleClass}"/>
<c:set var="role">
  <c:if test="${not empty param.elementRole}">role="${param.elementRole}"</c:if>
</c:set>
<c:set var="elementwidth" value="${param.elementWidth}" scope="request"/>
<c:if test="${fn:length(area.items) > 0}">
  <${htmlTag} class="${areaStyleClass} ${param.elementClass}" ${role}>
    <wf-core:renderFragment element="${area}">
      <c:set var="items" value="${area.items}" scope="request"/>
      <wf-core:showItems level="0"/>
      <c:remove var="elementwidth" scope="request"/>
      <c:remove var="items" scope="request"/>
    </wf-core:renderFragment>
  </${htmlTag}>
</c:if>
