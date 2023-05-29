import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { DietSummaryCard } from "@components/DietSummaryCard";
import { ButtonIcon } from "@components/ButtonIcon";
import { MealList } from "@components/MealList";

import { Container, Text } from "./styles";

export function Home() {
  const { navigate } = useNavigation();

  const handleButtonPress = () => {
    console.log("Button pressed, Nova refeição");
  };
  return (
    <Container>
      <Header />

      <DietSummaryCard
        color="GREEN"
        title="70,80%"
        onPress={() => navigate("statistics")}
      />

      <Text>Refeições</Text>
      <ButtonIcon
        type="DARK"
        iconName="plus"
        buttonName="Nova refeição"
        onPress={handleButtonPress}
      />

      <MealList />
    </Container>
  );
}
