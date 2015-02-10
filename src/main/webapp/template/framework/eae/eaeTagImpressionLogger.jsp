<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/eae/eaeTagImpressionLogger.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/09/03 $
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
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>

<c:set var="eaeLoggerUrl" value="${section.parameters['eae.logger.url']}" />
<c:set var="taghitEnabled" value="${section.parameters['eae.logger.tag.enabled']}" />
<c:if test="${requestScope['com.escenic.context'] == 'art' && not empty eaeLoggerUrl && taghitEnabled != 'false'}">
  <%--
    rt    : Request type (1 is for pageviews)
    contextPath : section ID path
    pubId : Publication ID
    cat   : Category (tagging entity of tag URI)
    meta  : Meta (custom field)
    objId : Object ID (i.e. tag URI hash code)
    type  : Object type (i.e. tag)
    title : Title (i.e. tag name)
    url   : URL (i.e. tag URI)
  --%>

  <c:url var="urlWithCommonParam" value="${eaeLoggerUrl}">
    <c:param name="rt" value="1"/>
    <c:param name="ctxId" value="${article.homeSection.id}"/>
    <c:param name="pubId" value="${publication.id}"/>
    <c:param name="meta" value="tag-hit"/>
    <c:param name="type" value="tag"/>
  </c:url>

  <c:forEach var="tag" items="${article.tags}">
    <c:url var="imageUrl" value="${urlWithCommonParam}">
      <c:param name="contextPath" value="${wfn:createSectionIDPath(article.homeSection)}"/>
      <c:param name="cat" value="${wfn:taggingEntity(tag)}"/>
      <c:param name="objId" value="${wfn:tagUriHashCode(tag)}"/>
      <c:param name="title">
        <c:out value="${tag.name}" escapeXml="true"/>
      </c:param>
      <c:param name="url" value="${tag.id}"/>
    </c:url>

    <c:choose>
      <c:when test="${param.noscript == 'true'}">
        <img src="<c:out value='${imageUrl}'/>" style="display: none" alt="one pixel graphics" width="1" height="1"/>
      </c:when>
      <c:otherwise>
        <script type="text/javascript">
          //<![CDATA[
            var clientDT = new Date().getTime();
            document.write('<img style="display:none;" src="${imageUrl}&amp;clientDT=' + clientDT + '" alt="" width="1" height="1"/>');
          //]]>
        </script>
        <noscript>
          <div>
            <img src="<c:out value='${imageUrl}'/>" alt="one pixel graphics" width="1" height="1"/>
          </div>
        </noscript>
      </c:otherwise>
    </c:choose>
  </c:forEach>
</c:if>
