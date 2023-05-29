import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export type DietSummaryStyleProps = "GREEN" | "RED";

type Props = {
  color: DietSummaryStyleProps;
};

export const Text = styled.Text`
  text-align: center;
  margin-bottom: 12px;
  margin-top: 12px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
  `}
`;

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;

  ${({ theme, color }) => css`
    background-color: ${color === "GREEN"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`;

export const StatisticsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Row = styled.View`
  flex-direction: row;
`;
