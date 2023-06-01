import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function getMealById(mealId: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals = storage ? JSON.parse(storage) : [];

    const mealFound = meals.filter(
      (meal: MealStorageDTO) => meal.id === mealId
    );

    return mealFound;
  } catch (error) {
    console.log("****erro mealAds.ts", error);
  }
}
