<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/kicker.jsp#3 $
 * Last edited by : $Author: saz $ $Date: 2014/06/02 $
 * Version        : $Revision: #3 $
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
<%@ taglib prefix="section" uri="http://www.escenic.com/taglib/escenic-section" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>

<c:choose>
  <c:when test="${widget.model.kickermode eq 'homesection'}">
    <c:set var="kickerText" value="${resultItem.content.homeSection.name}"/>
    <c:set var="kickerURL" value="${resultItem.content.homeSection.url}"/>
  </c:when>
  <c:when test="${widget.model.kickermode eq 'customsection'}">
    <section:use uniqueName="${widget.model.customsection}">
      <c:set var="kickerText" value="${section.name}"/>
      <c:set var="kickerURL" value="${section.url}"/>
    </section:use>
  </c:when>
  <c:when test="${widget.model.kickermode eq 'tag'}">
    <c:set var="kickerText" value=""/>
    <c:set var="kickerURL" value=""/>
    <c:if test="${not empty resultItem.content.tags and fn:length(resultItem.content.tags) > 0}">
      <c:set var="primaryTag" value="${resultItem.content.tags[0]}"/>
      <c:set var="sectionSpecificTopicURIEnabled"
             value="${requestScope['com.escenic.framework.topic.section.specific.uri.enabled']}"/>
      <c:set var="kickerText" value="${primaryTag.name}"/>
      <c:choose>
        <%--Getting the tag page url.--%>
        <c:when test="${sectionSpecificTopicURIEnabled}">
          <c:url var="kickerURL" value="${wfn:tagPageUrlWithSection(section, primaryTag)}"/>
        </c:when>
        <c:otherwise>
          <c:url var="kickerURL" value="${wfn:tagPageUrlWithPublication(publication, primaryTag)}"/>
        </c:otherwise>
      </c:choose>
    </c:if>
  </c:when>
  <c:when test="${widget.model.kickermode eq 'kicker'}">
    <c:set var="kickerText" value="${resultItem.actualItem.fields.kicker}"/>
    <c:set var="kickerURL" value=""/>
  </c:when>
  <c:when test="${widget.model.kickermode eq 'overline'}">
    <c:set var="kickerText" value="${resultItem.content.fields.overline}"/>
    <c:set var="kickerURL" value=""/>
  </c:when>
</c:choose>

<c:if test="${not empty fn:trim(kickerText)}">
  <wf-util:wrap htmlTag="${widget.model.elementSettings['kicker.htmltag']}"
                styleClass="${widget.model.elementSettings['kicker.styleclass']} ${widget.model.elementSettings['kicker.textsize']}">
    <c:choose>
      <c:when test="${not empty kickerURL}">
        <a href="${kickerURL}"> ${kickerText} </a>
      </c:when>
      <c:otherwise>
        ${kickerText}
      </c:otherwise>
    </c:choose>
  </wf-util:wrap>
</c:if>
