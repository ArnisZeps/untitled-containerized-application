import Image from "next/image";
import VideoPlayer from "../components/VideoPlayer";

export default function Home() {
  return (
    <div className="grid p-16 grid-cols-1 gap-16 md:max-w-screen-xl mx-auto">
      {/* <div className="flex flex-col items-center md:justify-between md:flex-row"> */}
      <div className="max-w-xs mx-auto gap-8 w-full place-items-center grid grid-cols-1 md:grid-cols-2 md:max-w-screen-xl">
        <div className="grid grid-cols-1 gap-12">
          <div className="text-2xl font-medium md:text-3xl">We have put together a swing improvement solution to help you break 80</div>
          <div>
            <div className="text-2xl font-normal">Pack Includes:</div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="font-medium border-l-4 border-blue-500 pl-4 text-lg space-y-2">
              <p>Swing Analyzer - HackMotion Core</p>
              <p>Drills by coach Tyler Ferrel</p>
              <p>Game Improvement plan by HackMotion</p>
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2">
            <Image className="w-[328px] md:w-[565px] h-auto" src="/improvement_graph.png" alt="improvement_graph" width={565} height={565} />
          </div>
          <div className="col-span-1">
            <Image
              className="w-[328px] md:w-[275px] h-auto"
              src="/improvement_progress_graph.png"
              alt="improvement_progress_graph"
              width={275}
              height={275}
            />
          </div>
          <div className="col-span-1">
            <Image className="w-[328px] md:w-[275px] h-auto" src="/frame_single.png" alt="frame_single" width={275} height={275} />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
          <div className="flex justify-center items-center">
            <VideoPlayer src={"/videos/impact_drill.mp4"} informativeTimestamps={
              [
                { timestamp: 1, title: "Start", description: "a" },
                { timestamp: 10, title: "Impact", description: "b" },
                { timestamp: 20, title: "End", description: "c" },
              ]
            }/>
          </div>
      </div>
    </div>
  );
}
