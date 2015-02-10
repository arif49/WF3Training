$(function () {
  mediaPlayerClick();
});

$(document).on('pageContentReady', function (event, data) {
  mediaPlayerClick();
  var $mediaDOM = $(data).find(".wf-media.autoplay");
  fetchMediaLink($mediaDOM, $mediaDOM.data('src'));
});

function mediaPlayerClick() {
  $(".wf-media").on('click', function () {
    if (!$(this).data("requested") && $(this).data('requested') == false) {
      fetchMediaLink(this, $(this).data('src'));
      $(this).data('requested', true);
    }
  });

  $('.media-modal').on('hidden.bs.modal', function (e) {
    if (flowplayer($(this).find(".flowplayer")) != null) {
      flowplayer($(this).find(".flowplayer")).unload();
    }
    else {
      var mediaDiv = $(this).find('div.wf-media');
      //Using this if condition to avoid throwing error in ie8
      if($(mediaDiv).html() != '' && $(mediaDiv).html() != null) {
        $(mediaDiv).find('audio.wf-audio')[0].player.pause();
        $(mediaDiv).empty();
      }
    }
    $(this).data('requested', false);
  });

  $('.media-modal').on('shown.bs.modal', function (e) {
    if ($(this).data('requested') == false) {
      var target = e.relatedTarget;
      var mediaLink = $(target).data("media-link");
      var wfMedia = $(target).siblings(".media-modal").find(".wf-media");
      $(wfMedia).attr("data-src", mediaLink);
      fetchMediaLink(wfMedia, mediaLink);
      $(this).data('requested', true);
    }
  });

  $('.wf-cuepoint').on('click', function () {
    var time = $(this).data("cuepoint-time");
    var api = $(this).parent().siblings('.wf-media').data("flowplayer");
    api.seek(time);
  });
}

fetchMediaLink($(".wf-media.autoplay"), $(".wf-media.autoplay").data('src'));

function fetchMediaLink(media, mediaSource) {
  if (!mediaSource) {
    return;
  }
  $.ajax({
    url: mediaSource,
    type: "GET",
    dataType: "json",
    success: function (data, status) {
      if (data.type == 'video') {
        var playerFriendlyJSON = convertMediaJson(data);
        initVideoPlayer(media, playerFriendlyJSON);
      }
      else {
        initAudioPlayer(media, data);
      }
      $(media).data("url", "ready");
      $(media).find(".glyphicon").remove();
    },
    errorCode: function (data, status, error) {

    }

  });
}

function convertMediaJson(jsonData) {
  var playerFriendlyJSON = {type: jsonData.type, sources: [], cuepoints: [], subtitle: ""};
  var sources = [];
  $(jsonData.sources).each(function (index, source) {
    var mediaType = source.mimeType.split("/")[1];
    var entry = {};
    entry[mediaType] = source.url;
    sources.push(entry);
  });
  playerFriendlyJSON.sources = sources;
  if (jsonData.timeline && jsonData.timeline.cuepoints) {
    playerFriendlyJSON.cuepoints = jsonData.timeline.cuepoints;
  }
  if (jsonData.subtitle) {
    playerFriendlyJSON.subtitle = jsonData.subtitle;
  }

  return playerFriendlyJSON;
}

function initVideoPlayer(pMedia, jsonData) {
  var track = $("track", $(pMedia));
  if (track.length == 0 && jsonData.type == "video") {
    var $track = $("<track src='" + jsonData.subtitle + "'>");
    $(pMedia).append($track);
  }
  $(pMedia).flowplayer({
    adaptiveRatio: true,
    playlist: [jsonData.sources],
    cuepoints: jsonData.cuepoints
  }).one('ready', function (ev, api) {
      api.resume();
      if (track.length == 0 && jsonData.type == "video") {
        handleCloseCaption(pMedia);
      }
      $(pMedia).children("img").remove();
    });
}

function handleCloseCaption(pMedia) {
  var $fpSubtitle = $(pMedia).find(".fp-subtitle");
  var $cc = $("<a class='wf-close-caption on'>CC</a>").click(function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on").addClass("off");
      $fpSubtitle.hide();
    }
    else {
      $(this).removeClass("off").addClass("on");
      $fpSubtitle.show();
    }
  });
  $(pMedia).find(".fp-fullscreen").after($cc);
}

function initAudioPlayer(pMedia, jsonData) {
  var audioTag = "<audio class='wf-audio' width='100%' controls='controls'>";
  $(jsonData.sources).each(function (index, source) {
    audioTag += "<source src='" + source.url + "' type='" + source.mimeType + "'>";
  });
  audioTag += "</audio>";
  $(pMedia).append(audioTag);

  ($(pMedia).children('audio.wf-audio')).mediaelementplayer({
    pluginPath: $(pMedia).data('rootUrl') + 'jscripts/',
    audioHeight: 30,
    pauseOtherPlayers: false,
    alwaysShowControls: true,
    features: ['playpause', 'current', 'progress', 'duration', 'volume'],
    success: function (mediaElement, originalNode) {
      mediaElement.play();
    }
  });
}