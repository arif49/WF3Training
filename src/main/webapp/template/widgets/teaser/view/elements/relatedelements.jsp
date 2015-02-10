<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/relatedelements.jsp#1 $
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

<c:set var="htmlTag"
       value="${widget.model.elementSettings['relatedelements.htmltag']}"/>
<c:set var="styleClass"
       value="${widget.model.elementSettings['relatedelements.styleclass']} ${widget.model.elementSettings['relatedelements.textsize']}"/>
<wf-util:wrap htmlTag="${htmlTag eq 'ul' ? htmlTag : ''}"
              styleClass="${styleClass}">
  <c:forEach var="relatedItem" items="${requestScope.resultItem.related.articles}">
      <wf-util:wrap htmlTag="${htmlTag eq 'ul' ? 'li' : htmlTag}" styleClass="${htmlTag eq 'ul' ? '' : styleClass}">
        <c:if test="${widget.model.showrelationicons}">
          <i class="${btCss.glyphicon} ${btCss.glyphiconAlignJustify}"></i>
        </c:if>
        <a href="${relatedItem.content.url}"> ${relatedItem.fields.title}</a>
      </wf-util:wrap>
  </c:forEach>
</wf-util:wrap>
