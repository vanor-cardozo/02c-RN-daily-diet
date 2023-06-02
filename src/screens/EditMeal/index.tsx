import { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";

import { ScreenBackGround } from "@components/ScreenBackground";

import {
  ContainerInline,
  ContainerInColumn,
  FormContainer,
  Input,
  InputLabel,
  ButtonGreen,
  ButtonRed,
  Text,
  InputsContainer,
} from "./styles";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import theme from "@theme/index";
import { Circle } from "phosphor-react-native";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

import { getMealById } from "@storage/meal/getMealById";
import { updateMealStorage } from "@storage/meal/updateMealStorage";
import { Loading } from "@components/Loading";
import { AlertModal } from "@components/AlertModal";

type RouteParams = {
  mealId: string;
};

export function EditMeal() {
  const [isLoading, setIsLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealDiet, setMealDiet] = useState<boolean | undefined>(undefined);

  const [buttonGreenPressed, setButtonGreenPressed] = useState(false);
  const [buttonRedPressed, setButtonRedPressed] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { navigate } = useNavigation();
  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  async function getStoredMeal() {
    try {
      const stored = await getMealById(mealId);
      const mealStored = stored[0];
      setMealName(mealStored.name);
      setMealDescription(mealStored.description);
      setSelectedDate(new Date(mealStored.date));
      if (mealStored.diet) {
        handleGreenButton();
      } else {
        handleRedButton();
      }
    } catch (error) {
      console.log("erro ao carregar storage", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getStoredMeal();
  }, []);

  function handleDateChange(
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) {
    setShowDatePicker(false);
    if (event.type === "set" && date) {
      setSelectedDate(date);
    }
  }

  function handleTimeChange(
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) {
    setShowTimePicker(false);
    if (event.type === "set" && date) {
      setSelectedDate(date);
    }
  }

  async function handleSubmit() {
    const meal = {
      id: mealId,
      date: selectedDate,
      name: mealName.trimStart(),
      description: mealDescription.trimStart(),
      diet: mealDiet,
    };
    const areAllFieldsFilled = Object.values(meal).every(
      (value) => value !== undefined && value !== ""
    );

    if (areAllFieldsFilled) {
      await updateMealStorage(meal);
      navigate("home");
    } else {
      setIsModalVisible(true);
    }
  }

  function handleGreenButton() {
    setButtonGreenPressed(true);
    setButtonRedPressed(false);
    setMealDiet(true);
  }

  function handleRedButton() {
    setButtonRedPressed(true);
    setButtonGreenPressed(false);
    setMealDiet(false);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return isLoading ? (
    <Loading />
  ) : (
    <ScreenBackGround title="Editar refeição">
      <AlertModal
        isVisible={isModalVisible}
        message="Verifique se todos os campos estão preenchidos/selecionados!"
        cancelTextButton="ok"
        onCancel={handleCloseModal}
      />
      <FormContainer>
        <InputsContainer>
          <InputLabel>Nome</InputLabel>
          <Input value={mealName} onChangeText={setMealName} />

          <InputLabel>Descrição</InputLabel>
          <Input
            multiline
            textAlignVertical="top"
            numberOfLines={5}
            value={mealDescription}
            onChangeText={setMealDescription}
          />

          <ContainerInline>
            <ContainerInColumn>
              <InputLabel>Data</InputLabel>
              <TouchableOpacity onPressIn={() => setShowDatePicker(true)}>
                <Input
                  value={selectedDate.toLocaleDateString()}
                  editable={false}
                />
              </TouchableOpacity>

              {showDatePicker && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="calendar"
                  onChange={handleDateChange}
                />
              )}
            </ContainerInColumn>

            <ContainerInColumn>
              <InputLabel>Hora</InputLabel>
              <TouchableOpacity onPressIn={() => setShowTimePicker(true)}>
                <Input
                  value={selectedDate.toLocaleTimeString().slice(0, 5)}
                  editable={false}
                />
              </TouchableOpacity>

              {showTimePicker && (
                <DateTimePicker
                  value={selectedDate}
                  mode="time"
                  display="clock"
                  onChange={handleTimeChange}
                />
              )}
            </ContainerInColumn>
          </ContainerInline>

          <ContainerInline>
            <ButtonGreen
              isPressed={buttonGreenPressed}
              onPress={handleGreenButton}
            >
              <Circle size={10} weight="fill" color={theme.COLORS.GREEN_DARK} />
              <Text>Sim</Text>
            </ButtonGreen>

            <ButtonRed isPressed={buttonRedPressed} onPress={handleRedButton}>
              <Circle size={10} weight="fill" color={theme.COLORS.RED_DARK} />
              <Text>Não</Text>
            </ButtonRed>
          </ContainerInline>
        </InputsContainer>

        <Button
          type="DARK"
          buttonName="Salvar alterações"
          onPress={handleSubmit}
        />
      </FormContainer>
    </ScreenBackGround>
  );
}
