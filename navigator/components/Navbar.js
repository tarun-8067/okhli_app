import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.navbargroup}>
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={styles.navhomeIcon}>
                <Image
                    style={styles.navImage}
                    source={require("../assets/navhome.png")}
                />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Orders') }} style={styles.navhomeIcon}>
                <Image
                    style={styles.navImage}
                    source={require("../assets/navorders.png")}
                />
                <Text style={styles.navText}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Cart') }} style={styles.navhomeIcon}>
                <Image
                    style={styles.navImage}
                    source={require("../assets/navcart.png")}
                />
                <Text style={styles.navText}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Account') }} style={styles.navhomeIcon}>
                <Image
                    style={styles.navImage}
                    source={require("../assets/navprofile-1.png")}
                />
                <Text style={styles.navText}>Account</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Navbar;

const styles = StyleSheet.create({
    navbargroup: {
        flexDirection: 'row',
        position: 'absolute',
        height: '10%',
        width: '100%',
        top: '90%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5
    },
    navhomeIcon: {
        width: '25%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    navImage: {
        top: '10%',
        height: '32%',
        width: '29%'

    },
    navText: {
        alignSelf: 'center',
        fontWeight: '500',
        marginTop: 8
    },

});