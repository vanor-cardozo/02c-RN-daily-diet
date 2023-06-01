import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DietFeedback } from "@screens/DietFeedback";
import { Home } from "@screens/Home";
import { MealDetail } from "@screens/MealDetail";
import { NewMeal } from "@screens/NewMeal";
import { NoDietFeedback } from "@screens/NoDietFeedback";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="dietFeedback" component={DietFeedback} />
      <Screen name="noDietFeedback" component={NoDietFeedback} />
      <Screen name="mealDetail" component={MealDetail} />
    </Navigator>
  );
}
