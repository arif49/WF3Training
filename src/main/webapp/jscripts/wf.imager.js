var WFImager = new function() {
  var debugEnabled = false;

  var lazyImageSettings = {
    threshold: 200,
    failure_limit: 10
  };
  var adaptiveImageSettings = {
    proxyPreload: true
  };

  var adaptiveUpdater = {
    update : function (container) {
      debug("Applying image updater : adaptive");
      container.adaptImage(adaptiveImageSettings);
    },
    refresh : function(container) {
      debug("refreshing content with : adaptiveUpdater");
      container.adaptImage();
    }
  };
  var picturefillUpdater = {
    update : function (container) {
      debug("Applying image updater : picturefill");
      picturefill();
    },
    refresh : function(container) {
      // do nothing
    }
  };
  var lazyimageUpdater = {
    update : function (container) {
      debug("Applying image updater : lazyload");

      $("img.lazy",container).lazyload(lazyImageSettings);
      // extra start anchor for elements which are later in doc but shown on top. e.g. Aside
      $(".lazyimage-anchor", container).each(function () {
        $(this).find("img.lazy").lazyload(lazyImageSettings);
      });
    },
    refresh : function(container) {
      debug("refreshing content with : lazyimageUpdater");
      container.scroll();
    }
  };

  var imageUpdaters = [ adaptiveUpdater, picturefillUpdater, lazyimageUpdater ];

  this.update = function(container) {
    for (var i in imageUpdaters) {
      imageUpdaters[i].update(container);
    }
  };

  this.refresh = function(container) {
    for (var i in imageUpdaters) {
      imageUpdaters[i].refresh(container);
    }
  }

  function debug(msg) {
    if (debugEnabled) {
      console.log(msg);
    }
  }

  $(function() {
    WFImager.update($(document));
  });
  $(document).on("pageContentReady", function (event, content) {
    WFImager.update($(content));
  });
  $(window).on('resizeEnd', function () {
    WFImager.update($(document));
  });

  $(bindInteractionForRefresh($(document)));
  $(document).on('pageContentReady', function (event, content) {
    bindInteractionForRefresh($(content))
  });

  function bindInteractionForRefresh(container) {
    // updating image loading for bootstrap tab content
    $('a[data-toggle="tab"]', container).on('shown.bs.tab', function (e) {
      var tabContentId = $(this).attr("href");
      WFImager.refresh($(tabContentId));
    });
    // updating image loading for bootstrap slideshow
    $('.carousel', container).on('slid.bs.carousel', function () {
      WFImager.refresh($(this))
    });
    // updating image loading for mega dropdown menu
    $('.megadropdown', container).hover(function () {
      WFImager.refresh($(this));
    });
  }
};