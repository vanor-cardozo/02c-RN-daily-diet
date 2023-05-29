import styled, { css } from "styled-components/native";

export type CardColorProps = "GREEN" | "RED" | "GRAY";

type Props = {
  color: CardColorProps;
};

export const Container = styled.View<Props>`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  margin: 6px;

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

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;
