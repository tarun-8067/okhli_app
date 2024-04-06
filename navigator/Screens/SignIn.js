import React, { useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, KeyboardAvoidingViewBase, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import AsyncStorage from "@react-native-async-storage/async-storage";
import validator from 'validator';

GoogleSignin.configure({
    webClientId: '259249234282-1jol54jf9i12u48l4mf17br9oakafbnr.apps.googleusercontent.com',
});
const SignIn = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
        if (!validator.isEmail(text)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };
    const handlePasswordChange = (text) => {
        setPassword(text);
        if (!validator.isLength(text, { min: 8 })) {
            setPasswordError('Password must be at least 8 characters long');
        } else {
            setPasswordError('');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("http://10.0.2.2:8000/login", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                const data = await response.json()
                if (data.code === '203') {
                    Alert.alert(data.message);
                }
                if (data.code === '204') {
                    Alert.alert(data.message);
                }
                if (data.code === '205') {
                    await AsyncStorage.setItem("authToken", data.authToken);
                    await AsyncStorage.setItem("scKi", data.scKi);
                    navigation.replace('Home');
                }
            } else {
                console.log('Signin failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    //Firebase Google connection implementation
    async function onGoogleButtonPress() {
        try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            auth().signInWithCredential(googleCredential);
            console.log("User Sign In Successfully using Gmail!")
        } catch (err) {
            console.log(err);
        }
    }

    // Firebase Facebook connection
    async function onFacebookButtonPress() {
        try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccessToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            // Sign-in the user with the credential
            auth().signInWithCredential(facebookCredential);
            console.log("User Sign In Successfully using FB!")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
                <View style={styles.logoCont} >
                    <View style={styles.inner1Cont}>
                    </View>
                    <View style={styles.inner2Cont}>
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.playstore1Icon}
                                source={require("../assets/playstore-11.png")}
                            />
                        </View>
                        <View style={styles.titleView}>
                            <Text style={styles.titleText}>
                                Welcome,
                            </Text>
                            <Text style={styles.titleText}>
                                login to start with us
                            </Text>
                        </View>
                        <View style={{ flex: 1, top: '-5%' }}>
                            <Text style={styles.titleField}>
                                Email
                            </Text>
                            <View style={styles.textField}>
                                <TextInput
                                    style={[styles.input]}
                                    value={email}
                                    onChangeText={handleEmailChange}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    placeholder="Enter your email"
                                />
                            </View>
                            {emailError ? <Text style={{ marginLeft: '8%', color: 'red', fontSize: 11 }}>{emailError}</Text> : null}
                        </View>
                    </View>
                </View>
                <View style={styles.otherCont}>
                    <View style={styles.inner21Cont}>
                        <View style={{ flex: 1, top: '-5%' }}>
                            <Text style={styles.titleField}>
                                Password
                            </Text>
                            <View style={styles.textField}>
                                <TextInput
                                    style={[styles.input]}
                                    value={password}
                                    onChangeText={handlePasswordChange}
                                    secureTextEntry={true}
                                    placeholder="Enter your password"
                                />
                            </View>
                            {passwordError ? (
                                <Text style={{ marginLeft: '8%', color: 'red', fontSize: 11 }}>{passwordError}</Text>
                            ) : null}
                            <TouchableOpacity onPress={() => navigation.navigate('Changepass')}>
                                <Text style={styles.forgot} >
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.inner22Cont}>
                        <View style={styles.LoginCont}>
                            <View style={styles.buttonCont}>
                                <TouchableOpacity onPress={() => handleLogin()} style={styles.buttonContainer}>
                                    <Text style={styles.shopnow}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.button}>
                                    <Text style={styles.dontHaveAnContainer}>
                                        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
                                        <Text style={[styles.signUp, styles.emailTypo]}>SIGN UP</Text>
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.SocialCont}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.orContinueWith}>or continue with?</Text>
                            </View>
                            <View style={styles.social}>
                                <TouchableOpacity onPress={onGoogleButtonPress} style={styles.socialLogoCont}>
                                    <Image
                                        style={styles.iconLayout}
                                        source={require("../assets/google.png")}
                                    />
                                </TouchableOpacity>
                                <View style={styles.iconLayout3}>
                                    <TouchableOpacity onPress={onFacebookButtonPress} style={styles.iconLayout2}>
                                        <Image
                                            style={styles.logoFbSimpleIcon}
                                            source={require("../assets/logofbsimple.png")}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
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
        flex: 2,
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
        borderTopColor: 'black'
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
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '36%',
        width: '28%',
        top: "-18%",
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
        top: '-15%',
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
        position: "absolute",
        width: "50%",
        height: "80%",
        backgroundColor: '#23AA49',
        alignSelf: 'center',
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

export default SignIn;
