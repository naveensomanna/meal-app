// import { Product } from "./ui/product";

import { SalesAnalytics } from "./ui/home/salesAnalytics";

export default function Home() {
  return (
    <main className="p-8 flex ">
      <div className="basis-2/3">
        <SalesAnalytics />
      </div>
      <div className="basis-1/4"></div>
    </main>
  );
}
