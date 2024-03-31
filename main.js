onload = () => {
  document.body.classList.remove("container");
};

var audio = document.getElementById("myAudio");

audio.autoplay = true;
audio.onload();
