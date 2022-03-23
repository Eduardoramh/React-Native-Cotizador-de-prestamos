import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';

export default function Form() {
    return (
        <View style={styles.viewForm}>

            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Cantidad a pedir"
                    placeholderTextColor="#000"
                    keyboardType="numeric"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Interes %"
                    placeholderTextColor="#000"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]}
                />

            </View>

            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        marginTop: 90,
        // bottom: 1,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center",
        marginLeft: 30,
        marginRight: 30,
    },
    viewInputs: {
        flexDirection: "row",
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        paddingHorizontal: 20,
        color: "#000",
        fontSize: 13,
    },
    inputPercentage: {
        width: "40%",
        marginLeft: 5,
    },
});