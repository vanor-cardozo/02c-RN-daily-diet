import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const MessageContainer = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Message = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 24px;
  justify-content: space-evenly;
`;

export const ConfirmButton = styled(TouchableOpacity)`
  width: 135px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
    border: solid 1px ${theme.COLORS.GRAY_200};
  `}

  border-radius: 6px;
`;

export const ConfirmButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.WHITE};
  `}
`;

export const CancelButton = styled(TouchableOpacity)`
  width: 135px;
  height: 50px;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border: solid 1px ${theme.COLORS.GRAY_100};
  `}

  border-radius: 6px;
`;

export const CancelButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
