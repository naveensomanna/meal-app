// import { Product } from "./ui/product";

import { Meal } from "./ui/home/meal";
import { SalesAnalytics } from "./ui/home/salesAnalytics";

export default function Home() {
  return (
    <main className="p-8 flex ">
      <div className="basis-2/3">
        <SalesAnalytics />
        <div>
          <h2 className="font-bold">Menu Items</h2>
          <Meal />
        </div>
      </div>
      <div className="basis-1/4"></div>
    </main>
  );
}
