import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getMeals";
import { MealStorageDTO } from "./MealStorageDTO";

export async function removeMeal(mealId: string) {
  try {
    const storedMeals = await getAllMeals();

    const newStoredMeals = storedMeals.filter(
      (meal: MealStorageDTO) => meal.id !== mealId
    );

    const updateStorage = JSON.stringify(newStoredMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, updateStorage);
  } catch (error) {
    console.log("****erro mealAds.ts", error);
  }
}
