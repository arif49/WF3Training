<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:set var="articleURL" value="${article.url}"/>
<c:set var="articleTitle" value="${article.title}"/>

<div class="${btCss.dropdown}">
  <a id="dropdown-share" class="dropdown-toggle" href="#" data-toggle="dropdown">
    <img src="${template.themeBaseUrl}img/share-options.png">
  </a>
  <ul class="${btCss.dropdownMenu}" role="menu" aria-labelledby="dropdown-share"
      data-share-url="${articleURL}" data-share-text="${articleTitle}">
    <li class="dropdown-header">Share</li>
    <li class="wf-sharetool" data-share-on="facebook">
      <a href="#">
        <img src="${template.themeBaseUrl}img/facebook.png" alt="Facebook"/>
        <span>Facebook</span>
      </a>
    </li>
    <li class="wf-sharetool" data-share-on="twitter">
      <a href="#">
        <img src="${template.themeBaseUrl}img/twitter.png" alt="Twitter"/>
        <span>Twitter</span>
      </a>
    </li>
    <li class="wf-sharetool" data-share-on="googleplus">
      <a href="#">
        <img src="${template.themeBaseUrl}img/google.png" alt="Google plus"/>
        <span>Google plus</span>
      </a>
    </li>
  </ul>
</div>