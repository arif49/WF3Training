
/*Binds to window resize event and invoke 'resizeEnd'
when the user has finished dragging resize handle of the browser*/
$(function(){
  var timer;
  $(window).bind('resize', function(){
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      $(this).trigger('resizeEnd');
    }, 100);
  });
});