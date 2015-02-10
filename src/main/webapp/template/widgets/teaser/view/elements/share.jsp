<%@ page session="false" %>
<%@ taglib prefix="wf-util" uri="http://www.escenic.com/widget-framework/util" %>
<%@ taglib prefix="article" uri="http://www.escenic.com/taglib/escenic-article" %>


<wf-util:wrap htmlTag="${widget.model.elementSettings['share.htmltag']}"
              styleClass="${widget.model.elementSettings['share.styleclass']} ${widget.model.elementSettings['share.textsize']}">

  <article:use article="${resultItem.content}">
    <jsp:include page="helpers/shareContent.jsp"/>
  </article:use>
</wf-util:wrap>