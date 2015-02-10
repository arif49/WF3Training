<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/master-config.jsp#1 $
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
<%@ taglib uri="http://www.escenic.com/widget-framework/core" prefix="wf-core" %>

<c:set var="rootGroup" value="${requestScope.configSectionPool.rootElement}" scope="request"/>
<c:set var="parentGroup" value="${rootGroup}" scope="request"/>

<div id="master-config" class="${wfCss.container}">
  <%-- render 'master-config-area' area --%>
  <c:set var="areaName" value="master-config-area"/>
  <jsp:include page="renderAreasInGroup.jsp">
    <jsp:param name="areaName" value="${areaName}"/>
    <jsp:param name="elementWidth" value="960"/>
  </jsp:include>
</div>

<c:remove var="parentGroup" scope="request" />
<c:remove var="rootGroup" scope="request" />