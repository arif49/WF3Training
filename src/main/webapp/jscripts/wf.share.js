//This is for handling the share popup window.
var WFShareTool = new function() {
  function openShareLink(pLink) {
    window.open(pLink, '', 'width=740,height=500');
  }

  //This is for handling the click event of global share link
  this.bindShareLinks = function(container) {
    $(".wf-sharetool a", container).click(function (event) {
      var linkLi = $(this).parent();
      var site = linkLi.data("share-on");
      var shareUrl = linkLi.parent().data("share-url");
      var shareText = linkLi.parent().data("share-text");
      switch (site) {
        case "facebook" :
          openShareLink('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(shareUrl));
          break;
        case "twitter" :
          openShareLink('http://twitter.com/share?text=' + shareText + '&url=' + encodeURIComponent(shareUrl));
          break;
        case "googleplus" :
          openShareLink('https://plus.google.com/share?url=' + encodeURIComponent(shareUrl));
          break;
      }
      event.preventDefault();
    });
  }
};

$(function () {
  WFShareTool.bindShareLinks($(document));

//This is for handling lazy loading.
  $(document).on('pageContentReady', function (event, content) {
    WFShareTool.bindShareLinks($(content));
  });
});
