import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 40px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserAvatar = styled.View`
  width: 40px;
  height: 40px;

  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;
