import { CardColorProps, Container, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  color?: CardColorProps;
};

export function InfoCard({ title, subtitle, color = "GRAY" }: Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
