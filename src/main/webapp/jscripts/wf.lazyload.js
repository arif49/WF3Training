
var WFLazyLoader = new function() {
  var WIDTH_RATIO_MARKER_CLASS_PREFIX = "col-sm-";
  var BOOTSTRAP_DEFAULT_GRID_RATIO = 12;
  var emptyZones = [];

  this.loadFragment = function () {
    var placeholderSelector = '.wf-placeholder';
    var totalPlaceHolder = $(placeholderSelector).length;
    var requestCount = 0;
    var clientType = WFClient.getType();
    $(placeholderSelector).each(function (i, obj) {
      var skipProfiles = obj.getAttribute("data-skip-profiles").split(',');
      if ($.inArray(clientType, skipProfiles) < 0) {
        $.ajax({
          url: obj.getAttribute("data-loadURL"),
          data: {"elementwidth": obj.getAttribute("data-elementwidth")},
          success: function (data) {
            var loadingContent = $(data);
            /*
              Adding an extra wrapper div for a lazy fragment having no root element.
              For example, a lazy loaded teaser widget might not have any widget wrapper or
              some area can be lazy enabled.
              * */
            if(loadingContent.length > 1){
              loadingContent = $("<div class='lazy-on-demand'>").html(data);
            }
            $(obj).replaceWith(loadingContent);
            $.event.trigger('pageContentReady', loadingContent);
          },
          complete: function () {
            requestCount = triggerFragmentReady(requestCount, totalPlaceHolder);
          }
        });
      }
      else {
        var currentEmptyZone = obj.parentNode;
        updateEmptyZoneArray(currentEmptyZone);
        currentEmptyZone.removeChild(obj);
        requestCount = triggerFragmentReady(requestCount, totalPlaceHolder);
      }
    });
  };

  /**
   * correct each unique empty zone
   */
  this.correctEmptyZones = function () {
    for (var i = 0; i < emptyZones.length; i++) {
      if ((emptyZones[i].className.indexOf(WIDTH_RATIO_MARKER_CLASS_PREFIX) > -1) && (isEmptyNode(emptyZones[i]))) {
        adjustWidthRatio($(emptyZones[i]).siblings(), getWidthRatio(emptyZones[i]));
        $(emptyZones[i]).remove();
      }
      else if (emptyZones[i].className.indexOf("row") > -1) {
        adjustWidthRatio($(emptyZones[i]).children(), getWidthRatio(emptyZones[i]));
      }
    }
  }

  function triggerFragmentReady(pCurrentPlaceholderIndex, pTotalPlaceHolder) {
    pCurrentPlaceholderIndex++;
    if (pCurrentPlaceholderIndex == pTotalPlaceHolder) {
      $.event.trigger({
        type: "fragmentReady"
      });
    }
    return pCurrentPlaceholderIndex;
  }


  function adjustWidthRatio(pNodes, widthRatioToAdjust) {
    var siblingWidthRatio = 0, adjustedWidthRatio = 0;
    var totalWidth = getSumOfArray(createWidthRatioArray(pNodes));
    var currentRatio = widthRatioToAdjust > 0 ? (totalWidth + widthRatioToAdjust) : BOOTSTRAP_DEFAULT_GRID_RATIO;
    for (var i = 0; i < pNodes.length; i++) {
      siblingWidthRatio = getWidthRatio(pNodes[i]);
      //convert current ratio to a new ratio for the siblings of the empty zone to be deleted
      adjustedWidthRatio = Math.round((siblingWidthRatio / totalWidth) * currentRatio);
      //replace the old width class with the new adjusted width class
      $(pNodes[i]).removeClass(WIDTH_RATIO_MARKER_CLASS_PREFIX + siblingWidthRatio)
        .addClass(WIDTH_RATIO_MARKER_CLASS_PREFIX + adjustedWidthRatio);
    }
  }

  /**
   * keep track of all unique empty zones
   * @param pEmptyZone the empty zone in concern
   */
  function updateEmptyZoneArray(pEmptyZone) {
    if (pEmptyZone) {
      for (var j = 0; j < emptyZones.length; j++) {
        if (emptyZones[j].isEqualNode(pEmptyZone)) {
          break;
        }
      }
      //if unique, insert it to the empty zone array
      if (j == emptyZones.length) {
        emptyZones.push(pEmptyZone);
      }
    }
  }

  function getWidthRatio(pNode) {
    var classes = pNode.className.split(' ');
    for (var cl = 0; cl < classes.length; cl++) {
      if (classes[cl].indexOf(WIDTH_RATIO_MARKER_CLASS_PREFIX) != -1) {
        break;
      }
    }
    return cl == classes.length ? 0 : parseInt(classes[cl].slice(WIDTH_RATIO_MARKER_CLASS_PREFIX.length));
  }

  function isEmptyNode(pNode) {
    var isEmpty = false;
    if (!pNode.hasChildNodes()) {
      isEmpty = true;
    }
    else {
      //need this hack as the widget template html is generated with lots of empty text nodes
      var children = pNode.childNodes;
      for (var n = 0; n < children.length; n++) {
        isEmpty = (children[n].nodeType == Node.TEXT_NODE) && (children[n].nodeValue.trim().length == 0);
        if (!isEmpty) break;
      }
    }
    return isEmpty;
  }

  function createWidthRatioArray(pNodes) {
    var widths = [];
    for (var n = 0; n < pNodes.length; n++) {
      widths[n] = getWidthRatio(pNodes[n]);
    }
    return widths;
  }

  function getSumOfArray(pArray) {
    var sum = 0;
    for (var i = 0; i < pArray.length; i++) {
      sum += pArray[i];
    }
    return sum;
  }
};