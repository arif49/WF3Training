<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-code/src/main/webapp/template/widgets/code/view/html.jsp#1 $
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
<%@ taglib prefix="util" uri="http://www.escenic.com/taglib/escenic-util" %>

<%--<c:if test="${code.showDiv}"><div class="${code.wrapperStyleClass}" <c:if test="${not empty code.styleId}">id="${code.styleId}"</c:if>></c:if>--%>
  <c:out value="${widget.model.code}" escapeXml="false" />
<%--<c:if test="${code.showDiv}"></div></c:if>--%>

<%--<c:remove var="code" scope="request"/>--%>