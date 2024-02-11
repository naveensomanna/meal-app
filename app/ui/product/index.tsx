import { fetchCategories } from "./fetchCategories";

export const Product = async () => {
  const res: any = await fetchCategories();
  return <div></div>;
};
