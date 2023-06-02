import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import {
  Container,
  SubTitle,
  Text,
  Title,
  WelcomeContainer,
  WelcomeImage,
} from "./styles";

import { Header } from "@components/Header";
import { DietSummaryCard } from "@components/DietSummaryCard";
import { Button } from "@components/Button";
import { Data, MealList } from "@components/MealList";
import { Loading } from "@components/Loading";

import { getAllMeals } from "@storage/meal/getMeals";

import { groupMealsByDate } from "@utils/groupMealsByDate";
import { calculateMealsStats } from "@utils/calculateMealsStats";
import { StatsProps } from "@screens/Statistics";

import welcomeImage from "@assets/welcome-illustration.png";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<Data>([]);
  const [mealsStats, setMealsStats] = useState<StatsProps>();

  const { navigate } = useNavigation();

  async function fetchMealsData() {
    try {
      setIsLoading(true);
      const data = await getAllMeals();
      const stats = calculateMealsStats(data);
      const dataFormatted = groupMealsByDate(data);
      setMealsStats(stats);
      setMeals(dataFormatted);
    } catch (error) {
      console.log("fetchMealsData", error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealsData();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />

          {meals.length === 0 ? (
            <WelcomeContainer>
              <Title>Bem vindo(a)!</Title>
              <SubTitle>
                Adicione uma nova refeição e acompanhe seu desempenho
              </SubTitle>
              <WelcomeImage source={welcomeImage} />
            </WelcomeContainer>
          ) : (
            <DietSummaryCard
              color={
                Number(mealsStats?.mealsDietPercentage) > 50 ? "GREEN" : "RED"
              }
              title={`${mealsStats?.mealsDietPercentage}%`}
              onPress={() => navigate("statistics")}
            />
          )}

          {meals.length !== 0 && <Text>Refeições</Text>}
          <Button
            type="DARK"
            iconName="plus"
            buttonName="Nova refeição"
            onPress={() => navigate("newMeal")}
          />

          <MealList DATA={meals} />
        </>
      )}
    </Container>
  );
}
