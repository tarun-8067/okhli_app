import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import TitleBar from '../components/TitleBar';
import AddressComp from '../components/AddressComp';

const Checkout = () => {
    return (
        <View style={{ flex: 1 }}>
            <TitleBar title="Checkout" />
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.checkoutView}>
                <View style={styles.addressCont}>
                    <AddressComp />
                </View>
                <View style={styles.cartItemsCont}>
                    <View style={styles.imageCont}>
                        <Image
                            style={[styles.bestSellImage]}
                            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
                        />
                    </View>
                </View>
                <View style={styles.priceCont}></View>
                <View style={styles.codCont}></View>
                <View style={styles.paynowCont}></View>
            </ScrollView>

        </View>
    )
}

export default Checkout
const styles = StyleSheet.create({
    checkoutView: {
        flex: 1,
        top: '10%',
        backgroundColor: 'red'
    },
    addressCont: {
        flex: 1,
        height: 150,
        borderBottomWidth: .5,
        backgroundColor: 'blue'
    },
    cartItemsCont: {
        flex: 2,
        height: 200,
        borderBottomWidth: .5,
        backgroundColor: 'pink'
    },
    priceCont: {
        flex: 2,
        height: 200,
        borderBottomWidth: .5,
        backgroundColor: 'green'
    },
    codCont: {
        flex: 1,
        height: 100,
        borderBottomWidth: .5,
        backgroundColor: 'grey'
    },
    paynowCont: {
        flex: 1,
        height: 100,

        borderBottomWidth: .5,
        backgroundColor: 'skyblue'
    },
});
