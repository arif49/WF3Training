<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-heading/src/main/webapp/template/widgets/heading/view/source/contextTag.jsp#2 $
 * Last edited by : $Author: saz $ $Date: 2014/05/28 $
 * Version        : $Revision: #2 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%@ page session="false" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<jsp:include page="../helper/tag.jsp"/>

<wf-util:link url="${widget.tagUrl}"
              styleClass="${widget.model.anchorStyleClass}"
              showLink="${not widget.model.omitLink}">
  ${not empty widget.model.customText ? widget.model.customText : requestScope['com.escenic.framework.ece.tag'].name}
</wf-util:link>