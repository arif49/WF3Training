<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-content-body/src/main/webapp/template/widgets/contentBody/view/default.jsp#2 $
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

<c:if test="${widget.hasContentBody}">
    <c:set var="bodyUniqueId" value="content-body-${widget.widgetContent.id}-${article.articleId}" scope="request"/>
    <jsp:include page="helpers/renderBody.jsp"/>
    <c:choose>
        <c:when test="${widget.model.showBody eq 'pagination'}">
            <jsp:include page="helpers/pagination.jsp"/>
        </c:when>
        <c:when test="${widget.model.showBody eq 'partial'}">
            <jsp:include page="helpers/partialPagination.jsp"/>
        </c:when>
    </c:choose>
    <c:remove var="bodyUniqueId" scope="request"/>
</c:if>
