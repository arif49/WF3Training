<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/wireframe/inline.jsp#2 $
 * Last edited by : $Author: saz $ $Date: 2014/09/08 $
 * Version        : $Revision: #2 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<%-- inlineWrapper & inlineClose classes are required for inline feature --%>
<div class="${wfCss.inlineWrapper}" style="display: none;">
  <a class="${wfCss.inlineClose}" href="javascript:void(0)">
    <i class="${btCss.glyphicon} ${btCss.glyphiconChevronDown}"></i> Close
  </a>

  <wf-core:renderContext/>

  <a class="${wfCss.inlineClose}" href="javascript:void(0)">
    <i class="${btCss.glyphicon} ${btCss.glyphiconChevronUp}"></i> Close
  </a>
  <%-- Add EAE Logger page for page view statistics --%>
  <jsp:include page="../eae/eaePageViewLoggerClient.jsp">
    <jsp:param name="noscript" value="true"/>
  </jsp:include>
  <%-- Add EAE Logger page for tag impression statistics --%>
  <jsp:include page="../eae/eaeTagImpressionLogger.jsp">
    <jsp:param name="noscript" value="true"/>
  </jsp:include>
</div>
