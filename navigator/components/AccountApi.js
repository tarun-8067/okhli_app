import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AccountApi = (props) => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={props.onPress} style={styles.link}>
            <View style={styles.icon}>
                <Image source={props.image} style={styles.imageStyle} />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}> {props.text}</Text>
            </View>
            <View style={styles.arrow}>
                <Image
                    style={styles.arrowIcon}
                    source={require("../assets/arrow.png")}
                />
            </View>
        </TouchableOpacity>
    )

}

export default AccountApi;

const styles = StyleSheet.create({
    imageStyle: {
        height: '33%',
        width: '22%'
    },
    link: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 0.5
    },
    icon: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 5,

        justifyContent: 'center',
    },
    arrow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    arrowIcon: {
        height: '40%',
        width: '40%'

    },
    image: {

    },
});