<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/tabs/tabbingGroup.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
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
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="collection" uri="http://www.escenic.com/taglib/escenic-collection" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<%-- this JSP page expects the following objects in the request scope if any of them is missing, then this page will not work --%>
<jsp:useBean id="tabbingGroup" type="neo.xredsys.presentation.PresentationElement" scope="request" />
<jsp:useBean id="resourceUrl" type="java.lang.String" scope="request" />

<c:set var="tabbingGroupItems" value="${tabbingGroup.areas['tabbingGroup-area'].items}" />

<collection:createList id="tabbingGroupItemsList" type="java.util.ArrayList"/>

<c:set var="tabbingGroupUniqueId" value="tabs" />
<c:set var="tabbingGroupUniqueId"
       value="${tabbingGroupUniqueId}-${fn:substringBefore(tabbingGroup.options.fragmenttoken, '-')}" />

<c:forEach var="tabbingGroupItem" items="${tabbingGroupItems}" varStatus="status">
  <c:choose>
    <c:when test="${tabbingGroupItem.type=='tabPaneGroup'}">
      <c:set var="tabPaneGroupId" value="${requestScope.tabPaneGroupId + 1}" scope="request"/>
      <collection:add collection="${tabbingGroupItemsList}" value="${tabbingGroupItem}" />
    </c:when>
    <c:when test="${not empty tabbingGroupItem.content and
                    fn:startsWith(tabbingGroupItem.content.articleTypeName,'widget_')}">
      <collection:add collection="${tabbingGroupItemsList}" value="${tabbingGroupItem}" />
    </c:when>
  </c:choose>
</c:forEach>


<c:set var="customStyleClass" value="${fn:trim(tabbingGroup.options.customStyleClass)}"/>
<c:set var="styleAttr"><c:if test="${not empty customStyleClass}">class="${customStyleClass}"</c:if></c:set>

<c:set var="changeUrl" value="${fn:trim(tabbingGroup.options.changeUrl)}" scope="request"/>
<c:set var="tabbingGroupTag" value="${not empty tabbingGroup.options['htmlTag'] ? tabbingGroup.options['htmlTag'] : 'div'}"/>

<c:if test="${not empty tabbingGroupItemsList}">
  <${tabbingGroupTag} ${styleAttr} id="${tabbingGroupUniqueId}">

    <%-- set necessary attributes in the requestScope which are required for default.jsp / accordions.jsp --%>
    <c:set var="tabItemsList" value="${tabbingGroupItemsList}" scope="request" />
    <c:set var="tabUniqueId" value="${tabbingGroupUniqueId}" scope="request" />
    <c:set var="tabStyle" value="${tabbingGroup.options.tabStyle}" scope="request" />

    <%--TODO: send other string variables using param instead of setting to request --%>
    <jsp:include page="default.jsp">
      <jsp:param name="tabContentStyleClass" value="${tabbingGroup.options.tabContentStyleClass}"/>
    </jsp:include>

    <c:remove var="tabItemsList" scope="request" />
    <c:remove var="tabUniqueId" scope="request" />
    <c:remove var="tabStyle" scope="request" />


    <c:remove var="tabbingGroupItemsList" scope="page" />
    <c:remove var="tabbingGroupUniqueId" scope="page" />
  </${tabbingGroupTag}>
</c:if>

