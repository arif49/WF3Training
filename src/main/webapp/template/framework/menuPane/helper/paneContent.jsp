<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/menuPane/helper/paneContent.jsp#2 $
 * Last edited by : $Author: dbs $ $Date: 2014/07/04 $
 * Version        : $Revision: #2 $
 *
 * Copyright (C) 2014 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:set var="paneGroup" value="${requestScope.menuPaneGroup}"/>
<c:set var="dropdownMenuItems" value="${paneGroup.areas['menuPaneGroup-area'].items}"/>

<c:choose>
  <c:when test="${not empty dropdownMenuItems}">
    <li class="${btCss.dropdown} ${wfCss.megadropdown} ${param.allClasses}" <c:if test="${not empty param.styleId}">id="${param.styleId}"</c:if>>
      <a href="${param.linkUrl}" id="${param.linkId}">
        <c:out value="${param.linkText}" escapeXml="true"/> <b class="caret"></b>
      </a>

      <ul class="${btCss.dropdownMenu} ${wfCss.megadropdownMenu}" role="menu" aria-labelledby="${param.linkId}">
        <li>
          <c:set var="items" value="${dropdownMenuItems}" scope="request"/>
          <wf-core:showItems/>
        </li>
      </ul>
    </li>
  </c:when>
  <c:otherwise>
    <li <c:if test="${not empty param.allClasses}">class="${param.allClasses}"</c:if>
        <c:if test="${not empty param.styleId}">id="${styleId}"</c:if>>
      <a href="${param.linkUrl}" id="${param.linkId}">
        <c:out value="${param.linkText}" escapeXml="true"/>
      </a>
    </li>
  </c:otherwise>
</c:choose>
