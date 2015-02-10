<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/preview/skin.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * Copyright (C) 2009 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on
 * all copies, modifications and derivatives of this work.
--%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="logic" uri="http://jakarta.apache.org/struts/tags-logic" %>
<%@ taglib prefix="html" uri="http://jakarta.apache.org/struts/tags-html" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:if
    test="${not empty section.parameters['wf.template.designermode'] and section.parameters['wf.template.designermode'] eq true}">
  <div id="skinUploadContainer" class="${wfCss.uiWidget}">
    <h2 class="${wfCss.uiWidgetHeader}"><fmt:message key="publication.skin.uploader.title"/></h2>
    <span id="sliderButton" class="${wfCss.uiStateHover} ${wfCss.uiCornerAll}">Hide</span>

    <div id="skinUploadContent" class="${wfCss.uiWidgetContent}">

      <logic:messagesPresent message="true">
        <html:messages id="error" message="true" property="InvalidSkinFile">
          <div id="error">
             ${error}
          </div>
        </html:messages>
      </logic:messagesPresent>
      <html:messages id="message" name="successMessage">
        <div id="success">${message}</div>
      </html:messages>

      <c:choose>
        <c:when test="${requestScope['com.escenic.context']=='sec'}">
          <c:set var="currentUrl" value="${section.url}" scope="page"/>
        </c:when>
        <c:otherwise>
          <c:set var="currentUrl" value="${article.url}" scope="page"/>
        </c:otherwise>
      </c:choose>

      <div id="skinFormContent">
        <html:form action="uploadWFSkin" method="post" enctype="multipart/form-data">
          <fmt:message key="publication.skin.uploader.skinfile.label"/> <html:file property="skinFile"/>
          <html:hidden property="targetURL" value="/${section.directoryPath}${article.relativeUrl}"/>
          <input type="submit" value="<fmt:message key="publication.skin.uploader.uploadbutton.label"/>"/>
        </html:form>
      </div>

      <div id="skinApplyContent">
        <label for="selectSkin"><fmt:message key="publication.skin.uploader.skinchooser.label"/></label>
        <wf-core:listSkins id="skins"/>
        <select name="skin" id="selectSkin">
          <c:forEach var="item" items="${skins}">
            <c:choose>
              <c:when test="${skinName eq item}">
                <option value="${item}" selected="selected">${item}</option>
              </c:when>
              <c:otherwise>
                <option value="${item}">${item}</option>
              </c:otherwise>
            </c:choose>
          </c:forEach>
        </select>
        <input type="button" value="<fmt:message key="publication.skin.uploader.applybutton.label"/>"
               onclick="previewSkin()"/>
      </div>
    </div>

  </div>

  <style type="text/css">
      /*following styles are for skin uploader. Skin uploader is shown when web designer mode is enabled*/

    #skinUploadContainer {
      border-top: 2px solid #808080;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: visible;
      z-index: 1000;
      text-align: center;
      font-size: 1.0em;
    }

    #skinUploadContainer #error {
      padding: 10px 0;
      color: red;
    }

    #skinUploadContainer #success {
      padding: 10px 0;
      color: green;
    }

    #skinUploadContainer h2.ui-widget-header {
      margin: 0;
    }

    #skinUploadContainer span#sliderButton {
      position: absolute;
      top: -30px;
      right: 0;
      height: 50px;
      width: 100px;
      padding: 5px 10px;
      cursor: pointer;
    }

    #skinUploadContainer div#skinUploadContent {
      padding: 10px 0;
      width: 100%;
    }

    #skinUploadContainer div#skinApplyContent {
      padding: 10px 0;
    }

      /*end of style for Skin uploader*/
  </style>

  <script type="text/javascript">
    function previewSkin() {
      window.location = "${currentUrl}?skinName=" + $("#selectSkin").val();
    }
  </script>

</c:if>