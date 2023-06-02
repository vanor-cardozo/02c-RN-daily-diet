import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.M}px;
  `}
`;

export const WelcomeContainer = styled.View`
  height: 70%;
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GREEN_DARK};
  `}
`;

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.M}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const WelcomeImage = styled.Image`
  width: 244px;
  height: 288px;

  object-fit: contain;
`;
