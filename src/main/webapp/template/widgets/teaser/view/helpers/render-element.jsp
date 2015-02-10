<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/helpers/render-element.jsp#1 $
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
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:set var="elementAreaWrapper" value="${param.wrapper ne 'nowrap' ? param.wrapper : ''}"/>
<c:set var="elementWrapper" value="${param.wrapper eq 'ul' ? 'li' : ''}"/>

<wf-util:wrap htmlTag="${elementAreaWrapper}" styleClass="${param.styleClass}">
    <c:forEach var="element" items="${widget.model[param.elementGroup]}">
      <wf-util:wrap htmlTag="${elementWrapper}">
        <jsp:include page="../elements/${element}.jsp"/>
      </wf-util:wrap>
    </c:forEach>
</wf-util:wrap>