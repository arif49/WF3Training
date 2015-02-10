<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-content-info/src/main/webapp/template/widgets/contentInfo/view/default.jsp#2 $
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
<%@ taglib prefix="util" uri="http://www.escenic.com/taglib/escenic-util" %>

<c:if test="${requestScope['com.escenic.context']=='art'}">
  <c:set var="contentInformation">
      <jsp:include page="helpers/${widget.model.information}.jsp"/>
  </c:set>

  <c:choose>
      <c:when test="${not empty widget.model.fieldWrapper}">
          <${widget.model.fieldWrapper} ${widget.model.fieldStyleId} ${widget.model.fieldStyleClass}>
          ${contentInformation}
          </${widget.model.fieldWrapper}>
      </c:when>
      <c:otherwise>
          ${contentInformation}
      </c:otherwise>
  </c:choose>
</c:if>