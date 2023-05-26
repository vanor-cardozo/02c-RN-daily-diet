import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type DietSummaryStyleProps = "GREEN" | "RED";

type Props = {
  type: DietSummaryStyleProps;
};

export const Container = styled.View<Props>`
  width: 100%;
  height: 102px;
  margin-top: 32px;
  margin-bottom: 32px;

  ${({ theme, type }) => css`
    background-color: ${type === "GREEN"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}

  border-radius: 8px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
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

export const ButtonContainer = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-right: 20px;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 32,
  color: type === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
