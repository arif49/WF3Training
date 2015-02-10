var WFInlineLoader = new function() {
  var INLINE_WRAPPER = 'inline-wrapper';
  var TEASER_WRAPPER = 'teaser';
  var INLINE_CLOSE = 'inline-close';
  var INLINE_MARKER = 'inline';

  this.bindInlineContentLoading = function(container) {
    $("a."+INLINE_MARKER, container).click(function () {
      var loadingDevices = $(this).data("inline-devices");
      var devices = loadingDevices.split(',');
      if ($.inArray(WFClient.getType(), devices) > -1) {
        var articleUrl = $(this).attr('href');
        var url = articleUrl + "/inline";

        var teaserWrapper = $(this).closest('.'+TEASER_WRAPPER);
        if(teaserWrapper.next().hasClass(INLINE_WRAPPER)) {
          openInlineBlock(teaserWrapper, articleUrl);
        }
        else {
          loadInlineContent(url, teaserWrapper, function() {
            openInlineBlock(teaserWrapper, articleUrl);
          });
        }
        return false;
      }
    });
  };

  function openInlineBlock(teaserWrapper, articleUrl) {
    teaserWrapper.hide();
    teaserWrapper.next('.'+INLINE_WRAPPER).slideDown("slow");

    window.history.pushState({"html":articleUrl,"pageTitle":''},"", articleUrl);
  }

  function loadInlineContent(url, teaserWrapper, callback) {
    $.ajax({
      url: url,
      datatype: "html",
      success: function (oData) {
        teaserWrapper.after(oData);
        var inlineContent = teaserWrapper.next("." + INLINE_WRAPPER);

        callback();
        $.event.trigger('pageContentReady', inlineContent);
        bindInlineClose(inlineContent);
        //TODO: not here, should be based on some event
        window.picturefill();
      }
    });
  }

  function bindInlineClose(inlineWrapper){
    $('a.'+INLINE_CLOSE, inlineWrapper).click(function (event) {
      inlineWrapper.prev('.'+TEASER_WRAPPER).show();
      inlineWrapper.hide();
      event.preventDefault();
    });
  }
};

/* Binding inline loading */
$(function () {
  WFInlineLoader.bindInlineContentLoading($(document));

  //This is for handling lazy loading.
  $(document).on('pageContentReady', function (event, content) {
    WFInlineLoader.bindInlineContentLoading($(content));
  });

});

