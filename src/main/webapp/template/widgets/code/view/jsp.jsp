<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-code/src/main/webapp/template/widgets/code/view/jsp.jsp#1 $
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

<c:if test="${not empty widget.model.path}">
  <wf-core:exists id="templateExists" type="general" path="${widget.model.path}" scope="page"/>
  <c:if test="${pageScope.templateExists eq true}">
    <jsp:include page="${widget.model.path}" />
  </c:if>
</c:if>