<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="collection" uri="http://www.escenic.com/taglib/escenic-collection" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<%--
  this JSP page expects the following objects in the request scope if any of them is missing, then this page will not work --%>
<jsp:useBean id="configCarouselGroup" type="neo.xredsys.presentation.PresentationElement" scope="request"/>
<jsp:useBean id="resourceUrl" type="java.lang.String" scope="request"/>

<c:set var="carouselGroupAreaName" value="carouselGroup-area"/>
<c:set var="carouselGroupArea" value="${configCarouselGroup.areas[carouselGroupAreaName]}"/>
<c:set var="carouselGroupItems" value="${carouselGroupArea.items}"/>

<c:set var="autoplay" value="${configCarouselGroup.options.autoplay}"/>
<c:set var="autoplayInterval" value="${fn:trim(configCarouselGroup.options.autoplayInterval)}"/>
<c:choose>
  <c:when test="${empty autoplayInterval}">
    <c:set var="autoplayInterval" value="${5000}"/>
  </c:when>
  <c:otherwise>
    <fmt:formatNumber var="autoplayInterval" value="${autoplayInterval}" maxFractionDigits="0" type="number"
                      pattern="###"/>
    <c:set var="autoplayInterval" value="${autoplayInterval*1000}"/>
  </c:otherwise>
</c:choose>

<c:choose>
  <c:when test="${empty autoplay or !autoplay}">
    <c:set var="slideAuto" value="${false}"/>
  </c:when>
  <c:otherwise>
    <c:set var="slideAuto" value="${autoplayInterval}"/>
  </c:otherwise>
</c:choose>

<c:set var="showNavigation" value="${configCarouselGroup.options.showNavigation}"/>
<c:set var="showPreviousNext" value="${configCarouselGroup.options.showPreviousNext}"/>

<c:set var="configCarouselGroupSerialNo" value="${requestScope.configCarouselGroupSerialNo+1}" scope="request"/>

<collection:createList id="carouselGroupItemsList" type="java.util.ArrayList"/>

<c:forEach var="carouselGroupItem" items="${carouselGroupItems}" varStatus="status">
  <c:choose>
    <c:when test="${carouselGroupItem.type=='tabPaneGroup'}">
      <c:set var="tabPaneGroupId" value="${requestScope.tabPaneGroupId + 1}" scope="request"/>
      <collection:add collection="${carouselGroupItemsList}" value="${carouselGroupItem}"/>
    </c:when>
    <c:when test="${not empty carouselGroupItem.content and
                    fn:startsWith(carouselGroupItem.content.articleTypeName,'widget_')}">
      <collection:add collection="${carouselGroupItemsList}" value="${carouselGroupItem}"/>
    </c:when>
  </c:choose>
</c:forEach>

<c:set var="customStyleClass" value="${fn:trim(configCarouselGroup.options.customStyleClass)}"/>
<c:set var="styleClass" value="${btCss.carousel} ${btCss.slide} ${customStyleClass}"/>
<c:set var="carouselStyleId" value="${fn:trim(configCarouselGroup.options.styleId)}"/>
<c:if test="${empty carouselStyleId}">
  <c:set var="carouselStyleId" value="configCarousel"/>
</c:if>
<c:remove var="customStyleClass" scope="page"/>


<c:set var="heightOption" value="${configCarouselGroup.options.heightOption}"/>

<c:set var="height" value="${fn:trim(configCarouselGroup.options.height)}"/>
<c:if test="${not empty height}">
  <fmt:formatNumber var="height" value="${height}" maxFractionDigits="0" type="number" pattern="###"/>
</c:if>

<c:set var="carouselTag" value="${not empty configCarouselGroup.options['htmlTag'] ? configCarouselGroup.options['htmlTag'] : 'div'}"/>

