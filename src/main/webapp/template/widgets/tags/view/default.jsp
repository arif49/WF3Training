<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-tags/src/main/webapp/template/widgets/tags/view/default.jsp#6 $
 * Last edited by : $Author: dbs $ $Date: 2014/09/10 $
 * Version        : $Revision: #6 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:if test="${not empty widget.tags and widget.model.maxTags - 1 >= 0}">
  <c:set var="sectionSpecificTopicURIEnabled"
         value="${requestScope['com.escenic.framework.topic.section.specific.uri.enabled']}"/>
  <c:set var="listTag" value="${not empty widget.properties['list.tag'] ? widget.properties['list.tag'] : 'ul'}"/>
  <c:set var="listStyle" value="${widget.properties['list.class']}"/>
  <c:set var="itemStyleClass" value="${widget.properties['item.class']}"/>

  <wf-util:wrap htmlTag="${listTag eq 'ul' ? listTag : ''}" styleClass="${listStyle}">
    <c:forEach items="${widget.tags}" var="tag" end="${widget.model.maxTags - 1}">
      <%--Settings the tag url--%>
      <c:choose>
        <c:when test="${sectionSpecificTopicURIEnabled}">
          <c:url var="tagUrl" value="${wfn:tagPageUrlWithSection(section, tag)}"/>
        </c:when>
        <c:otherwise>
          <c:url var="tagUrl" value="${wfn:tagPageUrlWithPublication(publication, tag)}"/>
        </c:otherwise>
      </c:choose>

      <wf-util:wrap htmlTag="${listTag eq 'ul' ? 'li' : listTag}" styleClass="${listTag eq 'ul' ? '' : listStyle}">
        <a href="${tagUrl}" <c:if test="${not empty itemStyleClass}">class ="${itemStyleClass}"</c:if> >
            ${tag.name}
        </a>
      </wf-util:wrap>

    </c:forEach>
  </wf-util:wrap>
</c:if>