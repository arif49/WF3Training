(function ($) {
  $.fn.adaptImage = function (pOptions) {
    var options = pOptions ? pOptions : {};
    options.debug = false;
    function debug(pMsg) {
      if (options.debug) {
        console.log(pMsg);
      }
    }

    //TODO: should it be configurable feature of the plugin?
    var sizes = imageSizes;
    debug(sizes.length + " image sizes were found: " + sizes);
    var imgSelector = "img.adaptive";
    var holder = $(this);

    debug("Adapting visible items: :" + $(imgSelector + ":visible", holder).length);
    $(imgSelector + ":visible", holder).each(function () {
      var variant = $(this).attr('data-variant');
      var template = $(this).attr('data-src-template');
      if (template == null) {
        return;
      }
      var elementWidth = $(this).width();
      debug("Found img: " + elementWidth + "px::" + $(this).attr('src'));

      var selected = Math.max.apply(null, sizes);
      for (var i = 0; i < sizes.length; i++) {
        if (elementWidth <= sizes[i]) {
          selected = sizes[i];
          break;
        }
      }

      var prevWidth = $(this).attr('data-selected-width');
      if (prevWidth && prevWidth >= selected) {
        debug("Available image version width is higher than selected one. So, not lazy loading image again");
        return;
      }

      debug("..adapting using : " + selected + "px::" + variant + "::" + template);
      var adaptedSrc = template.replace("binary", "alternates").replace("thumbnail", variant + "_" + selected);

      if ($(this).attr('class').indexOf('lazy') >= 0) {
        debug("..Adapted lazy img src " + adaptedSrc);
        var proxyWidth = $(this).attr('data-proxy-width');
        if (proxyWidth >= selected) {
          $(this).attr('data-original', $(this).attr('data-proxy-image'));
          $(this).attr('data-selected-width', proxyWidth);
        }
        else {
          $(this).attr('data-original', adaptedSrc);
          $(this).attr('data-selected-width', selected);
        }
      }
      // placeholder or not
      else {
        $(this).attr('src', adaptedSrc);
        debug("..Adapted img src " + adaptedSrc);
      }
    });

    if (options.proxyPreload) {
      debug("Proxy loading hidden items: :" + $(imgSelector + ":hidden", holder).length);
      $(imgSelector + ":hidden", holder).each(function () {
        var proxyImageSrc = $(this).attr('data-proxy-image');
        debug("proxy: " + proxyImageSrc)
        if (proxyImageSrc) {
          $(this).attr('src', proxyImageSrc);
        }
      });
    }
    return holder;
  };
}(jQuery));
