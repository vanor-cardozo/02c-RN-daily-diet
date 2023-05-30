import {
  ButtonContainer,
  Container,
  Illustration,
  SubTitle,
  SubTitleBold,
  Title,
} from "./styles";

import dietIllustration from "../../assets/diet-Illustration.png";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function DietFeedback() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Title>Continue assim!</Title>
      <SubTitle>
        Você continua <SubTitleBold>dentro da dieta</SubTitleBold>. Muito bem!
      </SubTitle>
      <Illustration source={dietIllustration} />
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
