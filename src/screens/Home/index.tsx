import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { DietSummaryCard } from "@components/DietSummaryCard";
import { Button } from "@components/Button";
import { MealList } from "@components/MealList";

import { Container, Text } from "./styles";

export function Home() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Header />

      <DietSummaryCard
        color="GREEN"
        title="70,80%"
        onPress={() => navigate("statistics")}
      />

      <Text>Refeições</Text>
      <Button
        type="DARK"
        iconName="plus"
        buttonName="Nova refeição"
        onPress={() => navigate("meal")}
      />

      <MealList />
    </Container>
  );
}
