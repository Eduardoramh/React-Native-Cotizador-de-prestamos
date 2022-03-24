import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from "react-native";
import Form from "./src/components/Form";
import colors from "./src/utils/colors";
import Footer from "./src/components/Footer";


export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  console.log(total);

  const calculate = () => {
    if (!capital) {
      console.log("Añade la cantidad que quieres solicitar");
    } else if (!interest) {
      console.log("Añade el interes del prestamo");
    } else if (!months) {
      console.log("Selecciona los meses a pagar");
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, - months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace(".",","),
        totalPayable: (fee * months).toFixed(2).replace(".",",") ,
      })
    }
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

      <Footer calculate={calculate} />



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