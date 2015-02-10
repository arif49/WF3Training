<%--
 @author <a href="mailto:IRashid@vizrt.com">Ivey Rashid</a>
 @author last modified by $ 
 @version $ $
--%>
<%@ page session="false" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="wf-core" uri="http://www.escenic.com/widget-framework/core" %>
<%@ taglib prefix="collection" uri="http://www.escenic.com/taglib/escenic-collection" %>

<%-- generating score page link with parameters --%>
<collection:createMap id="scoreLinkParameters" type="java.util.HashMap" toScope="page"/>
<c:set target="${scoreLinkParameters}" property="sort" value="score"/>
<c:set target="${scoreLinkParameters}" property="order" value="DESC"/>
<wf-core:generatePageURL var="scorePageLink"
                         parameters="${scoreLinkParameters}"/>
<c:set target="${widget}" property="scorePageLink" value="${scorePageLink}"/>

<%-- generating latest page link with parameters --%>
<collection:createMap id="latestLinkParameters" type="java.util.HashMap" toScope="page"/>
<c:set target="${latestLinkParameters}" property="sort" value="publishdate"/>
<c:set target="${latestLinkParameters}" property="order" value="DESC"/>
<wf-core:generatePageURL var="latestSortLink"
                         parameters="${latestLinkParameters}"/>
<c:set target="${widget}" property="latestSortLink" value="${latestSortLink}"/>

<%-- generating oldest page link with parameters --%>
<collection:createMap id="oldestLinkParamters" type="java.util.HashMap" toScope="page"/>
<c:set target="${oldestLinkParamters}" property="sort" value="publishdate"/>
<c:set target="${oldestLinkParamters}" property="order" value="ASC"/>
<wf-core:generatePageURL var="oldestSortLink"
                         parameters="${oldestLinkParamters}"/>
<c:set target="${widget}" property="oldestSortLink" value="${oldestSortLink}"/>

<%-- setting style classes for the links --%>
<c:set var="sortCriteria" value="${(param.sort eq 'publishdate') ? 'publishdate' : 'score'}" />
<c:set var="sortOrder" value="${(param.order eq 'ASC') ? 'ASC' : 'DESC'}" />
<c:set target="${widget}"
       property="scoreLinkClass"
       value="${(sortCriteria eq 'score') ? 'disabled' : ''}"/>

<c:set target="${widget}"
       property="latestLinkClass"
       value="${((sortCriteria eq 'publishdate') && (sortOrder eq 'DESC')) ? 'disabled' : ''}"/>

<c:set target="${widget}"
       property="oldestLinkClass"
       value="${((sortCriteria eq 'publishdate') && (sortOrder eq 'ASC')) ? 'disabled' : ''}"/>

<c:remove var="scoreLinkParameters" scope="page"/>
<c:remove var="latestLinkParameters" scope="page"/>
<c:remove var="oldestLinkParameters" scope="page"/>
<c:remove var="scorePageLink" scope="request"/>
<c:remove var="latestSortLink" scope="request"/>
<c:remove var="oldestSortLink" scope="request"/>