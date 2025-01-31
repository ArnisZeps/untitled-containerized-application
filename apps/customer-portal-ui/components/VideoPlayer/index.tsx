import Accordion from "@/components/Accordion";
import IVideoPlayerProps from "@/interfaces/IVideoPlayerProps";

const VideoPlayer = ({ src, informativeTimestamps }: IVideoPlayerProps) => {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-4">
      <div className="w-full md:w-3/5">
        <video className="w-full relative cursor-pointer">
          <source src={src} />
          <script type="module" src="/scripts/videoPlayer.js" data-timestamp={"informativeTimestamps"} defer />
        </video>
      </div>

      <div className="flex flex-row md:flex-row md:items-center md:space-x-4">
        <div id="progress-bar" className="relative h-2 w-full md:w-6 md:h-full bg-white rounded-md">
          <div id="progress-indicator" className="origin-left scale-x-0 md:origin-top md:scale-y-0 h-full w-full bg-indigo-800 rounded-md" />
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
              <Accordion key={index} title={informativeTimestamp.title} description={informativeTimestamp.description} />
              <hr className="h-px bg-gray-300 border-0 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
