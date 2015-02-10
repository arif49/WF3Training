<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/helpers/sdf.jsp#1 $
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
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<c:set var="formattedDate">
  <c:choose>
    <c:when test="${not empty widget.model.customdateformat}">
      <fmt:formatDate pattern="${widget.model.customdateformat}" value="${widget.selectedDate}"/>
    </c:when>
    <c:otherwise>
      <fmt:formatDate pattern="${widget.model.dateformat[widget.model.dateToShow]}" value="${widget.selectedDate}"/>
    </c:otherwise>
  </c:choose>
</c:set>
${widget.model.timestampprefix} ${formattedDate} ${widget.model.timestampsuffix}