import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import MyOrdersComp from "../components/MyOrdersComp";
import TitleBar from "../components/TitleBar";

const Orders = () => {
    return (
        <View style={{ flex: 1 }}>
            <TitleBar title="My Orders" />
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollerView}>
                <MyOrdersComp />
                <MyOrdersComp />
                <MyOrdersComp />
                <MyOrdersComp />
                <MyOrdersComp />
                <MyOrdersComp />
                <MyOrdersComp />
                <MyOrdersComp />
                <MyOrdersComp />
                <MyOrdersComp />
                <MyOrdersComp />
            </ScrollView>
            <Navbar />
        </View>
    )
};

export default Orders;

const styles = StyleSheet.create({
    scrollerView: {
        flex: 1,
        top: '10%',
    },
});