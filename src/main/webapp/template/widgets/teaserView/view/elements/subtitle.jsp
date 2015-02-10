<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/subtitle.jsp#1 $
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
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:if test="${not empty fn:trim(resultItem.content.fields.subtitle)}">
  <wf-util:wrap htmlTag="${widget.model.elementSettings['subtitle.htmltag']}"
                styleClass="${widget.model.elementSettings['subtitle.styleclass']} ${widget.model.elementSettings['subtitle.textsize']}">
    <wf-util:link url="${resultItem.content.url}"
                  styleClass="${widget.model.linkSettings.subtitle.inline ? 'inline' : ''}"
                  loadingDevices="${widget.model.inlineDevices}"
                  showLink="${widget.model.linkSettings.subtitle.enabled}">
      ${resultItem.content.fields.subtitle}
    </wf-util:link>
  </wf-util:wrap>
</c:if>