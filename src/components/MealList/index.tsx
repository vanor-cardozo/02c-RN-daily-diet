import React from "react";
import { SectionList, ListRenderItemInfo } from "react-native";
import {
  ListHeader,
  ListItem,
  MealContainer,
  MealStatus,
  MealText,
  TimeText,
} from "./styles";

type MealItemProps = {
  name: string;
  time: string;
  diet: boolean;
};

type SectionProps = {
  title: string;
  data: MealItemProps[];
};

const DATA = [
  {
    date: "26.05.23",
    meal: [
      { name: "X-tudo", time: "09:00", diet: false },
      { name: "Sanduíche", time: "14:30", diet: true },
      {
        name: "Salada com frango, Vitamina de banana com granola",
        time: "20:00",
        diet: true,
      },
    ],
  },
  {
    date: "25.05.23",
    meal: [
      { name: "Lasanha de berinjela", time: "12:20", diet: true },
      { name: "Churrasco", time: "19:30", diet: false },
    ],
  },
];

function renderItem({ item }: ListRenderItemInfo<MealItemProps>) {
  return (
    <ListItem>
      <TimeText>{item.time}</TimeText>
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

export function MealList() {
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
