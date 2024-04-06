import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddressComp = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.addressContainer}>
            <View style={styles.addressData}>
                <Text style={styles.customerName}>{props.name}</Text>
                <Text style={styles.addLine1}> {props.buildApart}</Text>
                <Text style={styles.addLine1}> {props.addLine1}</Text>
                <Text style={styles.addLine1}> {props.addLine2}</Text>
                <Text style={styles.addLine1}> {props.mobile}</Text>
                <Text style={styles.addLine1}> {props.state} -{props.pinCode}</Text>
            </View>
            <View style={styles.threeDot}>
                <Image
                    style={styles.threeDotImage}
                    source={require("../assets/threeDot.png")}
                />
            </View>
        </View >
    )

}

export default AddressComp;

const styles = StyleSheet.create({
    addressContainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F5F7',
        borderBottomWidth: 1,
        height: 150
    },
    addressData: {
        flex: 6,
        justifyContent: 'space-evenly',
        left: '5%'
    },
    threeDot: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    threeDotImage: {
        height: '20%',
        width: '30%'
    },
    customerName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    addLine1: {
        fontSize: 15,

    }

});