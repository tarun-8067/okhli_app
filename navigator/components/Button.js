import { View, Text, StyleSheet, Touchable } from 'react-native'
import React from 'react'
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { TouchableOpacity } from 'react-native-gesture-handler';
const Button = (props) => {
    return (
        <View style={styles.buttonCont}>
            <Text style={styles.textStyle}>Submit</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({

    textStyle: {
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        fontFamily: FontFamily.body16Bold,
        fontWeight: 'bold',
    },
});