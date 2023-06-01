import React from "react";
import { useNavigation } from "@react-navigation/native";

import { SectionList, ListRenderItemInfo } from "react-native";
import {
  ListHeader,
  ListItem,
  MealContainer,
  MealStatus,
  MealText,
  TimeText,
} from "./styles";

import { timeFormatter } from "@utils/timeFormatter";

export type MealItemProps = {
  id: string;
  date: string;
  name: string;
  description: string;
  diet: boolean;
};

type SectionProps = {
  title: string;
  data: MealItemProps[];
};

type DataItem = {
  date: string;
  meal: MealItemProps[];
};

export type Data = DataItem[];

function renderItem({ item }: ListRenderItemInfo<MealItemProps>) {
  const { navigate } = useNavigation();
  return (
    <ListItem onPress={() => navigate("mealDetail", { mealId: item.id })}>
      <TimeText>{timeFormatter(item.date)}</TimeText>
      <MealContainer>
        <MealText numberOfLines={1}>{item.name}</MealText>
        <MealStatus diet={item.diet} />
      </MealContainer>
    </ListItem>
  );
}

function renderSectionHeader({ section }: { section: SectionProps }) {
  return <ListHeader>{section.title}</ListHeader>;
}

export function MealList({ DATA }: { DATA: Data }) {
  const sections: SectionProps[] = DATA.map((data) => ({
    title: data.date,
    data: data.meal,
  }));

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.name + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
}
