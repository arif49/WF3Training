<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/comments.jsp#1 $
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
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<wf-core:countArticleComments var="numOfComments" articleId="${resultItem.articleId}"/>

<c:if test="${not empty numOfComments}">
  <wf-util:wrap htmlTag="${widget.model.elementSettings['comments.htmltag']}"
                styleClass="${widget.model.elementSettings['comments.styleclass']} ${widget.model.elementSettings['comments.textsize']}">
    <a href="${resultItem.content.url}#commentsList">
      <i class="${btCss.glyphicon} ${btCss.glyphiconComment}"></i> ${numOfComments}
    </a>
  </wf-util:wrap>
</c:if>

