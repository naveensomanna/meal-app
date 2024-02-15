import { PlaceOrder } from "../buttons";
import { EmptyIllustration } from "../emptyIllustration";

export const OrderSummary = () => {
  return (
    <div className="bg-white rounded-xl  h-full">
      <div className="p-4  border-b border-b-[#ededed]">
        <h4 className="font-bold">Order's summary</h4>
      </div>
      <div className="min-h-[calc(100%-150px)] flex justify-center items-center">
        <div>
          <EmptyIllustration info="No Orders Found" />
        </div>
      </div>
      <div className="p-4">
        <PlaceOrder />
      </div>
    </div>
  );
};
