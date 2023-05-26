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
};

export function DietSummaryCard({ color, title }: Props) {
  return (
    <Container type={color}>
      <ButtonContainer>
        <Icon type={color} />
      </ButtonContainer>
      <Title>{title}</Title>
      <SubTitle> das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
