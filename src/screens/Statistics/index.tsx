import { DietSummaryHeader } from "@components/DietSummaryHeader";
import { Row, Container, StatisticsContainer, Text } from "./styles";
import { InfoCard } from "@components/InfoCard";

export function Statistics() {
  return (
    <Container color="GREEN">
      <DietSummaryHeader
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        color="GREEN"
      />
      <StatisticsContainer>
        <Text> Estatísticas gerais</Text>

        <Row>
          <InfoCard
            title="22"
            subtitle="melhor sequência de pratos dentro da dieta"
          />
        </Row>

        <Row>
          <InfoCard title="109" subtitle="refeições registradas" />
        </Row>

        <Row>
          <InfoCard
            title="99"
            subtitle="refeições dentro da dieta"
            color="GREEN"
          />

          <InfoCard title="10" subtitle="refeições fora da dieta" color="RED" />
        </Row>
      </StatisticsContainer>
    </Container>
  );
}
