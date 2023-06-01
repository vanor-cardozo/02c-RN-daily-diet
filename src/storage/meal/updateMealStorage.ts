import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getMeals";
import { MealStorageDTO } from "./MealStorageDTO";

export async function updateMealStorage(meal: MealStorageDTO) {
  try {
    const storedMeals = await getAllMeals();
    const storedIndex = storedMeals.findIndex((item) => item.id === meal.id);

    if (storedIndex === -1) {
      throw new Error("Refeição não encontrada!");
    }

    const updatedMeal = {
      ...storedMeals[storedIndex],
      date: meal.date,
      name: meal.name,
      description: meal.description,
      diet: meal.diet,
    };

    storedMeals[storedIndex] = updatedMeal;

    const updateStorage = JSON.stringify(storedMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, updateStorage);
  } catch (error) {
    console.log("****erro mealAds.ts", error);
  }
}
