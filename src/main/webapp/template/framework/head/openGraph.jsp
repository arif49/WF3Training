<%--
 @author <a href="mailto:IRashid@vizrt.com">Ivey Rashid</a>
 @author last modified by $ 
 @version $ $
--%>
<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:if test="${requestScope['com.escenic.context']=='art' and not empty section.parameters['facebook.app.id']}">
    <c:set var="fbTeaser" value="" scope="page"/>
    <c:forEach var="item" items="${article.relatedElements['teaser'].items}">
        <c:if test="${item.content.articleTypeName=='picture' and empty fbTeaser}">
            <c:set var="fbTeaser" value="${item.content.fields.alternates.value['LANDSCAPE_80']}"/>
        </c:if>
    </c:forEach>

    <meta property="og:title" content="${article.title}"/>
    <meta property="og:type" content="article"/>
    <meta property="og:url" content="${article.url}"/>
    <meta property="og:description" content="${article.fields.leadtext}"/>
    <c:if test="${not empty fbTeaser}">
        <meta property="og:image" content="${fbTeaser.href}">
    </c:if>
    <meta property="og:site_name" content="${publication.name}"/>
    <meta property="fb:app_id" content="${section.parameters['facebook.app.id']}"/>
</c:if>