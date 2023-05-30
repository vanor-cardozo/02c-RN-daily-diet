import {
  ButtonContainer,
  Container,
  Illustration,
  SubTitle,
  SubTitleBold,
  Title,
} from "./styles";

import noDietIllustration from "../../assets/no-diet-Illustration.png";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function NoDietFeedback() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Title>Que pena!</Title>
      <SubTitle>
        Você <SubTitleBold>saiu da dieta</SubTitleBold> dessa vez, mas continue
        se esforçando e não desista!
      </SubTitle>

      <Illustration source={noDietIllustration} />

      <ButtonContainer>
        <Button
          type="DARK"
          buttonName="Ir para a página inicial"
          onPress={() => navigate("home")}
        />
      </ButtonContainer>
    </Container>
  );
}
