import Image from "next/image";
import VideoPlayer from "../components/VideoPlayer";
import ISearchParams from "@/interfaces/ISearchParams";

export default function Home({ searchParams }: ISearchParams) {
 
  const dynamicString = searchParams.break;

  const timestampInfo = [
    { timestamp: 5, title: "Static top drill", description: "Get a feel for the optimal wrist position at Top of your swing" },
    { timestamp: 14, title: "Dynamic top drill", description: "Dynamically tain your wrist position at Top" },
    { timestamp: 24, title: "Top full swing challenge", description: "Train your maximum power swing" },
  ];

  return (
    <div className="grid p-16 grid-cols-1 gap-48 md:max-w-screen-xl mx-auto">
      {/* <div className="flex flex-col items-center md:justify-between md:flex-row"> */}
      <div className="max-w-xs mx-auto gap-8 w-full place-items-center grid grid-cols-1 md:grid-cols-2 md:max-w-screen-xl">
        <div className="grid grid-cols-1 gap-12">
          <div className="text-2xl font-medium md:text-3xl">
            We have put together a swing improvement solution to help you <p className="text-blue-500">{dynamicString}</p>{" "}
          </div>
          <div>
            <div className="text-2xl font-normal">Pack Includes:</div>
            <hr className="h-px my-4 bg-gray-300 border-0" />
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
      <div>
        <div>
          <div className="text-font-normal mb-6 text-3xl font-medium text-blue-500 md:text-4xl md:mb-14">
            <h2>The best solution for you: Impact Training Program</h2>
          </div>
          <hr className="h-px bg-gray-300 border-0" />
        </div>
        <div className="flex flex-row justify-evenly mt-10">
          <div className="flex justify-center items-center">
            <VideoPlayer src={"/videos/impact_drill.mp4"} informativeTimestamps={timestampInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
