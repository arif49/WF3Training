<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-media/src/main/webapp/template/widgets/media/view/default.jsp#7 $
 * Last edited by : $Author: saz $ $Date: 2014/08/13 $
 * Version        : $Revision: #7 $
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
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>


<c:if test="${requestScope['com.escenic.context']=='art'}">
  <c:set var="keyframes" value="${wfn:getRelatedElements(article,'related','keyframe',1)}"/>
  <div class="wf-media autoplay posterframe-wrapper"
       data-src="${article.url}/mediaInfo"
       data-reuqested="${true}"
       data-root-url="${publication.url}">
    <c:choose>
      <c:when test="${fn:length(keyframes)>0}">
        <wf-core:image article="${keyframes[0].content}"
                       styleClass="media-object"/>
      </c:when>
      <c:otherwise>
        <img src="${publication.url}/static/img/placeholder/LANDSCAPE.gif" style="width: 100%;background-color: #000;"/>
      </c:otherwise>
    </c:choose>
    <span class="glyphicon glyphicon-play-circle"></span>
  </div>

  <c:if test="${widget.model.enableCuePoint}">
    <jsp:include page="helpers/cuepoints.jsp"/>
  </c:if>
</c:if>