"use strict";

const video = document.querySelector("video");
const progressIndicator = document.querySelector("#progress-indicator");

const handlePlay = () => {
  if (video.paused) video.play();
  else video.pause();
}

const handleProgressUpdate = () => {
  const progressPercentage = (video.currentTime / video.duration);
  console.log(progressPercentage);
  progressIndicator.style.transform = `scaleY(${progressPercentage})`;
}

video.addEventListener("click", handlePlay);
video.addEventListener("timeupdate", handleProgressUpdate);
