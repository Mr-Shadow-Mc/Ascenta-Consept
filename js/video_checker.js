var mainVideo1 = $('#home_video_1');
var mainVideo2 = $('#home_video_2');
var mainVideo3 = $('#home_video_3');

$(document).ready(function () {
  checkScreen();
});

$(window).on('resize', function () {
  checkScreen();
});

function checkScreen() {
  var deviceAgent = navigator.userAgent.toLowerCase();
  var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);

  if (agentID || $(window).width() <= 1020) {
    $('.videos_home_sources').remove();
    mainVideo1.append("<source class='videos_home_sources' type='video/mp4' src='./assets/videos/home_1_mobile.mp4' />");
    mainVideo2.append("<source class='videos_home_sources' type='video/mp4' src='./assets/videos/home_2_mobile.mp4' />");
    mainVideo3.append("<source class='videos_home_sources' type='video/mp4' src='./assets/videos/home_3_mobile.mp4' />");
  } else {
    $('.videos_home_sources').remove();
    mainVideo1.append("<source class='videos_home_sources' type='video/mp4' src='./assets/videos/home_1.mp4' />");
    mainVideo2.append("<source class='videos_home_sources' type='video/mp4' src='./assets/videos/home_2.mp4' />");
    mainVideo3.append("<source class='videos_home_sources' type='video/mp4' src='./assets/videos/home_3.mp4' />");
  }
}