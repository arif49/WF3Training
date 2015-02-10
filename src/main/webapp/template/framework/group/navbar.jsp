<%--
 @author <a href="mailto:IRashid@vizrt.com">Ivey Rashid</a>
 @author last modified by $ 
 @version $ $
--%>
<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:set var="parentGroup" value="${requestScope.groupItem}" scope="page"/>

<c:if test="${not empty parentGroup.areas.nav.items}">
  <c:set var="items" value="${parentGroup.areas.nav.items}" scope="request"/>
  <c:set var="navbarStyle"
         value="${not empty parentGroup.options.navbarStyle and parentGroup.options.navbarStyle eq 'custom' ?
                  parentGroup.options.customNavbarStyle : parentGroup.options.navbarStyle }"/>
  <c:set var="navbarPosition"
         value="${not empty parentGroup.options.navbarPostion and parentGroup.options.navbarPostion eq 'no-class' ?
                  '' : parentGroup.options.navbarPostion}"/>

  <${parentGroup.options.htmlTag} class="${btCss.navbar} ${navbarStyle} ${navbarPosition}" role="navigation" >
        <wf-core:showItems/>
  </${parentGroup.options.htmlTag}>
</c:if>