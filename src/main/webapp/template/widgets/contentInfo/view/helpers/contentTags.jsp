<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>

<c:set var="sectionSpecificTopicURIEnabled"
       value="${requestScope['com.escenic.framework.topic.section.specific.uri.enabled']}"/>

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

  <li>
    <a href="${tagUrl}">
      <span class="${widget.properties['contentTags.span.class']}">${tag.name}</span>
    </a>
  </li>
</c:forEach>