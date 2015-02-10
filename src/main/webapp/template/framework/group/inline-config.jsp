<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/inline-config.jsp#1 $
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
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.escenic.com/widget-framework/util" prefix="wf-util" %>

<%-- a 'container' wrapper is added while showing the preview in CS --%>
<wf-util:wrap htmlTag="div" styleClass="container" if="${not empty param.configToken}">
  <%--TODO: any smarter way to find elemethWidth--%>
  <%-- render 'inline-config-area' area --%>
  <wf-util:use var="parentGroup" value="${requestScope.configSectionPool.rootElement}">
    <jsp:include page="renderAreasInGroup.jsp">
      <jsp:param name="areaName" value="inline-config-area"/>
      <jsp:param name="elementWidth" value="960"/>
    </jsp:include>
  </wf-util:use>
</wf-util:wrap>