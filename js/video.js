var video;
var playBackSpeed = 1;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.getElementById("player1");
  video.autoplay = false;
  video.loop = false;
  video.load();
});

function updateVolume() {
  console.log("Update Volume");
  var volume = document.getElementById("slider").value;
  volume = volume + "%";
  document.getElementById("volume").innerHTML = volume;
}
document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  updateVolume();
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  console.log("Slow Down Video");
  playBackSpeed = playBackSpeed * 0.9;
  console.log("Speed is " + playBackSpeed);
  video.playbackRate = playBackSpeed;
});

document.querySelector("#faster").addEventListener("click", function () {
  console.log("Speed Up Video");
  playBackSpeed = playBackSpeed * 1.1;
  console.log("Speed is " + playBackSpeed);
  video.playbackRate = playBackSpeed;
});

document.querySelector("#skip").addEventListener("click", function () {
  console.log("Skip ahead");
  video.currentTime = video.currentTime + 10;
  if (video.currentTime == video.duration) {
    video.currentTime = 0;
  }
  console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
  var label = document.getElementById("mute").innerHTML;
  if (label == "Mute") {
    document.getElementById("mute").innerHTML = "Unmute";
    video.muted = true;
  } else {
    document.getElementById("mute").innerHTML = "Mute";
    video.muted = false;
  }
});

document.querySelector("#slider").addEventListener("click", function () {
  console.log("Slider Event");
  updateVolume();
  var volume = document.getElementById("slider").value;
  video.volume = volume / 100;
});

document.querySelector("#vintage").addEventListener("click", function () {
  console.log("Old School");
  video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
  console.log("Original");
  video.classList.remove("oldSchool");
});
