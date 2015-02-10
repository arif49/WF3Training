/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
/*! Customized for widget framework
 * - to work with jquery.lazyload
 * - disabled initialization on document ready and widget resize */

(function (w) {

  // Enable strict mode
  "use strict";

  function updateImageUrl(picImg, pImgSrc) {
    if (picImg.getAttribute("class").indexOf("lazy") >= 0) {
      picImg.setAttribute("data-original", pImgSrc);
    }
    else if (picImg.getAttribute("class").indexOf("placeholder") >= 0) {
      picImg.src = pImgSrc;
    }
    else {
      if (picImg.src.length == 0) {
        picImg.src = pImgSrc;
      }
      else {
        var loaderImg = document.createElement("img");
        //caring for Microsoft's model of event registration
        if (loaderImg.attachEvent) {
          loaderImg.attachEvent('onload', function () {
            picImg.src = loaderImg.src;
          });
        }
        else {
          loaderImg.addEventListener('load', function () {
            picImg.src = loaderImg.src;
          }, false);
        }
        loaderImg.src = pImgSrc;
      }
    }
  }

  w.picturefill = function () {
    var ps = w.document.getElementsByTagName("span");

    // Loop the pictures
    for (var i = 0, il = ps.length; i < il; i++) {
      if (ps[ i ].getAttribute("data-picture") !== null) {

        var sources = ps[ i ].getElementsByTagName("span"),
            matches = [];

        // See if which sources match
        for (var j = 0, jl = sources.length; j < jl; j++) {
          var media = sources[ j ].getAttribute("data-media");
          // if there's no media specified, OR w.matchMedia is supported
          if (!media || ( w.matchMedia && w.matchMedia(media).matches )) {
            matches.push(sources[ j ]);
          }
        }

        // Find any existing img element in the picture element
        var picImg = ps[ i ].getElementsByTagName("img")[ 0 ];

        if (matches.length) {
          var matchedEl = matches.pop();
          if (!picImg || picImg.parentNode.nodeName === "NOSCRIPT") {
            picImg = w.document.createElement("img");
            picImg.alt = ps[ i ].getAttribute("data-alt");
          }
          else if (matchedEl === picImg.parentNode) {
            // Skip further actions if the correct image is already in place
            continue;
          }

          updateImageUrl(picImg, matchedEl.getAttribute("data-src"));
          matchedEl.appendChild(picImg);
          picImg.removeAttribute("width");
          picImg.removeAttribute("height");
        }
        else if (picImg) {
          picImg.parentNode.removeChild(picImg);
        }
      }
    }
  };
}(this));