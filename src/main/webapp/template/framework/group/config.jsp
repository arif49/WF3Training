<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>

<c:set var="rootGroup" value="${requestScope.configSectionPool.rootElement}"/>
<c:set var="parentGroup" value="${rootGroup}" scope="request"/>

<%-- render 'outer' area --%>
<jsp:include page="renderAreasInGroup.jsp">
  <jsp:param name="areaName" value="outer"/>
  <jsp:param name="elementWidth" value="${requestScope.viewPortWidth}"/>
</jsp:include>

<div class="${btCss.container}">

  <%-- render 'header' area --%>
  <jsp:include page="renderAreasInGroup.jsp">
    <jsp:param name="areaName" value="header"/>
    <jsp:param name="elementWidth" value="${requestScope.viewPortWidth}"/>
    <jsp:param name="elementRole" value="banner"/>
  </jsp:include>

  <%-- render 'top' area : conditional--%>
  <c:if test="${rootGroup.areas['top'].options.showTopArea eq 'true'}">
    <jsp:include page="renderAreasInGroup.jsp">
      <jsp:param name="areaName" value="top"/>
      <jsp:param name="elementWidth" value="${requestScope.viewPortWidth}"/>
    </jsp:include>
  </c:if>

  <c:set var="mainAreaRatio" value="${fn:split(rootGroup.options.area_split,'_')[0]}"/>
  <c:set var="asideAreaRatio" value="${fn:split(rootGroup.options.area_split,'_')[1]}"/>
  <c:choose>
    <%-- When aside area is hidden render 'main' area only--%>
    <c:when test="${asideAreaRatio <= 0}">
      <jsp:include page="processor/config-main-area.jsp">
        <jsp:param name="areaRatio" value="${mainAreaRatio}"/>
      </jsp:include>
    </c:when>
    <%-- When aside area is shown --%>
    <c:otherwise>
      <section class="${btCss.row}">
        <%-- render 'aside' area on the left --%>
        <c:if test="${rootGroup.options.asidePosition eq 'left'}">
          <jsp:include page="processor/config-aside-area.jsp">
            <jsp:param name="areaRatio" value="${asideAreaRatio}"/>
          </jsp:include>
        </c:if>

        <%-- render 'main' area --%>
        <jsp:include page="processor/config-main-area.jsp">
          <jsp:param name="areaRatio" value="${mainAreaRatio}"/>
        </jsp:include>

        <%-- render 'aside' area on the right --%>
        <c:if test="${rootGroup.options.asidePosition eq 'right'}">
          <jsp:include page="processor/config-aside-area.jsp">
            <jsp:param name="areaRatio" value="${asideAreaRatio}"/>
          </jsp:include>
        </c:if>
      </section>
    </c:otherwise>
  </c:choose>

  <%-- render 'bottom' area : conditional--%>
  <c:if test="${rootGroup.areas['bottom'].options.showBottomArea eq 'true'}">
    <jsp:include page="renderAreasInGroup.jsp">
      <jsp:param name="areaName" value="bottom"/>
      <jsp:param name="elementWidth" value="${requestScope.viewPortWidth}"/>
    </jsp:include>
  </c:if>

  <%-- render 'footer' area --%>
  <jsp:include page="renderAreasInGroup.jsp">
    <jsp:param name="areaName" value="footer"/>
    <jsp:param name="elementWidth" value="${requestScope.viewPortWidth}"/>
  </jsp:include>
</div>

<c:remove var="rootGroup" scope="request"/>

