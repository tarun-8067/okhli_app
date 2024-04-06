import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";
import TitleBar from "../components/TitleBar";
import Navbar from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";

const Itemspecs = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TitleBar title="Item Name" />
            <ScrollView style={styles.container}>
                <View style={styles.imageCont}>
                    <Image
                        style={[styles.prodImage]}
                        source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
                    />
                </View>
                <View style={styles.prDetailCont}>
                    <View style={styles.prNameCont}>
                        <View style={styles.prName}>
                            <Text style={styles.pText}>Gain Powder</Text>
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
                    <View style={styles.cost}>

                        <Text style={styles.costText}>200gm, 2000Rs</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailText}>Gain your weight efficiently using our ayurvedic weight gain powder . See results in  15 days only, 100% guarantee.</Text>
                    </View>

                </View>
                <View style={styles.orgExpCont}>
                    <View style={styles.organic}>

                    </View>
                    <View style={styles.expire}>

                    </View>

                </View>
                <View style={styles.ratingCont}>
                </View>
                <View style={styles.buttonCont}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Checkout') }} style={styles.button}>
                        <Text style={styles.textStyle}>Buy now</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.fixed}>

                </View>

            </ScrollView>
            <Navbar />
        </View>
    )
};

export default Itemspecs;

const styles = StyleSheet.create({
    textStyle: {
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        fontFamily: FontFamily.body16Bold,
        fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: '60%',
        backgroundColor: '#23A449',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fixed: {
        height: 200
    },
    container: {
        top: '10%',
        marginBottom: '20%'
    },
    prodImage: {
        height: '50%',
        width: '40%'
    },
    imageCont: {
        flex: 1,
        height: 300,
        borderBottomRightRadius: 190,
        borderBottomLeftRadius: 190,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F5F7'
    },
    prDetailCont: {
        flex: 1,
        height: 250,
        backgroundColor: 'white'
    },
    orgExpCont: {
        flex: 1,
        height: 120,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    ratingCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
    },
    buttonCont: {
        flex: 1,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center'
    },
    prNameCont: {
        flex: 1,
        flexDirection: 'row',
    },
    cost: {
        flex: 1,
    },
    details: {
        flex: 2,
        alignItems: 'center'
    },
    prName: {
        flex: 1,
        justifyContent: 'center'
    },
    plusMinusCont: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        left: '10%'
    },
    minus: {
        height: '30%',
        width: '20%',
        left: '30%',
        // backgroundColor: 'yellow'
    },
    text: {
        fontSize: 20,
        fontWeight: '800',
        left: '35%',
        color: 'black',
        // backgroundColor: 'green'
    },
    plus: {
        height: '26%',
        width: '16%',
        left: '40%'
        // backgroundColor: 'green'
    },
    costText: {
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold',
        left: '5%'
    },
    detailText: {
        fontSize: 18,
        left: '1%'
    },
    organic: {
        height: '70%',
        width: '70%',
        flex: 1,
        backgroundColor: 'red',
    },
    expire: {
        flex: 1,
        backgroundColor: 'green',
        height: '70%',
        width: '70%'
    }

});