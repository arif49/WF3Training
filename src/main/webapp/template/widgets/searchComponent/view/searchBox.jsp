<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-search-component/src/main/webapp/template/widgets/searchComponent/view/searchBox.jsp#2 $
 * Last edited by : $Author: dbs $ $Date: 2014/06/03 $
 * Version        : $Revision: #2 $
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

<c:set var="targetSectionUrl" value="${widget.model.targetSection.value.url}"/>
<c:set var="formStyle" value="${widget.model.formAlignment == 'custom' ?
                                widget.model.customFormStyle :
                                widget.model.formAlignment}"/>

<form action="${targetSectionUrl}" class="${btCss.navbarForm} ${formStyle}" role="search">
  <div class="form-group">
    <input type="text" name="q" class="form-control" placeholder="Search" value="${fn:escapeXml(param.q)}">
  </div>
</form>