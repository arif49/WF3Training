<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/media/selectMediaTemplate.jsp#21 $
 * Last edited by : $Author: saz $ $Date: 2014/08/13 $
 * Version        : $Revision: #21 $
 *
 * Copyright (C) 2014 Escenic AS.
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

<c:set var="mediaIcon" value="glyphicon-play-circle"/>
<c:set var="keyframes" value="${wfn:getRelatedElements(requestScope.mediaArticle,'related','keyframe',1)}"/>
<c:set var="imageStyle" value=""/>
<c:if test="${widget.model.imageposition ne 'block' and widget.model.imagewidth ne '100'}">
  <c:set var="imageStyle" value="pull-${widget.model.imageposition}"/>
</c:if>
<c:choose>
  <c:when test="${widget.model.mediaPlayMode eq 'content'}">
    <a href="${requestScope.mediaArticle.url}">
      <div class="posterframe-wrapper ${imageStyle}" style="width: ${widget.model.imagewidth}%">
        <c:choose>
          <c:when test="${fn:length(keyframes)>0}">
            <wf-core:image article="${keyframes[0].content}"
                           aspectVariant="${widget.model.imageaspectratio}"
                           styleClass="media-object"
                           scale="${widget.model.imagewidth}"/>
          </c:when>
          <c:otherwise>
            <img src="${publication.url}/static/img/placeholder/${widget.model.imageaspectratio}.gif"
                 style="width: 100%;background-color: #000;"/>
          </c:otherwise>
        </c:choose>
        <span class="glyphicon ${mediaIcon}"></span>
      </div>
    </a>
  </c:when>
  <c:when test="${widget.model.mediaPlayMode eq 'embedded'}">
    <div class="wf-media posterframe-wrapper ${imageStyle}" style="width: ${widget.model.imagewidth}%"
         data-src="${requestScope.mediaInfoLink}"
         data-root-url="${publication.url}"
         data-requested="${false}"
         data-media-mode="${widget.model.mediaPlayMode}">
      <c:choose>
        <c:when test="${fn:length(keyframes)>0}">
          <wf-core:image article="${keyframes[0].content}"
                         aspectVariant="${widget.model.imageaspectratio}"
                         styleClass="media-object"
                         scale="${widget.model.imagewidth}"/>
        </c:when>
        <c:otherwise>
          <img src="${publication.url}/static/img/placeholder/${widget.model.imageaspectratio}.gif"
               style="width: 100%;background-color: #000;"/>
        </c:otherwise>
      </c:choose>
      <span class="glyphicon ${mediaIcon}"></span>
    </div>
  </c:when>
  <c:when test="${widget.model.mediaPlayMode eq 'popup'}">
    <div class="posterframe-wrapper ${imageStyle}" style="width: ${widget.model.imagewidth}%">
      <c:choose>
        <c:when test="${fn:length(keyframes)>0}">
          <wf-core:image article="${keyframes[0].content}"
                         aspectVariant="${widget.model.imageaspectratio}"
                         styleClass="media-object"
                         scale="${widget.model.imagewidth}"/>
        </c:when>
        <c:otherwise>
          <img src="${publication.url}/static/img/placeholder/${widget.model.imageaspectratio}.gif"
               style="width: 100%;background-color: #000;"/>
        </c:otherwise>
      </c:choose>

      <c:set var="rand"><%= java.lang.Math.round(java.lang.Math.random() * 10000) %>
      </c:set>
      <span class="glyphicon ${mediaIcon} wf-media-popup-trigger" data-toggle="modal"
            data-remote="${publication.url}template/framework/media/mediaModal.jsp"
            data-target="#mediaModal-${rand}-${requestScope.mediaArticle.id}"
            data-media-link="${requestScope.mediaInfoLink}"></span>

      <div class="media-modal modal fade" data-requested="${false}"
           id="mediaModal-${rand}-${requestScope.mediaArticle.id}" role="dialog" aria-labelledby="myLargeModalLabel"
           aria-hidden="true">
      </div>
    </div>
  </c:when>
</c:choose>

