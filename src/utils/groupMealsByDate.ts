import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

export function groupMealsByDate(meals: MealStorageDTO[]): any[] {
  const groupedMeals: { [date: string]: MealStorageDTO[] } = {};

  for (const meal of meals) {
    const date = new Date(meal.date);
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}.${String(
      date.getMonth() + 1
    ).padStart(2, "0")}.${String(date.getFullYear()).slice(-2)}`;

    if (!groupedMeals[formattedDate]) {
      groupedMeals[formattedDate] = [];
    }

    groupedMeals[formattedDate].push(meal);
  }

  const result = Object.keys(groupedMeals).map((date) => ({
    date,
    meal: groupedMeals[date],
  }));

  return result;
}
