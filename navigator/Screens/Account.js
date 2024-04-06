import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import AccountApi from "../components/AccountApi";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Account = () => {

    const navigation = useNavigation();

    const handleAddressPress = async () => {
        // Navigate to Address page
        navigation.navigate('Address');

        // navigation.navigate('Address');
    };

    const handleOrdersPress = () => {
        // Navigate to Orders page
        navigation.navigate('Orders');
    };

    const handleReferralPress = () => {
        // Navigate to Referral page
        navigation.navigate('Referral');
    };

    const handleEditProfilePress = () => {
        // Navigate to Edit Profile page
        navigation.navigate('EditProfile');
    };

    const handleLogoutPress = () => {
        // Navigate to Logout page or perform logout action
        navigation.replace('SignIn');
    };
    return (
        <View style={{ flex: 1 }}>
            <TitleBar title="My Account" />
            <View style={styles.profile}>
                <Image
                    style={styles.manIcon}
                    source={require("../assets/man_design.png")}
                />
                <Text style={styles.name}>Sourav Yadav</Text>
                <Text style={styles.email}>souravyadav@gmail.com</Text>
                <Text style={styles.email}>8249131998</Text>
            </View>
            <View style={styles.accountAPI_1}>

                <AccountApi onPress={handleAddressPress} text="My Addresses" image={require("../assets/address.png")} />
                <AccountApi onPress={handleOrdersPress} text="My Orders" image={require("../assets/dollar.png")} />
                <AccountApi onPress={handleOrdersPress} text="Referral" image={require("../assets/referral.png")} />
                <AccountApi onPress={handleEditProfilePress} text="Edit Profile" image={require("../assets/editprofile.png")} />
                <AccountApi onPress={handleLogoutPress} text="Logout" image={require("../assets/logout.png")} />
            </View>
            <View style={styles.accountAPI_2}>
                <View style={styles.headphone}>
                    <Image
                        style={styles.headphoneImage}
                        source={require("../assets/headphone.png")}
                    />
                </View>
                <View style={styles.contact}>
                    <Text style={styles.needHelp}>
                        Need help?
                    </Text>
                    <Text style={styles.contactStyle}>
                        You can contact us at +918249131998
                    </Text>
                </View>
            </View>
            <Navbar />
        </View>
    )

}

export default Account;

const styles = StyleSheet.create({

    profile: {
        flex: 3,
        top: '10%',
    },
    needHelp: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        top: '10%'
    },
    headphone: {
        flex: 1,
        alignItems: 'center'
    },
    headphoneImage: {
        width: '40%',
        height: '23%',
        top: '10%'
    },
    contactStyle: {
        top: '10%',
        fontWeight: '500'
    },
    contact: {
        flex: 4,
    },
    manIcon: {
        alignSelf: 'center',
        top: '15%',
        height: '46%',
        width: '30%',
        marginLeft: '-50%'
    },
    name: {
        top: '-25%',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '45%'
    },
    email: {
        top: '-25%',
        fontSize: 18,
        color: 'black',
        marginLeft: '45%'
    },
    accountAPI_1: {
        flex: 4,
    },
    accountAPI_2: {
        flex: 2,
        height: '20%',
        width: '100%',
        flexDirection: 'row'

    }

});