<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-menu/src/main/webapp/template/widgets/menu/controller/default.jsp#2 $
 * Last edited by : $Author: dbs $ $Date: 2014/06/23 $
 * Version        : $Revision: #2 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%-- this is the controller for the horizontal view of menu widget --%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="view" uri="http://www.escenic.com/taglib/escenic-view" %>
<%@ taglib prefix="menu" uri="http://www.escenic.com/taglib/escenic-menu" %>
<%@ taglib prefix="collection" uri="http://www.escenic.com/taglib/escenic-collection" %>

<c:set var="menu" value="${widget.model}"/>
<c:set var="menuLevel" value="${menu.menuLevel}"/>

<%-- create a generic view named 'menu' from the given ${menu.menuName} --%>
<menu:use id="menuTreeView" treeName="${menu.menuName}">
  <%-- base is the menu item for current section --%>
  <menu:item id="base"/>
  <collection:createList id="horizontalMenuItemsList" type="java.util.ArrayList"/>
  <c:choose>
    <%--if menuLevel is 1--%>
    <c:when test="${menuLevel eq 1}">
      <view:iterate id="menuItem" name="menuTreeView" depth="2">
        <%-- get the relationship between base and the current menu item --%>
        <c:if test="${not empty base}">
          <view:relationships id="baseRelation" name="base"/>
        </c:if>
        <%--checking if the menuItem belongs to the correct menuLevel--%>
        <c:if test="${menuItem.level eq 1}">
          <jsp:useBean id="topMenuItem" class="java.util.HashMap"/>
          <c:set target="${topMenuItem}" property="menuItem" value="${menuItem}"/>
          <%--checking if the menuItem is active or not--%>
          <c:choose>
            <c:when test="${baseRelation.base || baseRelation.ancestor || baseRelation.parent}">
              <%-- the current menu item is active --%>
              <c:set target="${topMenuItem}" property="active" value="${true}"/>
            </c:when>
            <c:otherwise>
              <%-- the current menu item is not active --%>
              <c:set target="${topMenuItem}" property="active" value="${false}"/>
            </c:otherwise>
          </c:choose>
          <collection:add collection="${horizontalMenuItemsList}" value="${topMenuItem}"/>
          <c:remove var="topMenuItem" scope="page"/>
        </c:if>
      </view:iterate>
    </c:when>
    <%--for any menulevel except menuLevel 1--%>
    <c:otherwise>
      <%--Getting the section menuItem--%>
      <view:iterate id="menuItem" name="menuTreeView">
        <c:if test="${section.url eq menuItem.URL}">
          <c:set target="${menu}" property="sectionMenuItem" value="${menuItem}"/>
          <c:set target="${menu}" property="menuLevel" value="${menuLevel}"/>
          <c:set var="sectionMenuItem" value="${menuItem}"/>
        </c:if>
      </view:iterate>
      <%--Checking whether to process this menu or not based on current section level--%>
      <c:if test="${sectionMenuItem.level ge menuLevel or sectionMenuItem.level eq menuLevel-1}">
        <c:choose>
          <c:when test="${sectionMenuItem.level gt menuLevel}">
            <c:set var="activeItemList" value="${sectionMenuItem}"/>
            <c:set var="activeItem" value="${sectionMenuItem}"/>
            <c:forEach begin="1" end="${sectionMenuItem.level - menuLevel +1}" varStatus="status">
              <c:if test="${status.count ne 1}">
                <c:set var="activeItem" value="${activeItem.parent}"/>
              </c:if>
              <c:set var="activeItemList" value="${activeItemList.parent}"/>
            </c:forEach>
            <c:set var="activeItemList" value="${activeItemList.children}"/>
          </c:when>
          <c:when test="${sectionMenuItem.level eq menuLevel-1}">
            <c:set var="activeItemList" value="${sectionMenuItem.children}"/>
            <c:set var="activeItem" value=""/>
          </c:when>
          <c:otherwise>
            <c:set var="activeItemList" value="${sectionMenuItem.parent.children}"/>
            <c:set var="activeItem" value="${sectionMenuItem}"/>
          </c:otherwise>
        </c:choose>
        <c:forEach var="menuItem" items="${activeItemList}">
          <jsp:useBean id="activeSubmenuItem" class="java.util.HashMap"/>
          <c:set target="${activeSubmenuItem}" property="menuItem" value="${menuItem}"/>
          <%--checking if the menuItem is active or not--%>
          <c:choose>
            <c:when test="${not empty activeItem and menuItem eq activeItem}">
              <%-- the current menu item is active --%>
              <c:set target="${activeSubmenuItem}" property="active" value="${true}"/>
            </c:when>
            <c:otherwise>
              <%-- the current menu item is not active --%>
              <c:set target="${activeSubmenuItem}" property="active" value="${false}"/>
            </c:otherwise>
          </c:choose>
          <collection:add collection="${horizontalMenuItemsList}" value="${activeSubmenuItem}"/>
          <c:remove var="activeSubmenuItem" scope="page"/>
        </c:forEach>
      </c:if>
    </c:otherwise>
  </c:choose>
  <%--adding the entire menuItem list in the widget.model map--%>
  <c:set target="${menu}" property="items" value="${horizontalMenuItemsList}"/>
  <c:remove var="horizontalMenuItemsList" scope="page"/>
</menu:use>