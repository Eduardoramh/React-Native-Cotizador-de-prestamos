import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import colors from "./src/utils/colors";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.SafeArea}>
        <Text>Formulario HEAD</Text>
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  }
});