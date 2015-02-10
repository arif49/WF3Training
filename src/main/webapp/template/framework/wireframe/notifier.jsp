<%--
 * File           : $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-framework-core/src/main/webapp/template/framework/wireframe/notifier.jsp#1 $
 * Last edited by : $Author: nahian $ $Date: 2014/05/14 $
 * Version        : $Revision: #1 $
 *
 * URLs to this page:
 * RegistrationNotifier: ${publication.url}?service=notifier&notifier=registration
 * ResetPasswordNotifier: ${publication.url}?service=notifier&notifier=resetPassword
--%>

<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:choose>
  <c:when test="${param['notifier'] == 'registration'}">
    Thanks for creating an account !
    Your username is: ${param['username']}
    Your password is: ${param['password']}
  </c:when>
  <c:when test="${param['notifier'] == 'resetPassword'}">
    New Password notification !
    Your username is: ${param['username']}
    Your password is: ${param['password']}
  </c:when>
</c:choose>
