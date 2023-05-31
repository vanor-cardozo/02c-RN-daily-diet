import { MealItemProps } from "@components/MealList";

function dietSequenceCounter(meals: MealItemProps[]): number {
  let actualSequence = 0;
  let maxSequence = 0;

  meals.forEach((meal) => {
    if (meal.diet) {
      actualSequence++;
      if (actualSequence > maxSequence) {
        maxSequence = actualSequence;
      }
    } else {
      actualSequence = 0;
    }
  });

  return maxSequence;
}

export function calculateMealsStats(meals: MealItemProps[]) {
  const totalMealsCounter = meals.length;

  const dietMeals = meals.filter((meal) => meal.diet);
  const dietMealsCounter = dietMeals.length;

  const noDietMealsCounter = totalMealsCounter - dietMealsCounter;

  const mealsDietPercentage = (
    (dietMealsCounter / totalMealsCounter) *
    100
  ).toFixed(2);

  const dietMealsMaxSequence = dietSequenceCounter(meals);

  const stats = {
    totalMealsCounter,
    dietMealsCounter,
    noDietMealsCounter,
    mealsDietPercentage,
    dietMealsMaxSequence,
  };

  return stats;
}
