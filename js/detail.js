// video -details
const videoPlayBtn = document.querySelector(".video__button"),
  poster = document.querySelector(".poster"),
  video = document.querySelector("video"),
  closeBtn = document.querySelector(".close-btn"),
  audioBtn = document.querySelector(".audio-block button"),
  audio = document.querySelector(".audio-block audio");

videoPlayBtn.addEventListener("click", togglePlay);
closeBtn.addEventListener("click", closeVideoScreen);
audioBtn.addEventListener("click", audioPlay);

function togglePlay() {
  poster.classList.add("unvisible");
  videoPlayBtn.classList.add("unvsisble");
  closeBtn.classList.add("active");

  if (video.paused || video.ended) {
    setTimeout(function () {
      video.play();
    }, 1500);
    video.classList.add("active");
    video.volume = 0.3;
  } else {
    video.pause();
    video.classList.remove("active");
  }
}

function closeVideoScreen() {
  video.classList.remove("active");
  poster.classList.remove("unvisible");
  closeBtn.classList.remove("active");

  video.pause();
}

function audioPlay() {
  audio.classList.add("active");
  audioBtn.classList.add("unvisible");
  audio.play();
}



