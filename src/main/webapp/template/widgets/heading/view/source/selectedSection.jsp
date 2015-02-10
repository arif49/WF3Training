<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-heading/src/main/webapp/template/widgets/heading/view/source/selectedSection.jsp#1 $
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

<c:if test="${not empty widget.model.sectionSelection}">
  <wf-util:link url="${widget.model.sectionSelection.value.url}"
                styleClass="${widget.model.anchorStyleClass}"
                showLink="${not widget.model.omitLink}">
    ${not empty widget.model.customText ? widget.model.customText :  widget.model.sectionSelection.value.name}
  </wf-util:link>
</c:if>