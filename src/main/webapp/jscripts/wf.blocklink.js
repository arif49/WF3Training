function bindWholeTeaserLink(container) {
  $(".link-block", container).click(function() {
    var blockLink = $("a.block-link:first", $(this)); //making sure we select only the first hyperlink
    if (blockLink.length) {
      if (blockLink[0].click) {
        blockLink[0].click(); //must trigger DOM click(), jQuery click() considers event handlers, but ignores href
      }
      else {
        console.log('event not available for the element, dispatching event...');
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('click', true, true);
        blockLink[0].dispatchEvent(clickEvent);
      }
    }
    else {
      console.log("Could not find the link in the block");
    }
    return false;
  });
  $(".link-block a", container).click(function(event) {
    event.stopPropagation();
  });
}

$(function() {
  bindWholeTeaserLink($(document));
});

//Handle lazy loading.
$(document).on('pageContentReady', function (event, content) {
  bindWholeTeaserLink($(content));
});
