import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.logocont}>
                <Image style={styles.logo} resizeMode="cover" source={require("../assets/playstore-1.png")} />
            </View>
            <View style={styles.titleCont}>
                <Text style={styles.titleText}>Okhli - An Ethnic Stop For All Ayurvedic Needs</Text>
            </View>
            <View style={styles.buttonCont}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.buttonContainer}>

                    <Text style={styles.shopnow}>Shop now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imageCont}>
                <Image style={styles.introimage} source={require("../assets/introimage.png")} />
                <View style={styles.introtext}>
                    <Text style={styles.text1}>
                        Timeless Wellness
                    </Text>
                    <Text style={styles.text2}>
                        Ayurveda: Where traditions meets transformation
                    </Text>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logocont: {
        flex: 1,
        justifyContent: "center",
    },
    logo: {
        alignSelf: 'center',
    },
    titleCont: {
        flex: 1,
        justifyContent: "center",
    },
    titleText: {
        alignSelf: "center",
        fontFamily: FontFamily.body16Bold,
        fontSize: FontSize.heading28Bold_size,
        textAlign: "center",
        fontWeight: "700",
        color: 'black',
    },
    buttonCont: {
        flex: 1,
    },
    buttonContainer: {
        position: "absolute",
        width: "50%",
        height: "40%",
        backgroundColor: '#23AA49',
        alignSelf: 'center',
        borderRadius: 30,
        top: '30%',
        justifyContent: "center",
    },
    shopnow: {
        position: "absolute",
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        fontFamily: FontFamily.body16Bold,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    imageCont: {
        flex: 2,
        backgroundColor: '#23AA49',
    },
    introimage: {
        width: '100%',
        height: '90%',
        flex: 2,
    },
    introtext: {
        flex: 1,
        justifyContent: 'center',
    },
    text1: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        color: '#06161C',
    },
    text2: {
        fontSize: 16,
        alignSelf: "center",
        color: '#06161C',
    },
});

export default Intro;