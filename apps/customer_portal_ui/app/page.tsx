import Image
 from "next/image";
export default function Home() {
  return (
    <div className="grid p-16 grid-cols-1 gap-16">
      <div className="flex flex-row justify-evenly">
        <div>
          <div>
            We have put together a swing improvement solution to help you break 80
          </div>
          <div>
            <span>pack includes:</span>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-2">
          <Image src="/improvement_graph.png" alt="improvement_graph" width={565} height={439} />
          </div>
          <div className="col-span-1">
          <Image src="/improvement_progress_graph.png" alt="improvement_progress_graph" width={275} height={275} />
          </div>
          <div className="col-span-1">
          <Image src="/frame_single.png" alt="frame_single" width={275} height={275} />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <div>coachin</div> 
      </div>
    </div>
  );
}
