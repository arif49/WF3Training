<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/helpers/elements.jsp#2 $
 * Last edited by : $Author: mae $ $Date: 2014/07/09 $
 * Version        : $Revision: #2 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:set var="model" value="${widget.model}"/>

<c:if test="${not empty model.topelements}">
  <jsp:include page="render-element.jsp">
    <jsp:param name="elementGroup" value="topelements"/>
    <jsp:param name="wrapper" value="${model.topWrapper}"/>
    <jsp:param name="styleClass" value="${model.topStyleClass}"/>
  </jsp:include>
</c:if>

<c:if test="${not empty model.bodyelements}">
  <jsp:include page="render-element.jsp">
    <jsp:param name="elementGroup" value="bodyelements"/>
    <jsp:param name="wrapper" value="${model.bodyWrapper}"/>
    <jsp:param name="styleClass" value="${model.bodyStyleClass}"/>
  </jsp:include>
</c:if>

<c:if test="${not empty model.bottomelements}">
  <jsp:include page="render-element.jsp">
    <jsp:param name="elementGroup" value="bottomelements"/>
    <jsp:param name="wrapper" value="${model.bottomWrapper}"/>
    <jsp:param name="styleClass" value="${model.bottomStyleClass}"/>
  </jsp:include>
</c:if>