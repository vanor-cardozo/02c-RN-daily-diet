import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import { Loading } from "@components/Loading";
import { Home } from "@screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        {fontsLoaded ? <Home /> : <Loading />}
        <StatusBar style="auto" />
      </>
    </ThemeProvider>
  );
}
