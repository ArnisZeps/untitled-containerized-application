import Image from "next/image";
export default function Home() {
  return (
    <div className="grid p-16 grid-cols-1 gap-16">
      <div className="flex flex-col items-center md:justify-evenly md:flex-row">
        <div className="mb-8">
          <div>We have put together a swing improvement solution to help you break 80</div>
          <div>
            <span>pack includes:</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2">
            <Image className="w-[328px] md:w-[565px] h-auto" src="/improvement_graph.png" alt="improvement_graph" width={565} height={565} />
          </div>
          <div className="col-span-1">
            <Image className="w-[328px] md:w-[275px] h-auto" src="/improvement_progress_graph.png" alt="improvement_progress_graph" width={275} height={275} />
          </div>
          <div className="col-span-1">
            <Image className="w-[328px] md:w-[275px] h-auto" src="/frame_single.png" alt="frame_single" width={275} height={275} />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <div>coachin</div>
      </div>
    </div>
  );
}
