import { useNavigation } from "@react-navigation/native";
import {
  ButtonContainer,
  Container,
  DietSummaryStyleProps,
  Icon,
  SubTitle,
  Title,
} from "./styles";

type Props = {
  title: string;
  subtitle: string;
  color: DietSummaryStyleProps;
};

export function DietSummaryHeader({ title, subtitle, color }: Props) {
  const { navigate } = useNavigation();
  return (
    <Container>
      <ButtonContainer onPress={() => navigate("home")}>
        <Icon type={color} />
      </ButtonContainer>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
