<%--
  Created by IntelliJ IDEA.
  User: saz
  Date: 9/26/13
  Time: 9:10 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="template" uri="http://www.escenic.com/taglib/escenic-template" %>

<c:set var="menu" value="${widget.model}"/>
<c:set var="submenuItem" value="${widget.submenuItem}"/>

<c:choose>
  <c:when test="${submenuItem.URL eq section.url or fn:contains(section.url, submenuItem.URL)}">
    <c:set var="activeClass" value="${menu.activeMenuStyleClass}"/>
  </c:when>
  <c:otherwise>
    <c:set var="activeClass" value=""/>
  </c:otherwise>
</c:choose>

<li class="${menu.dropdownStyle}<c:if test="${not empty activeClass}"> ${activeClass}</c:if>">
  <a href="${submenuItem.URL}" class="dropdown-toggle" data-toggle="dropdown"<c:if test="${submenuItem.type==2}"> target="${submenuItem.target}"</c:if>>${submenuItem.text} <b class="caret"></b></a>
  <ul class="${btCss.dropdownMenu}">
        <c:forEach var="submenu" items="${submenuItem.children}">
          <c:choose>
            <c:when test="${submenu.type == 3}">
              <c:choose>
                <c:when test="${not empty submenu.text}">
                  <c:set var="spaceClass" value="${widget.properties['dropdown.space.text.class']}"/>
                </c:when>
                <c:otherwise>
                  <c:set var="spaceClass" value="${widget.properties['dropdown.space.divider.class']}"/>
                </c:otherwise>
              </c:choose>
              <li class="${spaceClass}">${submenu.text}</li>
            </c:when>
            <c:otherwise>
              <li><a href="${submenu.URL}"<c:if test="${submenu.type==2}"> target="${submenu.target}"</c:if>><c:out value="${submenu.text}" escapeXml="true"/> </a></li>
            </c:otherwise>
          </c:choose>
        </c:forEach>
  </ul>
</li>
