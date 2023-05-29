import {
  ButtonContainer,
  Container,
  Icon,
  DietSummaryStyleProps,
  SubTitle,
  Title,
} from "./styles";

type Props = {
  color: DietSummaryStyleProps;
  title: string;
  onPress: () => void;
};

export function DietSummaryCard({ color, title, onPress }: Props) {
  return (
    <Container type={color}>
      <ButtonContainer onPress={onPress}>
        <Icon type={color} />
      </ButtonContainer>
      <Title>{title}</Title>
      <SubTitle> das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
