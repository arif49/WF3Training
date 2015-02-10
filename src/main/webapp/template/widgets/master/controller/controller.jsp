<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-master/src/main/webapp/template/widgets/master/controller/controller.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2010 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%-- this is the general controller for the master widget --%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<%-- create the map named 'master' that will contain relevant field values --%>
<jsp:useBean id="master" type="java.util.Map" scope="request"/>

<%-- The masterUniqueName field is now deprecated and hidden in the studio interface.
     Following condition is used only for backward compatibility --%>
<c:choose>
  <c:when test="${not empty master.masterSectionUniqueName.value}">
    <c:set target="${master}" property="masterSectionUniqueName" value="${master.masterSectionUniqueName.value}" />
  </c:when>
  <c:otherwise>
    <c:if test="${not empty master.masterUniqueName}">
      <c:set target="${master}" property="masterSectionUniqueName" value="${master.masterUniqueName}" />
    </c:if>
  </c:otherwise>
</c:choose>
<c:set target="${master}" property="wrapperStyleClass">widget master ${master.view}<c:if test="${not empty master.customStyleClass}"> ${master.customStyleClass}</c:if></c:set>