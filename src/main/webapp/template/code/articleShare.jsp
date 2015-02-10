<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<ul class="${btCss.nav} ${btCss.navPills} ">
  <li class="margin-right-xs">
    <a class="no-padding btn btn-default btn-xs"
       href="mailto:?subject=${article.title}&amp;body=${article.url}"
       title="Share by Email">
       <img class="padding-left-xs" style="padding-bottom: 1px;" src="${template.themeBaseUrl}img/mail.png">
       <span class="padding-right-xs">Email</span>
    </a>
  </li>
  <li class="margin-right-xs">
    <div class="fb-share-button" data-href="${article.url}" data-type="button_count"></div>
  </li>
  <li class="margin-right-xs">
    <div class="g-plus" data-action="share" data-annotation="bubble" data-href="${article.url}"></div>
  </li>
  <li class="margin-right-xs">
    <a href="https://twitter.com/share" class="twitter-share-button" data-url="${article.url}" data-text="${article.title}"></a>
  </li>
</ul>