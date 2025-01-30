"use strict";

const playButton = document.querySelector("#play");
const video = document.querySelector("video");
const progressIndicator = document.querySelector("#progress-indicator");
// let animationFrameId;

const handlePlayButtonText = () => {
  playButton.textContent = "";
  playButton.textContent = video.paused ? "play" : "stop";
}

const handlePlay = () => {
  if (video.paused) video.play();
  else video.pause();
}

const handleProgressUpdate = () => {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressIndicator.style.width = `${progressPercentage}%`;
}

video.addEventListener("click", handlePlay);
playButton.addEventListener("click", handlePlay);
video.addEventListener("timeupdate", handleProgressUpdate);

video.addEventListener("play", handlePlayButtonText);
video.addEventListener("pause", handlePlayButtonText);
