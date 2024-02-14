import { getAllMeals } from "@/app/lib/data";
import { Card } from "../card";
import { MealInterface } from "@/app/lib/definitions";

export const Meal = async () => {
  const result: any = await getAllMeals();
  return (
    <section className="py-4 grid grid-cols-3 gap-6">
      {result.map((meal: MealInterface) => (
        <Card key={meal.id} {...meal} />
      ))}
    </section>
  );
};
