import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";
import TitleBar from "../components/TitleBar";
import AddressComp from "../components/AddressComp";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Address = () => {
    const navigation = useNavigation();
    const [address, setAddress] = useState('');
    const [fetched, setFetched] = useState(false);

    const fetchAddress = async () => {
        const token = await AsyncStorage.getItem('authToken');
        const scKi = await AsyncStorage.getItem('scKi');

        try {
            const response = await fetch("http://10.0.2.2:8000/myAddress", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ token: token, scKi: scKi })
            });
            if (response.ok) {
                const data = await response.json();
                setAddress(data);

            } else {
                console.log('Signin failed');
            }
        } catch (error) {
            console.error('Error  : ', error);
        }
    };

    if (!fetched) {
        fetchAddress();
        setFetched(true);
    }

    const handleEditAddress = () => {

        // Navigate to the "Edit Address" page and pass the parameter
        navigation.navigate('Editaddresses', { isComingFromAddAddress: true });
    };
    return (
        <View style={{ flex: 1 }}>
            <TitleBar title="My Address" />
            <ScrollView style={styles.addressView}>
                {(address) && address.length === 1 && <AddressComp name={address[0].name} buildApart={address[0].buildApart} addLine1={address[0].addLine1} addLine2={address[0].addLine2} pinCode={address[0].pinCode} mobile={address[0].mobile} state={address[0].state} />}
                {(address) && address.length === 2 && (<View>
                    <AddressComp name={address[0].name} buildApart={address[0].buildApart} addLine1={address[0].addLine1} addLine2={address[0].addLine2} pinCode={address[0].pinCode} mobile={address[0].mobile} state={address[0].state} />
                    <AddressComp name={address[1].name} buildApart={address[1].buildApart} addLine1={address[1].addLine1} addLine2={address[1].addLine2} pinCode={address[1].pinCode} mobile={address[1].mobile} state={address[1].state} />
                </View>)}
                {(address) && address.length === 3 && (<View>
                    <AddressComp name={address[0].name} buildApart={address[0].buildApart} addLine1={address[0].addLine1} addLine2={address[0].addLine2} pinCode={address[0].pinCode} mobile={address[0].mobile} state={address[0].state} />
                    <AddressComp name={address[1].name} buildApart={address[1].buildApart} addLine1={address[1].addLine1} addLine2={address[1].addLine2} pinCode={address[1].pinCode} mobile={address[1].mobile} state={address[1].state} />
                    <AddressComp name={address[2].name} buildApart={address[2].buildApart} addLine1={address[2].addLine1} addLine2={address[2].addLine2} pinCode={address[2].pinCode} mobile={address[2].mobile} state={address[2].state} />
                </View>)}
                {(address) && address.length === 4 && (<View>
                    <AddressComp name={address[0].name} buildApart={address[0].buildApart} addLine1={address[0].addLine1} addLine2={address[0].addLine2} pinCode={address[0].pinCode} mobile={address[0].mobile} state={address[0].state} />
                    <AddressComp name={address[1].name} buildApart={address[1].buildApart} addLine1={address[1].addLine1} addLine2={address[1].addLine2} pinCode={address[1].pinCode} mobile={address[1].mobile} state={address[1].state} />
                    <AddressComp name={address[2].name} buildApart={address[2].buildApart} addLine1={address[2].addLine1} addLine2={address[2].addLine2} pinCode={address[2].pinCode} mobile={address[2].mobile} state={address[2].state} />
                    <AddressComp name={address[3].name} buildApart={address[3].buildApart} addLine1={address[3].addLine1} addLine2={address[3].addLine2} pinCode={address[3].pinCode} mobile={address[3].mobile} state={address[3].state} />
                </View>)}
                {(address) && address.length === 0 && <View></View>}
                <TouchableOpacity onPress={handleEditAddress} disabled={address.length >= 4} style={styles.buttonCont}>
                    <Text style={styles.buttonText}>Add address</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};

export default Address;

const styles = StyleSheet.create({
    addressView: {
        marginTop: '20.3%',
    },
    button: {
        backgroundColor: '#23A449',
        height: '20%',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        top: '20%'
    },
    buttonCont: {
        backgroundColor: '#23A449',
        height: 60,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 30,
        marginBottom: '15%'

    },
    buttonText: {
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        fontFamily: FontFamily.body16Bold,
        fontWeight: 'bold'
    }

});