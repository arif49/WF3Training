<%--
 @author <a href="mailto:ivey@escenic.com">Ivey Rashid</a>
 @author last modified by $ 
 @version $ $
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>

<c:if test="${widget.contentResult.resultItemCount > 0}">
  <c:set var="styleList" value="${widget.wrapperStyles}"/>
  <div class="${widget.gridWrapperClass}">
    <wf-util:use var="disableViewAdjustment" value="${widget.model.disableViewAdjustment}">
      <wf-core:iterateViews var="viewWidget"
                            items="${widget.contentResult.resultItems}"
                            selectableViewMap="${widget.model.selectableView}"
                            varIndex="styleIndex">
        <div class="${styleList[styleIndex]}">
          <wf-core:view widget="${viewWidget}"/>
        </div>
      </wf-core:iterateViews>
    </wf-util:use>
  </div>
</c:if>
