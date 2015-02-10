<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/helpers/slideshow.jsp#12 $
 * Last edited by : $Author: dbs $ $Date: 2014/07/31 $
 * Version        : $Revision: #12 $
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
<%@ taglib prefix="collection" uri="http://www.escenic.com/taglib/escenic-collection" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:set var="articleId" value="${resultItem.articleId}"/>
<c:set var="relatedItems" value="${resultItem.related.media}"/>
<c:set var="wfMediaContentTypes" value="video,videoIngest,videoFile,audio,audioIngest,audioFile"/>

<${widget.properties['element.markup.tag.slideshow']} class="${widget.properties['element.markup.class.slideshow']}">
  <c:if test="${widget.model.imagelink eq 'article'}">
    <c:set var="imageLink" value="${resultItem.content.url}"/>
  </c:if>

  <c:if test="${not empty relatedItems and fn:length(relatedItems)>0}">
    <c:set var="imageVariant"
           value="${not empty resultItem.extra.imageVariant? resultItem.extra.imageVariant: widget.model.imageaspectratio}"/>
    <c:if test="${imageVariant ne 'HIDE'}">
      <div id="teaser-${widgetContent.id}-${articleId}-slideshow" class="${btCss.carousel} ${btCss.slide}">
        <%--Showing page indicator here--%>
        <c:if test="${fn:length(relatedItems)>1}">
          <ol class="${btCss.carouselIndicators}">
            <c:forEach var="mediaItem" items="${relatedItems}" varStatus="loopStatus">
              <c:set var="cssClass" value="${loopStatus.first?'class=\"active\"':\"\"}"/>
              <li data-target="#teaser-${widgetContent.id}-${articleId}-slideshow"
                  data-slide-to="${loopStatus.index}" ${cssClass}></li>
            </c:forEach>
          </ol>
        </c:if>

        <div class="${btCss.carouselInner}">
          <c:forEach var="mediaItem" items="${relatedItems}" varStatus="loopStatus">
            <div class="${btCss.item} <c:if test="${loopStatus.first}">${btCss.active}</c:if>">
              <c:choose>
                <c:when test="${mediaItem.content.articleTypeName eq 'picture'}">
                  <c:if test="${widget.model.imagelink eq 'image'}">
                    <c:set var="imageLink" value="${mediaItem.content.url}"/>
                  </c:if>

                  <c:if test="${not empty mediaItem.fields.caption and fn:length(fn:trim(mediaItem.fields.caption))>0}">
                    <c:set var="caption" value="${mediaItem.fields.caption}"/>
                  </c:if>

                  <wf-util:link url="${imageLink}" showLink="${widget.model.imagelink ne 'nolink'}">
                    <wf-core:image article="${mediaItem.content}"
                                   aspectVariant="${imageVariant}"
                                   styleClass="media-object"/>
                  </wf-util:link>
                </c:when>
                <c:when test="${fn:contains(wfMediaContentTypes,mediaItem.content.articleTypeName)}">
                  <c:if test="${not empty mediaItem.content.relatedElements.related.items[0].content.fields.caption and
                      fn:length(fn:trim(mediaItem.content.relatedElements.related.items[0].content.fields.caption))>0}">
                    <c:set var="caption" value="${mediaItem.content.relatedElements.related.items[0].content.fields.caption}"/>
                  </c:if>

                  <wf-core:media article="${mediaItem.content}"/>
                </c:when>
              </c:choose>
              
              <c:if test="${widget.model.showcaption ne 'hide' and not empty caption}">
                <div class="${btCss.carouselCaption} <c:if test="${widget.model.showcaption eq 'mouseover'}">animate</c:if> ">
                  <h4>${caption}</h4>
                </div>
              </c:if>
            </div>
          </c:forEach>
        </div>
        <c:if test="${fn:length(relatedItems)>1}">
          <a class="${btCss.carouselControl} ${btCss.left} slideShow-video-navigation-fix" href="#teaser-${widgetContent.id}-${articleId}-slideshow"
              data-slide="prev">
            <span class="${btCss.iconPrev}"></span>
          </a>
          <a class="${btCss.carouselControl} ${btCss.right} slideShow-video-navigation-fix" href="#teaser-${widgetContent.id}-${articleId}-slideshow"
              data-slide="next">
            <span class="${btCss.iconNext}"></span>
          </a>
        </c:if>
      </div>
    </c:if>
  </c:if>

  <script type="text/javascript">
    $(function () {
      $("#teaser-${widgetContent.id}-${articleId}-slideshow").find(".item:first").addClass("active");
      $("#teaser-${widgetContent.id}-${articleId}-slideshow").carousel({
          interval: false
      });
    });
  </script>
</${widget.properties['element.markup.tag.slideshow']}>