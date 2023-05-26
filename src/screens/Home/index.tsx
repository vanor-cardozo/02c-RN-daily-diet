import { Header } from "@components/Header";
import { Container } from "./styles";
import { DietSummaryCard } from "@components/DietSummaryCard";

export function Home() {
  return (
    <Container>
      <Header />
      <DietSummaryCard color="GREEN" title="70,80%" />
    </Container>
  );
}
