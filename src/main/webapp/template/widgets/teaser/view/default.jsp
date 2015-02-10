<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/default.jsp#2 $
 * Last edited by : $Author: saz $ $Date: 2014/07/22 $
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
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:if test="${not empty widget.model.topelements or not empty widget.model.bodyelements or
              not empty widget.model.bottomelements}">
  <c:set var="teaserWrapper" value="${widget.model.teaserWrapper ne 'nowrap' ? widget.model.teaserWrapper : ''}"/>

  <c:forEach var="resultItem" items="${widget.contentResult.resultItems}">
    <c:set var="resultItem" value="${resultItem}" scope="request"/>

      <wf-util:wrap htmlTag="${teaserWrapper}" styleClass="${resultItem.content.homeSection.uniqueName}
        ${widget.model.teaserStyleClass} ${resultItem.extra.teaserStyle}">
        <div class="teaser ${widget.model.linkSettings.teaser.enabled ? 'link-block' : ''}">
          <wf-util:link url="${resultItem.content.url}"
                        styleClass="${widget.model.linkSettings.teaser.inline ? 'inline' : ''} block-link"
                        loadingDevices="${widget.model.inlineDevices}"
                        showLink="${widget.model.linkSettings.teaser.enabled}">
          </wf-util:link>
          <jsp:include page="helpers/elements.jsp"/>
        </div>
      </wf-util:wrap>
    <c:remove var="resultItem" scope="request"/>
  </c:forEach>
</c:if>







