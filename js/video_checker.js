var mainVideo1 = $('#home_video_1');
var mainVideo2 = $('#home_video_2');
var mainVideo3 = $('#home_video_3');

if ($(window).width() < 1200) {
    mainVideo1.append("<source type='video/mp4' src='./assets/videos/home_1_mobile.mp4' />");
    mainVideo2.append("<source type='video/mp4' src='./assets/videos/home_2_mobile.mp4' />");
    mainVideo3.append("<source type='video/mp4' src='./assets/videos/home_3_mobile.mp4' />");
} else {
  mainVideo1.append("<source type='video/mp4' src='./assets/videos/home_1.mp4' />");
  mainVideo2.append("<source type='video/mp4' src='./assets/videos/home_2.mp4' />");
  mainVideo3.append("<source type='video/mp4' src='./assets/videos/home_3.mp4' />");
}
