// import { Product } from "./ui/product";

import { Meal } from "./ui/home/meal";
import { OrderSummary } from "./ui/home/orderSummary";
import { SalesAnalytics } from "./ui/home/salesAnalytics";

export default function Home() {
  return (
    <main className="p-8 flex gap-12">
      <div className="basis-2/3">
        <SalesAnalytics />
        <div>
          <h2 className="font-bold">Menu Items</h2>
          <Meal />
        </div>
      </div>
      <div className="basis-1/4 max-h-[calc(100vh-150px)]">
        <OrderSummary />
      </div>
    </main>
  );
}
