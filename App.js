import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TextInput } from "react-native";
import Form from "./src/components/Form";
import colors from "./src/utils/colors";
import RNPickerSelect from 'react-native-picker-select';


export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.fondo}>
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        </View>
        <Form />

      </SafeAreaView>

      {/* <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View> */}



    </>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    // backgroundColor: colors.PRIMARY_COLOR,
    // height: 200,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // alignItems: "center",
    height: 1000,
    
  },

  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },

  fondo:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  }
});