/* Lazy page fragment loading */
$(function () {
  WFLazyLoader.loadFragment();
  //WFMedia.loadMedia();
});
$(document).on("fragmentReady", function () {
  WFLazyLoader.correctEmptyZones();
  //WFMedia.loadMedia();
});
$(document).on("pageContentReady", function () {
  //WFMedia.loadMedia();
});