<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/wireframe/default.jsp#5 $
 * Last edited by : $Author: nahian $ $Date: 2014/09/03 $
 * Version        : $Revision: #5 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="util" uri="http://www.escenic.com/taglib/escenic-util" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:set var="resourceUrl" value="${requestScope['resourceUrl']}"/>
<c:set var="templateUrl" value="${requestScope['templateUrl']}"/>

<util:profiler path="/template/framework/wireframe/default.jsp">

  <!DOCTYPE html>

  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"
    <c:if test="${not empty section.parameters['facebook.app.id']}">
    </c:if>>

  <head>
    <jsp:include page="../head/head.jsp"/>
  </head>

  <body>
  <!-- Powered by Escenic Content Engine and Widget Framework. http://escenic.com -->
  <c:if test="${not empty section.parameters['facebook.app.id']}">
    <%--Following block is for facebook social plugins--%>
    <div id="fb-root"></div>
    <script>(function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=${section.parameters['facebook.app.id']}";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
    <%--end of block for facebook social plugins--%>
  </c:if>

  <wf-core:renderContext/>

    <%-- Add EAE Logger page for page view statistics --%>
  <jsp:include page="../eae/eaePageViewLoggerClient.jsp"/>
    <%-- Add EAE Logger page for tag impression statistics --%>
  <jsp:include page="../eae/eaeTagImpressionLogger.jsp"/>
    <%--skin.jsp is used when web designer mode is enabled. You are recommended to remove this file call in the production mode--%>
  <jsp:include page="../preview/skin.jsp"/>
    <%-- General scripts --%>
  <jsp:include page="../body/scripts.jsp"/>
  </body>
  </html>
</util:profiler>

