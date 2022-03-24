import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from "react-native";
import Form from "./src/components/Form";
import colors from "./src/utils/colors";
import Footer from "./src/components/Footer";


export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);

  const calculate = () => {
    console.log("capital ->", capital)
    console.log("interes ->", interest)
    console.log("moths ->", months)
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.background} />

        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />

      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <Footer calculate={calculate}/>



    </>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    height: 290,
    alignItems: "center",
  },

  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 35,
  },

  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  }
});