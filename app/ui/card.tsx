import { CiCirclePlus } from "react-icons/ci";
import Image from "next/image";
import { MealInterface } from "../lib/definitions";

export const Card = ({ name, price, image }: MealInterface) => {
  return (
    <div className="p-4 rounded-xl bg-white">
      <div className="relative min-h-40">
        <Image
          src={`${image}.avif`}
          fill
          alt="meal"
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex justify-between items-center my-4">
        <span className="font-bold">{name}</span>
        <span>{price}rs</span>
      </div>
      <button className="w-full p-2 rounded-full  border-blue border flex justify-center">
        <div className="flex gap-2 justify-between items-center">
          <span className="text-blue text-sm font-bold">Add Item</span>
          <CiCirclePlus className="text-blue" />
        </div>
      </button>
    </div>
  );
};
