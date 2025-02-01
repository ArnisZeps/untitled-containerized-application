"use client";

import Accordion from "@/components/Accordion";
import IVideoPlayerProps from "@/interfaces/IVideoPlayerProps";
import { useEffect, useRef } from "react";
import { EAnalyticsSource, ELogGroups } from "@/lib/constants";
import { sendAnalytics } from "@/lib/analytics";

const VideoPlayer = ({ src, informativeTimestamps }: IVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const progressContainerRef = useRef<HTMLDivElement | null>(null);
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  useEffect(() => {
    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    const progressContainer = progressContainerRef.current;
    const details = detailsRefs.current;

    if (!video || !progressBar || !details || !progressContainer) return;

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
      const progress = (video.currentTime / video.duration) * 100;
      if (informativeTimestamps && informativeTimestamps.length > 0) {
        let closestIndex = -1;

        for (let i = 0; i < informativeTimestamps.length; i++) {
          if (video.currentTime < informativeTimestamps[i].timestamp) break;
          closestIndex = i;
        }

        detailsRefs.current.forEach((details, index) => {
          if (details) details.open = index === closestIndex;
        });

        const isVertical = progressContainer.clientHeight > progressContainer.clientWidth;
        if (isVertical) {
          progressBar.style.width = `50%`;
          progressBar.style.height = `${progress}%`;
        } else {
          progressBar.style.height = `40%`;
          progressBar.style.width = `${progress}%`;
        }
      }
    };
    video.addEventListener("timeupdate", handleProgressUpdate);

    const sendAnalyticsData = async () => {
      await sendAnalytics({ source: EAnalyticsSource.CLIENT, logGroup: ELogGroups.FULL_VIDEO_VIEWS });
    };

    video.addEventListener("ended", sendAnalyticsData);
  }, [informativeTimestamps, videoRef, detailsRefs]);

  return (
    <div className="max-w-sm flex flex-col gap-8 md:flex-row md:gap-4 md:max-w-full">
      <div className="w-full md:w-3/5">
        <video ref={videoRef} className="w-full relative cursor-pointer md:max-w-full">
          <source src={src} />
        </video>
      </div>

      <div className="">
        <div
          ref={progressContainerRef}
          className="bg-white rounded-md flex items-center h-4 
                      md:items-stretch md:justify-center md:h-full md:w-6 "
        >
          <div
            ref={progressBarRef}
            className="bg-indigo-800 rounded-md relative w-0 h-[40%] left-1 max-w-[98%]
                        md:left-0 md:top-1 md:w-[50%] md:h-0 md:max-h-[97%]"
          />
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
