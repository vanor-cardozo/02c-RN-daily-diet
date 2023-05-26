import theme from "@theme/index";
import { Container, ButtonText, IconStyleProps } from "./styles";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

export type IconName = "plus" | "pencil" | "trash";

type Props = {
  type: IconStyleProps;
  iconName?: IconName;
};

export function ButtonIcon({ type, iconName }: Props) {
  let IconComponent = null;
  let iconColor = "";

  if (iconName) {
    switch (iconName) {
      case "plus":
        IconComponent = Plus;
        break;
      case "pencil":
        IconComponent = PencilSimpleLine;
        break;
      case "trash":
        IconComponent = Trash;
        break;
    }
    iconColor = type === "DARK" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100;
  }

  return (
    <Container type={type}>
      {IconComponent && <IconComponent size={18} color={iconColor} />}
      <ButtonText type={type}>Nova refeição</ButtonText>
    </Container>
  );
}
