<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-content-body/src/main/webapp/template/widgets/contentBody/view/helpers/renderBody.jsp#4 $
 * Last edited by : $Author: saz $ $Date: 2014/08/26 $
 * Version        : $Revision: #4 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="article" uri="http://www.escenic.com/taglib/escenic-article" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>
<%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %>

<c:if test="${not empty article.fields.datelineTag.value}">
  <c:set var="dateline" value="${article.fields.datelineTag.value.value}"/>
</c:if>
<%--for backward compatibility--%>
<c:if test="${empty dateline}">
  <c:set var="dateline" value="${not empty article.fields.dateline.value ? article.fields.dateline.value.value : ''}"/>
</c:if>

<c:set var="pOffset">
  ${not empty widget.model.pOffset ? widget.model.pOffset : 1}
</c:set>

<c:set var="pMaximum">
  ${not empty widget.model.pMax ? widget.model.pMax : -1}
</c:set>

<div id="${bodyUniqueId}"
     <c:if test="${widget.model.showBody ne 'whole'}">style="display: none"</c:if> >
  <c:choose>
    <c:when test="${widget.model.containsKey('selectableView')}">
      <c:set var="index" value="${1}"/>
      <article:renderField var="element" field="body">
        <c:if test="${widget.model.showInlineContent eq true}">
          <c:set var="contentId">${element.content.id}</c:set>
          <c:set var="sResultItem" value="${widget.inlineElement[contentId]}"/>
          <c:set target="${widget}" property="resultItem" value="${sResultItem}"/>
          <c:set var="bodyWidget" value="${widget}" scope="request"/>

          <c:set var="viewIndex">${index}</c:set>
          <c:choose>
            <c:when test="${not empty widget.model.selectableView[viewIndex]}">
              <wf-core:view widget="${widget.model.selectableView[viewIndex]}"/>
            </c:when>
            <c:when
                test="${(fn:length(widget.inlineElement) eq index) and  (not empty widget.model.selectableView['last'])}">
              <wf-core:view widget="${widget.model.selectableView['last']}"/>
            </c:when>
            <c:when test="${index%2==1 and  not empty widget.model.selectableView['odd']}">
              <wf-core:view widget="${widget.model.selectableView['odd']}"/>
            </c:when>
            <c:when test="${index%2==0 and  not empty widget.model.selectableView['even']}">
              <wf-core:view widget="${widget.model.selectableView['even']}"/>
            </c:when>
            <c:when test="${not empty widget.model.selectableView[element.content.articleTypeName]}">
              <wf-core:view widget="${widget.model.selectableView[element.content.articleTypeName]}"/>
            </c:when>
            <c:otherwise>
              <c:if test="${not empty widget.model.selectableView['default']}">
                <wf-core:view widget="${widget.model.selectableView['default']}"/>
              </c:if>
            </c:otherwise>
          </c:choose>
          <c:remove var="viewIndex"/>
          <c:set var="widget" value="${bodyWidget}" scope="request"/>

          <c:set var="index" value="${index+1}"/>
        </c:if>
      </article:renderField>
    </c:when>
    <%--when there are no related view--%>
    <c:otherwise>
      <c:choose>
        <c:when test="${widget.model.showInlineContent eq true}">
          ${article.fields.body}
        </c:when>
        <c:otherwise>
          <article:renderField var="element" field="body"/>
        </c:otherwise>
      </c:choose>
    </c:otherwise>

  </c:choose>
</div>

<script type="text/javascript" language="javascript">
  $(document).ready(function () {
    // Removing empty paragraphs first
    $("#${bodyUniqueId} p").filter(function () {
      var html = $.trim($(this).html());
      if (html == '' || html == '&nbsp;')
        return true;
    }).remove();

    // Taking a subset of paragraphs using offset and maximum
    var offset = ${pOffset};
    var max = ${pMaximum};
    if (offset > 1) {
      $("#${bodyUniqueId}").children().slice(0, offset - 1).remove();
    }
    if (max > -1) {
      $("#${bodyUniqueId}").children().slice(max).remove();
    }
    // Show dateline field at the beginning of the first paragraph
    var showDateline = ${widget.model.showDateline};
    var datelineStr = "${dateline}";
    if (offset <= 1 && showDateline == true && datelineStr != "") {
      var firstChild = $("#${bodyUniqueId}").children().get(0);
      if ("P" == firstChild.nodeName.toUpperCase()) {
        $(firstChild).prepend("<span>" + datelineStr + " - </span>");
      }
      else {
        $(firstChild).before("<span>" + datelineStr + "</span>");
      }
    }
  });
</script>
