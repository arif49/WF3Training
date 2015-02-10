<%-- * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/webapp/template/widgets/teaser/view/elements/helpers/human.jsp#1 $ * Last edited by : $Author: nahian $ $Date: 2014/05/14 $ * Version        : $Revision: #1 $ * * Copyright (C) 2009 Escenic AS. * All Rights Reserved.  No use, copying or distribution of this * work may be made except in accordance with a valid license * agreement from Escenic AS.  This notice must be included on * all copies, modifications and derivatives of this work.--%><%-- the purpose of this page is to display the time differecne between two given dates --%><%@ page session="false" %><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %><%@ taglib prefix="wfn" uri="http://www.escenic.com/widget-framework/functions" %><c:set var="relativeTime" value="${wfn:getRelativeTime(widget.selectedDate)}"/><c:choose>  <c:when test="${relativeTime.timeValue == 0}">    <fmt:message key="teaser.widget.dateDifference.noDifference.text"/>  </c:when>  <c:otherwise>    <fmt:message key="teaser.widget.dateDifference.prefix"/>    ${relativeTime.timeValue}    <fmt:message key="teaser.widget.dateDifference.${relativeTime.timeUnit}.unit"/>    <fmt:message key="teaser.widget.dateDifference.suffix"/>  </c:otherwise></c:choose>