import styled from "styled-components";
import theme from "@theme/index";
import { DietSummaryStyleProps } from "@components/DietSummaryCard/styles";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}

declare module "phosphor-react-native" {
  interface IconProps {
    type?: DietSummaryStyleProps;
  }
}
