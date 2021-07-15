import 'react-native-gesture-handler';
import React from 'react';
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./.expo/components/Navigation/index";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";

// ******************** THEME ********************

const theme = {
  mainColor: "#293241",
  backgroundColor: "#e0fbfc",
  pink: "#f283a2",
  red: "red",
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

