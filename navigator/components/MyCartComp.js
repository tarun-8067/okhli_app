import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyCartComp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.orderContainer}>
            <View style={styles.imageCont}>
                <Image
                    style={[styles.bestSellImage]}
                    source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
                />
            </View>
            <View style={styles.prTitle}>
                <Text style={styles.prTitleText}>
                    Bell Pepper Red
                </Text>
                <Text style={styles.prCostText}>
                    1Kg, 30 Rs
                </Text>

            </View>
            <View style={styles.plusMinusCont}>
                <Image
                    style={[styles.minus]}
                    source={require("../assets/minus.png")}
                />
                <Text style={styles.text}>1</Text>
                <Image
                    style={[styles.plus]}
                    source={require("../assets/plus.png")}
                />
            </View>
        </View>
    )

}

export default MyCartComp;

const styles = StyleSheet.create({
    orderContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        width: '100%',
        backgroundColor: '#F3F5F7',
        borderBottomWidth: 1.2,
    },
    imageCont: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    prTitle: {
        flex: 3,
    },
    plusMinusCont: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'row'
    },
    minus: {
        height: '20%',
        width: '20%',
        left: '20%'
    },
    bestSellImage: {
        height: '70%',
        width: '70%'
    },
    prTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        top: '15%',
        left: '2%'
    },
    prCostText: {
        color: 'red',
        fontSize: 16,
        fontWeight: '800',
        top: '30%',
        left: '2%'
    },
    text: {
        fontSize: 20,
        fontWeight: '800',
        left: '40%',
        color: 'black'

    },
    plus: {
        height: '20%',
        width: '20%',
        left: '60%'
    }

});