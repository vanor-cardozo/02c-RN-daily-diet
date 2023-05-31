import { useEffect, useState } from "react";

import { Row, Container, StatisticsContainer, Text } from "./styles";

import { DietSummaryHeader } from "@components/DietSummaryHeader";
import { InfoCard } from "@components/InfoCard";

import { getAllMeals } from "@storage/meal/getMeals";

import { calculateMealsStats } from "@utils/calculateMealsStats";
import { Loading } from "@components/Loading";

export type StatsProps = {
  dietMealsCounter: number;
  dietMealsMaxSequence: number;
  mealsDietPercentage: string;
  noDietMealsCounter: number;
  totalMealsCounter: number;
};

export function Statistics() {
  const [isLoading, setIsLoading] = useState(true);
  const [mealsStats, setMealsStats] = useState<StatsProps>();

  async function fetchMealsData() {
    try {
      setIsLoading(true);
      const data = await getAllMeals();
      const stats = calculateMealsStats(data);
      setMealsStats(stats);
    } catch (error) {
      console.log("fetchMealsData", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMealsData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Container
      color={Number(mealsStats?.mealsDietPercentage) > 50 ? "GREEN" : "RED"}
    >
      <DietSummaryHeader
        title={`${mealsStats?.mealsDietPercentage}%`}
        subtitle="das refeições dentro da dieta"
        color={Number(mealsStats?.mealsDietPercentage) > 50 ? "GREEN" : "RED"}
      />
      <StatisticsContainer>
        <Text> Estatísticas gerais</Text>

        <Row>
          <InfoCard
            title={mealsStats?.dietMealsMaxSequence ?? 0}
            subtitle="melhor sequência de pratos dentro da dieta"
          />
        </Row>

        <Row>
          <InfoCard
            title={mealsStats?.totalMealsCounter ?? 0}
            subtitle="refeições registradas"
          />
        </Row>

        <Row>
          <InfoCard
            title={mealsStats?.dietMealsCounter ?? 0}
            subtitle="refeições dentro da dieta"
            color="GREEN"
          />

          <InfoCard
            title={mealsStats?.noDietMealsCounter ?? 0}
            subtitle="refeições fora da dieta"
            color="RED"
          />
        </Row>
      </StatisticsContainer>
    </Container>
  );
}