<c:if test="${not empty carouselGroupItemsList}">
  <${carouselTag} id="${carouselStyleId}-${configCarouselGroupSerialNo}" class="${styleClass}">
    <div class="${btCss.carouselInner}" <c:if test="${heightOption eq 'fixed' and not empty height}">style="height:${height}px;"</c:if>>

      <c:remove var="styleClass" scope="page"/>

      <c:set var="groupId" value="crouselGroup${configCarouselGroupSerialNo}"/>
      <c:set var="muberOfItems" value="${fn:length(carouselGroupItemsList)}"/>

      <c:set var="onPageCount" value="${0}"/>
      <c:forEach var="carouselGroupItem" items="${carouselGroupItemsList}" varStatus="status">
        <c:choose>
          <c:when test="${carouselGroupItem.type=='tabPaneGroup'}">
            <c:set var="customStyleClass" value="${fn:trim(carouselGroupItem.options.customStyleClass)}"/>
            <c:set var="styleClass" value="${customStyleClass}"/>
            <c:set var="styleId" value="${fn:trim(carouselGroupItem.options.styleId)}"/>

            <c:set var="tabPaneGroupAreaName" value="tabPaneGroup-area" scope="page"/>
            <c:set var="tabPaneGroupItems" value="${carouselGroupItem.areas[tabPaneGroupAreaName].items}"/>
            <c:set var="tabPaneGroupTag" value="${not empty carouselGroupItem.options['htmlTag'] ? carouselGroupItem.options['htmlTag'] : 'div'}"/>

            <%--Render group based on loadingPolicy--%>
            <wf-core:renderFragment element="${carouselGroupItem}">
              <${tabPaneGroupTag} class="${onPageCount eq 0 ? 'active':''} item ${styleClass}"
              <c:if test="${not empty styleId}">id="${styleId}"</c:if>>
              <c:set var="items" value="${tabPaneGroupItems}" scope="request"/>
              <wf-core:showItems/>
              </${tabPaneGroupTag}>
            </wf-core:renderFragment>
            <c:remove var="tabPaneGroupItems" scope="page"/>
            <c:remove var="customStyleClass" scope="page"/>
            <c:remove var="styleClass" scope="page"/>
            <c:remove var="styleId" scope="page"/>
          </c:when>
          <c:when test="${not empty carouselGroupItem.content and fn:startsWith(carouselGroupItem.content.articleTypeName,'widget_')}">
            <%--Render group based on loadingPolicy--%>
            <wf-core:renderFragment element="${carouselGroupItem}">
              <div class="<c:if test="${onPageCount eq 0}">active</c:if> item">
                <wf-core:include widgetElement="${carouselGroupItem}"/>
              </div>
            </wf-core:renderFragment>
          </c:when>
        </c:choose>
        <c:if test="${empty carouselGroupItem.options.loadingPolicy
                      or carouselGroupItem.options.loadingPolicy eq 'onPage'
                      or not empty requestScope.wfFragmentToken
                      or param['_escaped_fragment_'] != null}">
          <c:set var="onPageCount" value="${onPageCount+1}"/>
        </c:if>
      </c:forEach>
      <c:remove var="onPageCount" scope="page"/>
    </div>
    <c:if test="${showPreviousNext}">
      <a class="${btCss.carouselControl} ${btCss.left}" data-slide="prev" href="#${carouselStyleId}-${configCarouselGroupSerialNo}"><span class="${btCss.iconPrev}"></span></a>
      <a class="${btCss.carouselControl} ${btCss.right}" data-slide="next" href="#${carouselStyleId}-${configCarouselGroupSerialNo}"><span class="${btCss.iconNext}"></span></a>
    </c:if>
    <c:if test="${showNavigation}">

      <%--Indicators--%>
      <nav class="carousel-indicator-holder">
        <ol class="${btCss.carouselIndicators}">
          <c:set var="onPageCount" value="${0}"/>
          <c:forEach var="carouselGroupItem" items="${carouselGroupItemsList}" varStatus="status">
            <wf-core:renderFragment element="${carouselGroupItem}">
              <li data-target="#${carouselStyleId}-${configCarouselGroupSerialNo}" data-slide-to="${onPageCount}" class="${onPageCount eq 0 ? 'active':''}"></li>
            </wf-core:renderFragment>
            <c:if test="${empty carouselGroupItem.options.loadingPolicy
                          or carouselGroupItem.options.loadingPolicy eq 'onPage'
                          or not empty requestScope.wfFragmentToken
                          or param['_escaped_fragment_'] != null}">
              <c:set var="onPageCount" value="${onPageCount+1}"/>
            </c:if>

          </c:forEach>
          <c:remove var="onPageCount" scope="page"/>
        </ol>
      </nav>
    </c:if>
  </${carouselTag}>

  <script type="text/javascript">
    $(function () {
      $('#${carouselStyleId}-${configCarouselGroupSerialNo}').carousel({
        interval:${slideAuto}
      });

    });
  </script>
</c:if>