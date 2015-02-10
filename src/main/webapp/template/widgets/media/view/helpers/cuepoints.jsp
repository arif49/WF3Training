<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-media/src/main/webapp/template/widgets/media/view/helpers/cuepoints.jsp#1 $
 * Last edited by : $Author: saz $ $Date: 2014/07/01 $
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
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:if test="${fn:length(widget.model.cuepoints)>0}">
  <ul class="${widget.model.cuepointWrapperClass}" id="cuepoints-${widget.widgetContent.id}">
    <c:forEach items="${widget.model.cuepoints}" var="cuepoint">
      <li class="wf-cuepoint" data-cuepoint-time="${cuepoint.time}">
          ${cuepoint.title}
        <c:if test="${not empty cuepoint.description}">
          <p>${cuepoint.description}</p>
        </c:if>
      </li>
    </c:forEach>
  </ul>
</c:if>