(function ($) {
  $.fn.wfPagination = function (options) {

    var bodyElement = $(this);
    var parentElement = $(bodyElement).parent();
    var paginationElement = $(parentElement).find('ul.pagination');

    var settings = $.extend({
      perPage: 5
    }, options);

    $.fn.extend({
      previousPage: function () {
        var currentPaginationElement = $(this).parent().find('ul.pagination');
        var goToPage = parseInt($(currentPaginationElement).data("curr")) - 1;
        if ($(currentPaginationElement).children('li.active').prev('li.page_class').length == true) {
          $(this).goTo(goToPage);
        }
      },
      nextPage: function () {
        var currentPaginationElement = $(this).parent().find('ul.pagination');
        var goToPage = parseInt($(currentPaginationElement).data("curr"), 10) + 1;
        if ($(currentPaginationElement).children('li.active').next('li.page_class').length == true) {
          $(this).goTo(goToPage);
        }
      },
      goTo: function (page) {
        var startAt = page * settings.perPage,
            endOn = startAt + settings.perPage;
        var currentPaginationElement = $(this).parent().find('ul.pagination');
        var currentPaginationItems = $(currentPaginationElement).find('li.page_class');
        $(this).children().css('display', 'none').slice(startAt, endOn).css('display', 'block');
        $(currentPaginationElement).data("curr", page);
        $(currentPaginationItems).removeClass('active');
        $(currentPaginationItems).eq(page).addClass('active');
      }
    });

    var bodyContent = this;
    return this.each(function () {
      var perPage = settings.perPage;
      var numItems = bodyElement.children().size();
      var numPages = Math.ceil(numItems / perPage);
      if (numPages > 1) {
        $(paginationElement).data("curr", 0);

        var curr = 0;
        if (numPages > 1) {
          $('<li class="previous"><a href="javascript:void(0)">&laquo;</a></li>').appendTo($(paginationElement));
        }
        while (numPages > curr) {
          $('<li class="page_class"><a href="javascript:void(0)">' + (curr + 1) + '</a></li>').appendTo($(paginationElement));
          curr++;
        }

        if (numPages > 1) {
          $('<li class="next"><a href="javascript:void(0)">&raquo;</a></li>').appendTo($(paginationElement));
        }

        $(parentElement).find('.pagination .page_class:first').addClass('active');

        bodyElement.children().css('display', 'none');
        bodyElement.children().slice(0, perPage).css('display', 'block');

        $(paginationElement).find('li.page_class').click(function () {
          var clickedPage = $(this).children(':first').html().valueOf() - 1;
          $(bodyElement).goTo(clickedPage, perPage);
          WFImager.refresh(bodyContent);
        });
        $(paginationElement).find('li.previous').click(function () {
          $(bodyElement).previousPage();
          WFImager.refresh(bodyContent);
        });
        $(paginationElement).find('li.next').click(function () {
          $(bodyElement).nextPage();
          WFImager.refresh(bodyContent);
        });
      }
      else {
        $(paginationElement).not(':has(li)').remove();
      }
    });
  };
}(jQuery));