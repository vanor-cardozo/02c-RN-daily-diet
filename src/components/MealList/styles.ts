import styled, { css } from "styled-components/native";

type Props = {
  diet: boolean;
};

export const ListHeader = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-top: 16px
`;

export const ListItem = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 14px 16px 14px 12px;
  margin-top: 3px;
  margin-bottom: 3px;
  align-items: center;

  border: solid 1px ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const TimeText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  padding-right: 12px
`;

export const MealContainer = styled.View`
  width: 85%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MealText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.M}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const MealStatus = styled.View<Props>`
  width: 14px;
  height: 14px;

  background-color: ${({ theme, diet }) =>
    diet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 50px;
`;
