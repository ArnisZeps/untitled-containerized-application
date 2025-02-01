import { ArrowRight } from "lucide-react";

export default function StartNowButton() {
  return (
    <button className="bg-blue-500 text-xs hover:bg-blue-600 text-white flex items-center gap-2 px-5 py-3 rounded-3xl font-medium">
      <p>Start Now</p>
      <ArrowRight size={20} />
    </button>
  );
}
