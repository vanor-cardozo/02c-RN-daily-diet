import { Header } from "@components/Header";
import { Container, Text } from "./styles";
import { DietSummaryCard } from "@components/DietSummaryCard";
import { ButtonIcon } from "@components/ButtonIcon";

export function Home() {
  return (
    <Container>
      <Header />

      <DietSummaryCard color="GREEN" title="70,80%" />

      <Text>Refeições</Text>
      <ButtonIcon type="DARK" iconName="pencil" />
    </Container>
  );
}
