import {
  AiOutlineVerified,
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineSetting,
  AiOutlinePoweroff,
} from "react-icons/ai";

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 bottom-0 bg-white w-12 px-4 py-3">
      <AiOutlineVerified className="text-blue" />
      <div className="flex flex-col justify-between	gap-4 h-full py-8">
        <div className="flex flex-col gap-6">
          <AiOutlineHome className="text-[#8192a7]" />
          <AiOutlineShop className="text-blue" />
        </div>
        <div className="flex flex-col gap-6">
          <AiOutlineSetting className="text-[#8192a7]" />
          <AiOutlinePoweroff className="text-[#ff6463]" />
        </div>
      </div>
    </aside>
  );
};
