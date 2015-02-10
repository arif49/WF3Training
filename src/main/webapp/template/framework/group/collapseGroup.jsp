<%--
 @author <a href="mailto:IRashid@vizrt.com">Ivey Rashid</a>
 @author last modified by $ 
 @version $ $
--%>
<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:set var="parentGroup" value="${requestScope.groupItem}" scope="page"/>
<c:set var="navbarCollapseUniqueID" value="${requestScope.navbarCollapseUniqueID + 1}" scope="request"/>
<c:set var="navbarID" value="navbar-collapse-${navbarCollapseUniqueID}"/>

<c:if test="${not empty parentGroup.areas.collapse.items}">
  <c:set var="items" value="${parentGroup.areas.collapse.items}" scope="request"/>

  <div class="${btCss.navbarHeader}">
    <button type="button" class="${btCss.navbarToggle} collapsed" data-toggle="${btCss.collapse}" data-target="#${navbarID}">
      <span class="${btCss.iconBar}"></span>
      <span class="${btCss.iconBar}"></span>
      <span class="${btCss.iconBar}"></span>
    </button>
  </div>

  <%--Everything you want hidden at 940px or less, place within here--%>
  <div id="${navbarID}"  class="${btCss.navbarCollapse} ${btCss.collapse}">
    <%-- show collapsed items here --%>
      <wf-core:showItems/>
  </div>
</c:if>
