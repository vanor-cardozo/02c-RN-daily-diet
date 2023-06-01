import styled, { css } from "styled-components/native";

type Props = {
  isPressed: boolean;
};

export const FormContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InputsContainer = styled.View`
  flex-direction: column;
`;

export const InputLabel = styled.Text`
  margin-bottom: 6px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Input = styled.TextInput`
  margin-bottom: 24px;
  padding: 8px;

  min-height: 50px;
  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.M}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ContainerInline = styled.View`
  flex-direction: row;
`;

export const ContainerInColumn = styled.View`
  width: 48%;
  margin-right: 4%;
  flex-direction: column;
`;

export const ButtonGreen = styled.TouchableOpacity<Props>`
  flex: 1;
  margin-right: 12px;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  height: 50px;

  ${({ theme, isPressed }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_100};

    border-radius: 6px;
    border: 1px solid
      ${isPressed ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_600};
    background-color: ${isPressed
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.GRAY_600};
  `}
`;

export const ButtonRed = styled.TouchableOpacity<Props>`
  flex: 1;

  flex-direction: row;

  justify-content: center;
  align-items: center;

  height: 50px;

  ${({ theme, isPressed }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_100};

    border-radius: 6px;
    border: 1px solid
      ${isPressed ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_600};
    background-color: ${isPressed
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};
  `}
`;

export const Text = styled.Text`
  margin-left: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
