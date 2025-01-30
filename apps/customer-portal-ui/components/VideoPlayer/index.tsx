interface IVideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: IVideoPlayerProps) => {
  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-6">
        <video className="w-full relative cursor-pointer">
          <source src={src} />
          <script type="module" src="/scripts/videoPlayer.js" defer />
        </video>
      </div>
      <div className="col-span-1 mx-auto">
        <div id="progress-bar" className="relative h-full bg-white w-6 rounded-md">
          <div id="progress-indicator" className="origin-top  h-full bg-indigo-800 w-full rounded-md"></div>
        </div>
      </div>
      <div className="col-span-3">
          <p>Swing Analyzer - HackMotion Core</p>
          <p>Drills by coach Tyler Ferrel</p>
          <p>Game Improvement plan by HackMotion</p>
      </div>
      {/* <div id="progress-bar" className=" h-1 p-3 rotate-90 w-full bg-black cursor-pointer">
          <div id="progress-indicator" className="h-full w-0 bg-indigo-800 transition-all"></div>
        </div> */}
    </div>
  );
};

export default VideoPlayer;
