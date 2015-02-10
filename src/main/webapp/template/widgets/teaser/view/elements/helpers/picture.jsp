<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/helpers/picture.jsp#5 $
 * Last edited by : $Author: dbs $ $Date: 2014/08/11 $
 * Version        : $Revision: #5 $
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
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:set var="imageList" value="${resultItem.related.images}"/>
<c:if test="${not empty imageList and fn:length(imageList)>0}">
  <c:set var="imageItem" value="${imageList[0]}"/>

  <c:set var="imageStyle" value=""/>
  <c:if test="${widget.model.imageposition ne 'block' and widget.model.imagewidth ne '100'}">
    <c:set var="imageStyle" value="pull-${widget.model.imageposition}"/>
  </c:if>

  <${widget.properties['element.markup.tag.picture']}
    class="${wfCss.imgContainer} ${imageStyle} ${widget.properties['element.markup.class.picture']}"
    style="width: ${widget.model.imagewidth}%">

  <%-- resolving url to show --%>
  <c:if test="${widget.model.imagelink eq 'article'}">
    <c:set var="imageLink" value="${resultItem.content.url}"/>
  </c:if>
  <c:if test="${widget.model.imagelink eq 'image'}">
    <c:set var="imageLink" value="${imageItem.content.url}"/>
  </c:if>

  <c:set var="imageVariant"
         value="${not empty resultItem.extra.imageVariant? resultItem.extra.imageVariant: widget.model.imageaspectratio}"/>
  <c:if test="${imageVariant ne 'HIDE'}">
    <wf-util:link url="${imageLink}" showLink="${widget.model.imagelink ne 'nolink'}">
        <wf-core:image article="${imageItem.content}"
                          aspectVariant="${imageVariant}"
                          styleClass="media-object"
                          scale="${widget.model.imagewidth}"/>
    </wf-util:link>

    <%-- rendering caption --%>
    <c:if test="${widget.model.showcaption ne 'hide' and not empty fn:trim(imageItem.fields.caption)}">
      <c:set var="captionStyleClass">
        ${not empty widget.properties['element.markup.class.picture-caption'] ?
                widget.properties['element.markup.class.picture-caption'] : wfCss.pictureCaption}
      </c:set>
      <div class="${captionStyleClass} <c:if test="${widget.model.showcaption eq 'mouseover'}">animate</c:if> ">
        <h4>${imageItem.fields.caption}</h4>
      </div>
    </c:if>
  </c:if>

  </${widget.properties['element.markup.tag.picture']}>
</c:if>