import Accordion from "@/components/Accordion";
import IVideoPlayerProps from "@/interfaces/IVideoPlayerProps";

const VideoPlayer = ({ src, informativeTimestamps }: IVideoPlayerProps) => {
  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-6">
        <video className="w-full relative cursor-pointer">
          <source src={src} />
          <script type="module" src="/scripts/videoPlayer.js" data-timestamp={"informativeTimestamps"} defer />
        </video>
      </div>
      <div className="col-span-1 mx-auto">
        <div id="progress-bar" className="relative h-full bg-white w-6 rounded-md">
          <div id="progress-indicator" className="origin-top scale-y-0 h-full bg-indigo-800 w-full rounded-md"></div>
        </div>
      </div>
      {informativeTimestamps && (
        <div id="info" className="col-span-3">
          {informativeTimestamps.map((informativeTimestamp, index) => (
            <div
              key={index}
              data-timestamp={informativeTimestamp.timestamp}
              data-title={informativeTimestamp.title}
              data-description={informativeTimestamp.description}
            >
              <Accordion key={index} title={informativeTimestamp.title} description={informativeTimestamp.description} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
