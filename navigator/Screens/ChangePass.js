import React, { useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, KeyboardAvoidingViewBase, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import validator from 'validator';

const ChangePass = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handlePasswordChange = () => {
        console.log("Inside Handle Password Change Function")
    }

    const handleSubmit = () => {
        console.log("Inside change submit fn")
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
                <View style={styles.logoCont} >
                    <View style={styles.inner1Cont}>
                    </View>
                    <View style={styles.inner2Cont}>
                        <View style={{ flex: 2, }}>
                            <View style={styles.logoContainer}>
                                <Image
                                    style={styles.playstore1Icon}
                                    source={require("../assets/playstore-11.png")}
                                />
                            </View>
                        </View>
                        <View style={styles.titleView}>
                            <Text style={styles.titleText}>
                                Change Password
                            </Text>
                        </View>
                        <View style={{ flex: 5, }}>
                            <View style={{ flex: 1, }}>
                                <Text style={styles.titleField}>
                                    New Password
                                </Text>
                                <View style={styles.textField}>
                                    <TextInput
                                        style={[styles.input]}
                                        value={cnfPassword}
                                        onChangeText={handlePasswordChange}
                                        secureTextEntry={true}
                                        placeholder="Enter your new password"
                                    />
                                </View>
                                {/* {emailError ? <Text style={{ marginLeft: '8%', color: 'red', fontSize: 11 }}>{emailError}</Text> : null} */}
                            </View>
                            <View style={{ flex: 1, }}>
                                <Text style={styles.titleField}>
                                    Confirm Password
                                </Text>
                                <View style={styles.textField}>
                                    <TextInput
                                        style={[styles.input]}
                                        value={cnfPassword}
                                        onChangeText={handlePasswordChange}
                                        secureTextEntry={true}
                                        placeholder="Confirm your new password"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.otherCont}>
                    <View style={styles.inner21Cont}>
                        <TouchableOpacity onPress={() => handleSubmit()} style={styles.buttonContainer}>
                            <Text style={styles.shopnow}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inner22Cont}>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    logoCont: {
        flex: 1,
        backgroundColor: '#23AA49'
    },
    inner1Cont: {
        flex: 1,
    },
    inner2Cont: {
        flex: 4,
        backgroundColor: 'white',
        width: '85%',
        alignSelf: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderTopWidth: .5,
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderTopColor: 'black'
    },
    inner21Cont: {
        flex: 1,
        backgroundColor: 'white',
        width: '85%',
        alignSelf: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderTopColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'

    },
    inner22Cont: {
        flex: 2,
    },
    otherCont: {
        flex: 1,
        backgroundColor: "#E8F1EE",
    },
    playstore1Icon: {
        height: '80%',
        width: '80%',
    },
    titleText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '94%',
        width: '20%',
        top: "-50%",
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 48
    },
    textField: {
        backgroundColor: "#F6F6F7",
        width: '88%',
        alignSelf: 'center',
        borderRadius: 11,
    },
    titleView: {
        flex: 1,
        top: '-10%'
    },
    titleField: {

        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        left: '6%'
    },
    input: {
        marginLeft: '4%',
        // color: 'black'
    },

    pass: {
        top: '1%'
    },
    forgot: {
        fontSize: 12,
        alignSelf: 'center',
        color: '#23AA49',
        fontWeight: '700',
        top: '10%'
    },
    LoginCont: {
        flex: 1,
    },
    SocialCont: {
        flex: 1,
    },
    buttonCont: {
        flex: 1,
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
    buttonContainer: {
        width: "60%",
        height: "40%",
        backgroundColor: '#23AA49',
        borderRadius: 30,
        bottom: '0%',
        justifyContent: "center",
    },
    iconLayout: {
        height: 44,
        width: 44,
        alignSelf: 'center'
    },
    socialLogoCont: {
        right: '5%'
    },
    iconLayout2: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
    },
    iconLayout3: {
        left: '5%'
    },
    emailTypo: {
        fontFamily: FontFamily.subheader16Bold,
        fontWeight: "700",
    },
    dontHaveAn: {
        fontFamily: FontFamily.metadata12Regular,
        fontSize: FontSize.paragraph14Regular_size,
        color: Color.textTextDarkest,
    },
    signUp: {
        color: Color.colorForestgreen,
        fontSize: FontSize.subheader16Bold_size,
    },
    dontHaveAnContainer: {
        textAlign: "center",
    },
    button: {
        top: '10%',
        alignItems: "center",
    },
    orContinueWith: {
        fontSize: 14,
        fontFamily: FontFamily.metadata12Regular,
        textAlign: "center",
        color: Color.textTextDarkest,
    },
    logoFbSimpleIcon: {
        alignSelf: 'center',
    },
    social: {
        flex: 4,
        flexDirection: "row",
        alignSelf: 'center',
    },
});


export default ChangePass;
