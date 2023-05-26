import { Header } from "@components/Header";
import { DietSummaryCard } from "@components/DietSummaryCard";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Text } from "./styles";
import { MealList } from "@components/MealList";

export function Home() {
  return (
    <Container>
      <Header />

      <DietSummaryCard color="GREEN" title="70,80%" />

      <Text>Refeições</Text>
      <ButtonIcon type="DARK" iconName="plus" />

      <MealList />
    </Container>
  );
}
