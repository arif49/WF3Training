<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/eae/eaeCommentLoggerClient.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2007 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:set var="eaeLoggerUrl" value="${section.parameters['eae.logger.url']}" />
<c:if test="${requestScope['com.escenic.context'] == 'art' && not empty eaeLoggerUrl}}">
  <%--
    rt    : Request type (1 is for pageviews)
    ctxId : Context ID (i.e. section ID)
    pubId : Publication ID
    cat   : Category (custom field)
    meta  : Meta (custom field)
    objId : Object ID (i.e. article ID, section ID, ...)
    type  : Object type (i.e. article, section, ...)
    title : Title (i.e. article title, section title, ...)
    url   : URL (i.e. article URL, section URL, ...)
  --%>
  <c:url var="imageUrl" value="${eaeLoggerUrl}">
    <c:param name="rt" value="1"/>
    <c:param name="ctxId" value="${article.homeSection.id}"/>
    <c:param name="pubId" value="${publication.id}"/>
    <c:param name="cat" value=""/>
    <c:param name="meta" value="comment-${article.articleTypeName}"/>
    <c:param name="objId" value="${article.id}"/>
    <c:param name="type" value="article"/>
    <c:param name="title">
      <c:out value="${article.title}" escapeXml="true"/>
    </c:param>
    <c:param name="url" value="${article.url}"/>
  </c:url>

  <script type="text/javascript">
    //<![CDATA[
    var clientDT = new Date().getTime();
    document.write('<img src="${imageUrl}&amp;clientDT=' + clientDT + '" alt="" width="1" height="1"/>');
    //]]>
  </script>

  <noscript>
    <div>
      <img src="<c:out value='${imageUrl}'/>" alt="" width="1" height="1"/>
    </div>
  </noscript>
</c:if>