import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type BgColors = "GRAY" | "GREEN" | "RED";

type Props = {
  color: BgColors;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;

  ${({ theme, color }) => {
    let backgroundColor = "";

    switch (color) {
      case "GRAY":
        backgroundColor = theme.COLORS.GRAY_600;
        break;
      case "GREEN":
        backgroundColor = theme.COLORS.GREEN_LIGHT;
        break;
      case "RED":
        backgroundColor = theme.COLORS.RED_LIGHT;
        break;
    }
    return css`
      background-color: ${backgroundColor};
    `;
  }}
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
