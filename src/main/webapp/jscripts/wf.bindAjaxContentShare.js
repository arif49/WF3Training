$(function () {
  $(document).on('pageContentReady', function (event, data) {
    if ('undefined' != typeof twttr) {
      twttr.widgets.load(data);
    }
    if ('undefined' != typeof FB) {
      FB.XFBML.parse();
    }
    if ('undefined' != typeof gapi) {
      gapi.plusone.go(data);
      gapi.plus.go(data);
    }
  });
});