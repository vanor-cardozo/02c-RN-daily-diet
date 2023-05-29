import { TouchableOpacity } from "react-native";
import {
  Container,
  HeaderContainer,
  TitleContainer,
  Text,
  BgColors,
} from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { ReactNode } from "react";

type Props = {
  color?: BgColors;
  title: string;
  children: ReactNode;
};

export function ScreenBackGround({ color = "GRAY", title, children }: Props) {
  return (
    <Container color={color}>
      <HeaderContainer>
        <TouchableOpacity>
          <ArrowLeft />
        </TouchableOpacity>
        <TitleContainer>
          <Text>{title}</Text>
        </TitleContainer>
      </HeaderContainer>
      {children}
    </Container>
  );
}
