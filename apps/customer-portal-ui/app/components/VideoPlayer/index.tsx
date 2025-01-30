interface IVideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: IVideoPlayerProps) => {
  return (
    <div className="mx-auto rounded-lg overflow-hidden relative group">
      <video className="w-full relative">
        <source src={src} />
        <script type="module" src="/scripts/videoPlayer.js" defer />
      </video>
      <div
        id="controls"
        className="opacity-0 p-5 absolute bottom-0 left-0 w-full transition-opacity duration-300 ease-linear group-hover:opacity-100"
      >
        <div id="progress-bar" className="h-1 w-full bg-white cursor-pointer mb-4">
          <div id="progress-indicator" className="h-full w-0 bg-indigo-800 transition-all duration-750 ease-linear"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <button id="play" className="transition-all duration-100 ease-linear hover:scale-125">
                play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
