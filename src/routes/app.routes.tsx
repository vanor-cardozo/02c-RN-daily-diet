import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DietFeedback } from "@screens/DietFeedback";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NoDietFeedback } from "@screens/NoDietFeedback";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="meal" component={Meal} />
      <Screen name="dietFeedback" component={DietFeedback} />
      <Screen name="noDietFeedback" component={NoDietFeedback} />
    </Navigator>
  );
}
