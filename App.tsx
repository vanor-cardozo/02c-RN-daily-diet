import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

import { StatusBar } from "expo-status-bar";

import { Routes } from "./src/routes";

import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar style="dark" backgroundColor="transparent" translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
      </>
    </ThemeProvider>
  );
}
