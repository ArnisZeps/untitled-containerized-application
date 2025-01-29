"use strict";

const playNpauseBtn = document.querySelector("#play");
const video = document.querySelector("video");
const progressIndicator = document.querySelector("#progress-indicator");
// let animationFrameId;

function playNpauseFn() {
  if (video.paused) video.play();
  else video.pause();
}

function updateProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressIndicator.style.width = `${progressPercentage}%`;
  console.log("progressIndicator.style.width", progressIndicator.style.width);
  console.log("progressPercentage", progressPercentage);

  // animationFrameId = requestAnimationFrame(updateProgress);
}
video.addEventListener("click", playNpauseFn);
playNpauseBtn.addEventListener("click", playNpauseFn);
video.addEventListener("timeupdate", updateProgress);
