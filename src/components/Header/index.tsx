import { Container, Logo, UserAvatar, UserImage } from "./styles";

import logoImg from "@assets/logo.png";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <UserAvatar>
        <UserImage
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=50",
          }}
        />
      </UserAvatar>
    </Container>
  );
}
