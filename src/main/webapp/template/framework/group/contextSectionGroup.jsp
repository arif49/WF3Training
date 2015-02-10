<!--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/group/contextSectionGroup.jsp#2 $
 * Last edited by : $Author: dbs $ $Date: 2014/06/26 $
 * Version        : $Revision: #2 $
 *
 * Copyright (C) 2014 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
-->

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>
<%@ taglib prefix="section" uri="http://www.escenic.com/taglib/escenic-section" %>
<%@ taglib prefix="view" uri="http://www.escenic.com/taglib/escenic-view" %>
<%@ taglib prefix="menu" uri="http://www.escenic.com/taglib/escenic-menu" %>

<c:set var="parentGroup" value="${requestScope.groupItem}" scope="page"/>
<c:set var="contextSectionArea" value="${parentGroup.areas['contextSection-area']}"/>

<c:if test="${not empty contextSectionArea.items}">
  <c:set var="sectionRef" value="${parentGroup.options.reference}"/>
  <c:choose>
    <c:when test="${sectionRef eq 'menu'}">
      <c:if test="${not empty parentGroup.options.menuName}">
        <menu:use id="menuTree" treeName="${parentGroup.options.menuName}">
          <view:iterate id="menuItem" name="menuTree" depth="2">
            <c:if test="${menuItem.type == 1}">
              <section:use sectionId="${menuItem.sectionId}">
                <c:set var="items" value="${contextSectionArea.items}" scope="request"/>
                <wf-core:showItems/>
              </section:use>
            </c:if>
          </view:iterate>
        </menu:use>
      </c:if>
    </c:when>
    <c:otherwise>
      <c:choose>
        <c:when test="${sectionRef eq 'section'}">
          <%--<c:set var="contextSection"  value="${parentGroup.options.contentSection.value}"/>--%>
        </c:when>
        <c:when test="${parentGroup.options.reference eq 'articleHome'}">
          <c:if test="${requestScope['com.escenic.context']=='art'}">
            <c:set var="contextSection" value="${article.homeSection}"/>
          </c:if>
        </c:when>
      </c:choose>
      <c:if test="${not empty contextSection}">
        <section:use sectionId="${contextSection.id}">
          <c:set var="items" value="${contextSectionArea.items}" scope="request"/>
          <wf-core:showItems/>
        </section:use>
      </c:if>
    </c:otherwise>
  </c:choose>
</c:if>