// video 
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

//audio

function audioPlay() {
  audio.classList.add("active");
  audioBtn.classList.add("unvisible");
  audio.play();
}


//comment

const formTextarea = document.querySelector('.comment-form textarea'),
      cancelBtn = document.querySelectorAll('.btn-box button'),
      formSendBTN = document.querySelector('.comment-form input'),
      replyCommentBox = document.querySelector('.box-container'),
      commentBoxParagrath = replyCommentBox.querySelector('p'),
      replyCommentBtn = replyCommentBox.querySelector('.box-container__btn'),
      responseBox = document.querySelector('.response-box'),
      responseBoxParagrath = responseBox.querySelector('p');



cancelBtn.forEach(btn => {

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('textarea').forEach(item => {
      item.value = "";
    });
  });

});


formSendBTN.addEventListener('click', (e) => {
  e.preventDefault();
  commentBoxParagrath.innerHTML = formTextarea.value;
  formTextarea.value = "";
  replyCommentBox.classList.add('active');
});

replyCommentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  responseBox.classList.add('active');
  responseBoxParagrath.innerHTML = commentBoxParagrath.textContent;
});


