import { AiOutlineCheckCircle, AiOutlineTrophy } from "react-icons/ai";

export const SalesAnalytics = () => {
  return (
    <section className="w-full">
      <h2>Sales Analytic</h2>
      <section className="flex gap-8 py-4">
        <div className="bg-white rounded-xl px-4 pt-5 pb-3 flex-1 ">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-1 items-center">
              <AiOutlineTrophy className="text-blue font-medium" />
              <span className="text-sm">#219022</span>
            </div>
            <span className="text-sm text-black01">4 items</span>
          </div>
          <div className="bg-green px-3 py-2 rounded-2xl flex justify-between items-center">
            <span className=" text-xs text-white font-medium ">
              Ready to serve
            </span>
            <AiOutlineCheckCircle className="text-white" />
          </div>
        </div>
        <div className="bg-white rounded-xl px-4 pt-5 pb-3 flex-1 ">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-1 items-center">
              <AiOutlineTrophy className="text-blue font-medium" />
              <span className="text-sm">#219021</span>
            </div>
            <span className="text-sm  text-black01">3 items</span>
          </div>
          <div className="bg-orange px-3 py-2 rounded-2xl flex justify-between items-center">
            <span className=" text-xs text-white font-medium ">
              In Progress
            </span>
            <AiOutlineCheckCircle className="text-white" />
          </div>
        </div>
        <div className="bg-white rounded-xl px-4 pt-5 pb-3 flex-1 ">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-1 items-center">
              <AiOutlineTrophy className="text-blue font-medium" />
              <span className="text-sm">#219020</span>
            </div>
            <span className="text-sm  text-black01">2 items</span>
          </div>
          <div className="bg-orange px-3 py-2 rounded-2xl flex justify-between items-center">
            <span className=" text-xs text-white font-medium ">
              In Progress
            </span>
            <AiOutlineCheckCircle className="text-white" />
          </div>
        </div>
      </section>
    </section>
  );
};
