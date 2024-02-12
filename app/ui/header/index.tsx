export const Header = () => {
  return (
    <nav className="bg-white py-2 px-10 flex justify-between items-center">
      <h1>Ur MEAL</h1>
      <section className="flex justify-between items-center">
        <ul className="flex gap-4 ">
          <li className="text-black01 text-sm">Dine In</li>
          <li className="text-black01 text-sm">Take Away</li>
          <li className="text-black01 text-sm">Delivery</li>
          <li className="text-black01 text-sm">Cancel</li>
        </ul>
        <div className="">{/* <Auth /> */}</div>
      </section>
    </nav>
  );
};
