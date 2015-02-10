<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/readmore.jsp#1 $
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
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<wf-util:wrap htmlTag="${widget.model.elementSettings['readmore.htmltag']}"
              styleClass="${widget.model.elementSettings['readmore.styleclass']} ${widget.model.elementSettings['readmore.textsize']}">
  <wf-util:link url="${resultItem.content.url}"
                styleClass="${widget.model.linkSettings.readmore.inline ? 'inline' : ''}"
                loadingDevices="${widget.model.inlineDevices}"
                showLink="${widget.model.linkSettings.readmore.enabled}">
    <fmt:message key="teaser.widget.readMore.label"/>
  </wf-util:link>
</wf-util:wrap>

