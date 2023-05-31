import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getMeals";
import { MealStorageDTO } from "./MealStorageDTO";

export async function addMeal(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await getAllMeals();

    const mealAlreadyExists = storedMeals.includes(newMeal);

    if (mealAlreadyExists) {
      throw new Error("Refeição já cadastrada!");
    }

    const storage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    console.log("****erro mealAds.ts", error);
  }
}
