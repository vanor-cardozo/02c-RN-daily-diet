import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components";

export type IconStyleProps = "DARK" | "LIGHT";

type Props = {
  type: IconStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;
  flex-direction: row;
  margin-top: 6px;
  margin-bottom: 6px;
  justify-content: center;
  align-items: center;

  ${({ theme, type }) => css`
    background-color: ${type === "DARK"
      ? theme.COLORS.GRAY_200
      : theme.COLORS.WHITE};
    border: solid 1px
      ${type === "DARK" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_100};
  `}

  border-radius: 6px;
`;

export const ButtonText = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
    color: ${type === "DARK" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  `}
  margin-left: 12px
`;
