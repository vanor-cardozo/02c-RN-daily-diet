import { useEffect, useState } from "react";

import {
  Container,
  MealText,
  MealSubtitle,
  MealTitle,
  TagView,
  TagText,
  MealContainer,
  ButtonsContainer,
} from "./styles";

import { useRoute } from "@react-navigation/native";

import { getMealById } from "@storage/meal/getMealById";

import { ScreenBackGround } from "@components/ScreenBackground";
import { Loading } from "@components/Loading";

import { dateFormatter } from "@utils/dateFormatter";

import { Circle } from "phosphor-react-native";
import theme from "@theme/index";
import { Button } from "@components/Button";

type RouteParams = {
  mealId: string;
};

type mealStored = {
  id: string;
  date: string;
  name: string;
  description: string;
  diet: boolean;
};

export function MealDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState<mealStored>();

  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  async function getStoredMeal() {
    try {
      const stored = await getMealById(mealId);
      setMeal(stored[0]);
    } catch (error) {
      console.log("erro ao carregar storage", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getStoredMeal();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <ScreenBackGround title="Refeição" color={meal?.diet ? "GREEN" : "RED"}>
      <Container>
        {meal && (
          <>
            <MealContainer>
              <MealTitle>{meal.name}</MealTitle>

              <MealText>{meal.description}</MealText>

              <MealSubtitle>Data e hora</MealSubtitle>
              <MealText>{dateFormatter(meal.date)}</MealText>

              {meal.diet ? (
                <TagView>
                  <Circle
                    size={10}
                    weight="fill"
                    color={theme.COLORS.GREEN_DARK}
                  />
                  <TagText>dentro da dieta</TagText>
                </TagView>
              ) : (
                <TagView>
                  <Circle
                    size={10}
                    weight="fill"
                    color={theme.COLORS.RED_DARK}
                  />
                  <TagText>fora da dieta</TagText>
                </TagView>
              )}
            </MealContainer>
            <ButtonsContainer>
              <Button
                type="DARK"
                iconName="pencil"
                buttonName="Editar refeição"
                onPress={() => console.log("editar refeição")}
              />
              <Button
                type="LIGHT"
                iconName="trash"
                buttonName="Excluir refeição"
                onPress={() => console.log("excluir refeição")}
              />
            </ButtonsContainer>
          </>
        )}
      </Container>
    </ScreenBackGround>
  );
}
