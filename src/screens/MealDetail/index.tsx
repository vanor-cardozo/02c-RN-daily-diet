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

import { useNavigation, useRoute } from "@react-navigation/native";

import { getMealById } from "@storage/meal/getMealById";

import { ScreenBackGround } from "@components/ScreenBackground";
import { Loading } from "@components/Loading";

import { dateFormatter } from "@utils/dateFormatter";

import { Circle } from "phosphor-react-native";
import theme from "@theme/index";
import { Button } from "@components/Button";
import { removeMeal } from "@storage/meal/removeMeal";
import { AlertModal } from "@components/AlertModal";

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
  const [isModalVisible, setModalVisible] = useState(false);

  const { navigate } = useNavigation();
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

  async function handleRemoveMeal() {
    try {
      await removeMeal(mealId);
    } catch (error) {
      console.log("Falha do excluir refeição", error);
    } finally {
      setModalVisible(false);
      navigate("home");
    }
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  function handleOpenModal() {
    setModalVisible(true);
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <AlertModal
        isVisible={isModalVisible}
        message="Deseja realmente excluir o registro da refeição?"
        confirmTextButton="Sim, excluir"
        cancelTextButton="Cancelar"
        onCancel={handleCloseModal}
        onConfirm={handleRemoveMeal}
      />

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
                  onPress={() => navigate("editMeal", { mealId: mealId })}
                />
                <Button
                  type="LIGHT"
                  iconName="trash"
                  buttonName="Excluir refeição"
                  onPress={() => handleOpenModal()}
                />
              </ButtonsContainer>
            </>
          )}
        </Container>
      </ScreenBackGround>
    </>
  );
}
