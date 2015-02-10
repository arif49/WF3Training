var WFClient = new function () {
  var clientType;
  this.getType = function () {
    if (clientType == null) {
      resolveClientType();
    }
    return clientType;
  }

  function resolveClientType() {
    for (var type in WFClientTypeDef) {
      if (window.matchMedia(WFClientTypeDef[type]).matches) {
        clientType = type;
      }
    }
  }

  $(function () {
    resolveClientType();
  });

  $(window).resize(function () {
    resolveClientType();
  });
}