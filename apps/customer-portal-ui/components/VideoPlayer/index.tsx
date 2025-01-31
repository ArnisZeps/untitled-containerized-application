"use client";

import Accordion from "@/components/Accordion";
import IVideoPlayerProps from "@/interfaces/IVideoPlayerProps";
import { useEffect, useRef } from "react";

const VideoPlayer = ({ src, informativeTimestamps }: IVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  useEffect(() => {
    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    const details = detailsRefs.current;

    if (!video || !progressBar || !details) return;

    informativeTimestamps?.forEach((informativeTimestamp, index) => {
      const { timestamp } = informativeTimestamp;
      const onclick = () => {
        if (video.currentTime !== timestamp) {
          video.currentTime = timestamp;
        }
      };
      if (details[index]) {
        details[index].onclick = onclick;
      }
    });

    const handlePlay = () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };

    video.addEventListener("click", handlePlay);

    const handleProgressUpdate = () => {
      const progress = video.currentTime / video.duration;
      if (informativeTimestamps && informativeTimestamps.length > 0) {
        let closestIndex = -1;
        
        for (let i = 0; i < informativeTimestamps.length; i++) {
          if (video.currentTime < informativeTimestamps[i].timestamp) break;
          closestIndex = i;
        }

        detailsRefs.current.forEach((details, index) => {
          if (details) details.open = index === closestIndex;
        });

        const isVertical = progressBar.clientHeight > progressBar.clientWidth;
        if (isVertical) {
          progressBar.style.transform = `scaleY(${progress})`;
        } else {
          progressBar.style.transform = `scaleX(${progress})`;
        }
      }
    };

    video.addEventListener("timeupdate", handleProgressUpdate);
  }, [informativeTimestamps, videoRef, detailsRefs]);

  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-4">
      <div className="w-full md:w-3/5">
        <video ref={videoRef} className="w-full relative cursor-pointer">
          <source src={src} />
        </video>
      </div>

      <div className="flex flex-row md:flex-row md:items-center md:space-x-4">
        <div id="progress-bar" className="relative h-2 w-full md:w-6 md:h-full bg-white rounded-md">
          <div ref={progressBarRef} className="origin-left scale-x-0 md:origin-top md:scale-y-0 h-full w-full bg-indigo-800 rounded-md" />
        </div>
      </div>

      {informativeTimestamps && (
        <div id="info" className="w-full md:w-1/3 flex flex-col">
          {informativeTimestamps.map((informativeTimestamp, index) => (
            <div
              key={index}
              data-timestamp={informativeTimestamp.timestamp}
              data-title={informativeTimestamp.title}
              data-description={informativeTimestamp.description}
            >
              <Accordion
                key={index}
                ref={(el) => {
                  detailsRefs.current[index] = el;
                }}
                title={informativeTimestamp.title}
                description={informativeTimestamp.description}
              />
              <hr className="h-px bg-gray-300 border-0 dark:bg-gray-700 mt-2 mb-3" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
