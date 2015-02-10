<%--
* File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/head/canonical.jsp#1 $
* Last edited by : $Author: dbs $ $Date: 2014/08/26 $
* Version        : $Revision: #1 $
*
* Copyright (C) 2008 Escenic AS.
* All Rights Reserved.  No use, copying or distribution of this
* work may be made except in accordance with a valid license
* agreement from Escenic AS.  This notice must be included on
* all copies, modifications and derivatives of this work.
 --%>
<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>

<c:choose>
  <c:when test="${requestScope['com.escenic.framework.context'] == 'tag'}">
    <c:set var="pTag" value="${requestScope['com.escenic.framework.ece.tag']}"/>
    <c:set var="tagPageURL"
           value="${requestScope['com.escenic.framework.topic.section.specific.uri.enabled'] ?
           wfn:tagPageUrlWithSection(section, pTag) : wfn:tagPageUrlWithPublication(publication, pTag)}"/>
    <link rel="canonical" href="${tagPageURL}"/>
  </c:when>
  <c:otherwise>
    <c:choose>
      <c:when test="${requestScope['com.escenic.context']=='art'}">
        <link rel="canonical" href="${article.url}"/>
      </c:when>
      <c:otherwise>
        <link rel="canonical" href="${section.url}"/>
      </c:otherwise>
    </c:choose>
  </c:otherwise>
</c:choose>


