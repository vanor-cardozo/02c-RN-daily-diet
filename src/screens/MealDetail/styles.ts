import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  justify-content: space-between;
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const MealContainer = styled.View`
  flex: 1;
`;

export const ButtonsContainer = styled.View``;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const MealText = styled.Text`
  margin-top: 10px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.M}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const MealSubtitle = styled.Text`
  margin-top: 10px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const TagView = styled.View`
  flex-direction: row;
  align-self: flex-start;
  justify-content: center;
  align-items: center;

  height: 34px;
  margin-top: 24px;
  padding: 2px 16px 2px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 50px;
`;

export const TagText = styled.Text`
  margin-left: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
