/*
 To use call .wfHideParagraphs() on the element you wish like so:
 $("#content").wfHideParagraphs();

 you can specify the following options:
 show = number of items to show initially
 show_text = the text you want for show more link
 hide_text = the text you want for hide link
 position = specify the position where show more link will be shown, possible options: "left" or "right"
 */
(function ($) {
  $.fn.wfHideParagraphs = function (options) {
    var settings = {
      show: 5,
      show_text: "Show more",
      hide_text: "Hide details",
      position: "right"
    };

    var options = $.extend(settings, options);
    var bodyContent = this;
    return this.each(
        function () {
          var paragraphs = $(this).children();

          if (paragraphs.length <= options.show) {
            return;
          }

          var visible = paragraphs.slice(0, options.show);
          var invisible = paragraphs.slice(options.show);
          invisible.hide();
          var aClass = "";
          if (options.position == "left") {
            aClass = "pull-left";
          }
          else if (options.position == "right") {
            aClass = "pull-right";
          }
          var link = $("<a class=" + aClass + " href='javascript:void(0)'>" + options.show_text + "</a>");
          $(this).append("<p class='clearfix'/>").append(link).append("<p style='padding: 10px;'>");

          link.click(function () {
            if ($(this).html() == options.show_text) {
              $(this).html(options.hide_text);
              invisible.show();
              WFImager.refresh(bodyContent);
            }
            else {
              $(this).html(options.show_text);
              invisible.hide();
            }
            return false;
          });
        }
    );
  };
})(jQuery);