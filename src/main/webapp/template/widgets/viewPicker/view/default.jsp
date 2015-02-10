<%@ page session="false" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

  <c:choose>
    <c:when test="${widget.model.renderingMode eq 'delegateView'}">
      <wf-util:use var="disableViewAdjustment" value="${true}">
        <c:if test="${not empty widget.model.viewWidget}">
            <wf-core:view widget="${widget.model.viewWidget}"/>
        </c:if>
      </wf-util:use>
    </c:when>
    <c:when test="${widget.model.renderingMode eq 'iterateView'}">
      <wf-util:use var="disableViewAdjustment" value="${widget.model.disableViewAdjustment}">
        <c:set var="articleList" value="${widget.contentResult.resultItems}"/>
        <wf-core:iterateViews var="viewWidget"
                              items="${articleList}"
                              selectableViewMap="${widget.model.selectableView}">
          <wf-core:view widget="${viewWidget}"/>
        </wf-core:iterateViews>
      </wf-util:use>
    </c:when>
  </c:choose>
