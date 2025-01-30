"use strict";

const getTimestampInfo = () => {
  const infoElement = document.getElementById("info");
  if (!infoElement) return null;

  const timestampElements = infoElement.querySelectorAll("div");

  const timestamps = Array.from(timestampElements).map((el) => {
    const detailsElement = el.querySelector("details");

    const onclick = () => {
      video.currentTime = parseFloat(el.getAttribute("data-timestamp") || "0");
      console.log(video.currentTime);
    };
    detailsElement.addEventListener("click", onclick);

    return {
      title: el.getAttribute("data-title") || "",
      description: el.getAttribute("data-description") || "",
      timestamp: parseFloat(el.getAttribute("data-timestamp") || "0"),
      detailsElement,
    };
  });

  return timestamps;
};
const handlePlay = () => {
  if (video.paused) video.play();
  else video.pause();
};

const handleProgressUpdate = () => {
  if (timestampArray !== null) {
    for (const element of timestampArray) {
      if (video.currentTime < element.timestamp) break;
      closest = element;
    }

    const shouldClose = timestampArray.filter((el) => el !== closest);

    if (video.currentTime >= closest.timestamp) {
      closest.detailsElement.open = true;
    }

    shouldClose.forEach((timestamp) => {
      timestamp.detailsElement.open = false;
    });
  }

  const progressPercentage = video.currentTime / video.duration;
  progressIndicator.style.transform = `scaleY(${progressPercentage})`;
};

const timestampArray = getTimestampInfo();
const video = document.querySelector("video");
const progressIndicator = document.querySelector("#progress-indicator");

video.addEventListener("click", handlePlay);
video.addEventListener("timeupdate", handleProgressUpdate);
