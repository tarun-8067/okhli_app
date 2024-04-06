import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputFieldComp = (props) => {

    return (
        <View style={styles.profile}>
            <Text style={styles.inputTiltle}>{props.inputTitle}</Text>
            <View style={styles.inputCont}>
                <TextInput
                    style={styles.input}
                    placeholder={props.place}
                    value={props.value}
                    onChangeText={props.onChangeText}
                />
            </View>

        </View>
    )
}

export default InputFieldComp;

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    inputCont: {
        justifyContent: 'center',
        height: "60%",
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: .7,
        borderColor: 'grey',
        alignSelf: 'center'

    },
    input: {
        fontSize: 18,
        left: '10%'
    },
    inputTiltle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        left: '7%'
    }
});