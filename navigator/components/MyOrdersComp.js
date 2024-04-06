import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const MyOrdersComp = () => {
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
            <View style={styles.arrowCont}>
                <Image
                    style={[styles.arrow]}
                    source={require("../assets/arrow.png")}
                />
            </View>
        </View>
    )

}

export default MyOrdersComp;

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
        // backgroundColor: 'red'
    },
    prTitle: {
        flex: 4,
        // backgroundColor: 'green'
    },
    arrowCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: 'blue'
    },
    arrow: {
        height: '40%',
        width: '40%'
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
    }

});