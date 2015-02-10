<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/tabs/default.jsp#4 $
 * Last edited by : $Author: ira $ $Date: 2014/05/30 $
 * Version        : $Revision: #4 $
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
<jsp:useBean id="tabItemsList" type="java.util.List<neo.xredsys.presentation.PresentationElement>" scope="request"/>
<jsp:useBean id="tabUniqueId" type="java.lang.String" scope="request"/>
<jsp:useBean id="tabStyle" type="java.lang.String" scope="request"/>

<c:set var="tempTabUniqueId" value="${requestScope.tabUniqueId}"/>
<c:set var="changeUrl" value="${requestScope.changeUrl}"/>
<c:remove var="changeUrl" scope="request"/>

<c:set var="initialIndex" value="0"/>
<c:set var="tabStyleClass" value="${tabStyle eq 'tabs' ? btCss.navTabs : btCss.navPills}"/>

  <%-- tab navigation --%>
  <ul class="${btCss.nav} ${tabStyleClass}" data-tabs="tabs">
    <c:set var="onPageCount" value="${0}"/>

    <c:forEach var="tabbingGroupItem" items="${tabItemsList}" varStatus="status">
      <c:set var="tabbingGroupItemAnchorText" value="${tempTabUniqueId}-${status.count}"/>

      <c:choose>
        <c:when test="${tabbingGroupItem.type=='tabPaneGroup'}">
          <c:set var="tabbingGroupItemTitle" value="${fn:trim(tabbingGroupItem.options.title)}"/>

          <c:if test="${empty tabbingGroupItemTitle or fn:length(fn:trim(tabbingGroupItemTitle))==0}">
            <c:set var="tabbingGroupItemTitle" value="${fn:trim(tabbingGroupItem.type)}"/>
          </c:if>

          <%-- handle param.tabPane --%>
          <c:if test="${not empty param.tabPane and param.tabPane == tabbingGroupItemTitle}">
            <c:set var="initialIndex" value="${status.index}"/>
          </c:if>
        </c:when>
        <c:when test="${not empty tabbingGroupItem.content and
                        fn:startsWith(tabbingGroupItem.content.articleTypeName,'widget_')}">
          <c:set var="tabbingGroupItemTitle"
                 value="${not empty tabbingGroupItem.fields.title ? tabbingGroupItem.fields.title : tabbingGroupItem.content.title }"/>
        </c:when>
      </c:choose>

      <c:if test="${empty tabbingGroupItem.options.loadingPolicy
                    or tabbingGroupItem.options.loadingPolicy eq 'onPage'
                    or not empty requestScope.wfFragmentToken
                    or param['_escaped_fragment_'] != null}">
        <c:set var="onPageCount" value="${onPageCount+1}"/>
      </c:if>

      <c:set var="currentTabId" value="${param.tabId}"/>
      <c:set var="currentTabPaneNo" value="${currentTabId ne tempTabUniqueId?1:param.tabPaneNo}"/>
      <li class="${onPageCount eq currentTabPaneNo?'active':''}">
        <wf-core:renderFragment element="${tabbingGroupItem}">
          <a data-toggle="tab" href="#${tempTabUniqueId}-tabPane-${status.count}"
              <c:if test="${changeUrl eq 'true'}">rel="address:/tabPane=${tempTabUniqueId}-${status.count}"</c:if>>
            <span><c:out value="${tabbingGroupItemTitle}"/></span></a>
        </wf-core:renderFragment>
      </li>

      <c:remove var="tabbingGroupItemTitle" scope="page"/>
    </c:forEach>

    <c:remove var="onPageCount" scope="page"/>
  </ul>

  <%-- tab content --%>
  <c:set var="prevTabbingEnabled" value="${requestScope.tabbingEnabled}" scope="request"/>
  <c:set var="tabbingEnabled" value="true" scope="request"/>

  <div class="${btCss.tabContent} ${param.tabContentStyleClass}">
    <c:forEach var="tabbingGroupItem" items="${tabItemsList}" varStatus="status">
      <c:set var="htmlTag" value="${tabbingGroupItem.type=='tabPaneGroup' and not empty tabbingGroupItem.options['htmlTag']?
        tabbingGroupItem.options['htmlTag'] : 'div'}"/>

      <${htmlTag} id="${tempTabUniqueId}-tabPane-${status.count}" class="tab-pane ${status.first?'active':''}">
        <c:choose>
          <c:when test="${tabbingGroupItem.type=='tabPaneGroup'}">
            <c:set var="tabbingEnabled" value="true" scope="request"/>
            <c:set var="customStyleClass" value="${fn:trim(tabbingGroupItem.options.customStyleClass)}"/>
            <%--<c:set var="styleClass" value="tabPaneGroup ${customStyleClass}"/>--%>
            <c:set var="styleId" value="${fn:trim(tabbingGroupItem.options.styleId)}"/>

            <c:set var="tabPaneGroupAreaName" value="tabPaneGroup-area"/>
            <c:set var="tabPaneGroupItems" value="${tabbingGroupItem.areas[tabPaneGroupAreaName].items}"/>
            <wf-core:renderFragment element="${tabbingGroupItem}">
              <c:choose>
                <c:when test="${not empty styleId or not empty customStyleClass}">
                  <div
                      <c:if test="${not empty styleId}"> id="${styleId}"</c:if>
                      <c:if test="${not empty customStyleClass}"> class="${customStyleClass}"</c:if>>
                    <c:set var="items" value="${tabPaneGroupItems}" scope="request"/>
                    <wf-core:showItems/>
                  </div>
                </c:when>
                <c:otherwise>
                  <c:set var="items" value="${tabPaneGroupItems}" scope="request"/>
                  <wf-core:showItems/>
                </c:otherwise>
              </c:choose>
            </wf-core:renderFragment>
            <c:remove var="tabPaneGroupItems" scope="page"/>
            <c:remove var="customStyleClass" scope="page"/>
            <c:remove var="styleClass" scope="page"/>
            <c:remove var="styleId" scope="page"/>
            <c:set var="tabbingEnabled" value="false" scope="request"/>
          </c:when>
          <c:when test="${not empty tabbingGroupItem.content and fn:startsWith(tabbingGroupItem.content.articleTypeName,'widget_')}">
            <wf-core:renderFragment element="${tabbingGroupItem}">
              <wf-core:include widgetElement="${tabbingGroupItem}"/>
            </wf-core:renderFragment>
          </c:when>
        </c:choose>
      </${htmlTag}>
      <c:remove var="htmlTag" scope="page"/>
    </c:forEach>
  </div>

  <c:if test="${changeUrl eq 'true'}">
    <script type="text/javascript">
      $(function () {
        $.address.bind('externalChange', function (event) {
          if ((/^\/tabPane=${tempTabUniqueId}/g).test(event.value)) {
            var tabNum = event.value.substring('/tabPane=${tempTabUniqueId}'.length + 1, event.value.length);
            $('#${tempTabUniqueId} li:nth-child(' + tabNum + ') a').tab('show');
          }
        });

        $(document).on('fragmentReady', function() {
          $('#${tempTabUniqueId} ul[data-tabs="tabs"] li a').address();
        });
      });
    </script>
  </c:if>

  <c:choose>
    <c:when test="${empty prevTabbingEnabled}">
      <c:remove var="tabbingEnabled" scope="request"/>
    </c:when>
    <c:otherwise>
      <c:set var="tabbingEnabled" value="${prevTabbingEnabled}" scope="request"/>
    </c:otherwise>
  </c:choose>



