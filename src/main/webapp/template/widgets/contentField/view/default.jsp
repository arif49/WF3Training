<%--
 * File           : $Header:
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

<%-- Get the field value first --%>
<c:if test="${not empty widget.contentItemFieldValue}">
  <c:choose>
      <c:when test="${widget.model.addFieldWrapper}">
          <${widget.model.fieldWrapper} ${widget.model.fieldStyleId} ${widget.model.fieldStyleClass}>
          ${widget.contentItemFieldValue}
          </${widget.model.fieldWrapper}>
      </c:when>
      <c:otherwise>
          ${widget.contentItemFieldValue}
      </c:otherwise>
  </c:choose>
</c:if>