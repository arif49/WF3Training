<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-heading/src/main/webapp/template/widgets/heading/view/helper/tag.jsp#2 $
 * Last edited by : $Author: saz $ $Date: 2014/05/28 $
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
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>

<c:set var="tag" value="${requestScope['com.escenic.framework.ece.tag']}"/>
<c:set var="sectionSpecificTopicURIEnabled"
       value="${requestScope['com.escenic.framework.topic.section.specific.uri.enabled']}"/>

<c:choose>
  <c:when test="${sectionSpecificTopicURIEnabled}">
    <c:url var="tagUrl" value="${wfn:tagPageUrlWithSection(section, tag)}"/>
  </c:when>
  <c:otherwise>
    <c:url var="tagUrl" value="${wfn:tagPageUrlWithPublication(publication, tag)}"/>
  </c:otherwise>
</c:choose>

<c:if test="${not empty tag.name}">
  <c:set target="${widget}" property="tagUrl" value="${tagUrl}"/>
</c:if>
