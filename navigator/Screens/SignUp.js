import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { FontFamily, Color, Border, Padding, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import validator from 'validator';


const SignUp = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [nameError, setNameError] = useState('');
    const [cnfPasswordError, setCnfPasswordError] = useState('');

    const isAlphabeticWithSpacesOnly = (input) => {
        // Regular expression to match alphabetic characters and spaces only
        const alphabeticWithSpacesRegex = /^[a-zA-Z\s]+$/;

        return alphabeticWithSpacesRegex.test(input);
    };
    const handleFullnameChange = (text) => {
        setName(text);
        if (!isAlphabeticWithSpacesOnly(text)) {
            setNameError('Name must contain only alphabets and spaces');
        } else {
            setNameError('');
        }
    };

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
    const handleCnfPasswordChange = async (text) => {
        setCnfPassword(text);
        if (password === text) {
            setCnfPasswordError('');
        } else {
            setCnfPasswordError('Password should be same');
        }
    };
    const handleMobileChange = (text) => {
        setMobile(text);
        if (!validator.isLength(text, { min: 10, max: 10 }) || !validator.isNumeric(text)) {
            setMobileError('Please enter a valid mobile number');
        }
        else {
            setMobileError('');
        }
    };

    const handleSignUp = async () => {
        // navigation.navigate('Changepass');
        // console.log("in handele signup");

        const user = {
            name: name,
            phNo: mobile,
            email: email,
            password: password,
            cnfPassword: cnfPassword,
        };

        try {
            const response = await fetch("http://10.0.2.2:8000/signup", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ user: user })
            });
            if (response.ok) {
                const data = await response.json()
                if (data.code === '203') {
                    Alert.alert(data.message);
                }
                if (data.code === '204') {
                    Alert.alert(data.message);
                }
                if (data.code === '210') {
                    Alert.alert(data.message);
                    navigation.replace('Otpscreen');
                }
            } else {
                console.log('Signin failed');
            }
        } catch (error) {
            console.error('Error  : ', error);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
                <View style={styles.logoCont} >
                    <View style={{ flex: 1 }}>
                        <View style={styles.inner1Cont}>
                        </View>
                        <View style={styles.inner2Cont}>
                            <View style={{ flex: 1 }}>
                                <View style={styles.logoContainer}>
                                    <Image
                                        style={styles.playstore1Icon}
                                        source={require("../assets/playstore-11.png")}
                                    />
                                </View>
                            </View>
                            <View style={styles.dataCont}>
                                <View style={styles.titleView}>
                                    <Text style={styles.titleText}>
                                        Hello friend!
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.titleField}>
                                        Full name
                                    </Text>
                                    <View style={styles.textField}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Full Name"
                                            value={name}
                                            onChangeText={handleFullnameChange}
                                        />
                                    </View>
                                    {nameError ? <Text style={{ marginLeft: '8%', color: 'red', fontSize: 11 }}>{nameError}</Text> : null}
                                </View>
                                <View style={{ flex: 1 }}>
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
                    </View>

                    <View style={styles.otherCont}>
                        <View style={styles.inner21Cont}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.titleField}>
                                    Mobile No.
                                </Text>
                                <View style={styles.textField}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Mobile Number"
                                        keyboardType="phone-pad"
                                        value={mobile}
                                        onChangeText={handleMobileChange}
                                    />
                                </View>
                                {mobileError ? <Text style={{ marginLeft: '8%', color: 'red', fontSize: 11 }}>{mobileError}</Text> : null}
                            </View>
                            <View style={{ flex: 1 }}>
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
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.titleField}>
                                    Confirm Password
                                </Text>
                                <View style={styles.textField}>
                                    <TextInput
                                        style={[styles.input]}
                                        value={cnfPassword}
                                        onChangeText={handleCnfPasswordChange}
                                        secureTextEntry={true}
                                        placeholder="Confirm your password"
                                    />
                                </View>
                                {cnfPasswordError ? (
                                    <Text style={{ marginLeft: '8%', color: 'red', fontSize: 11 }}>{cnfPasswordError}</Text>
                                ) : null}
                            </View>
                        </View>
                        <View style={styles.inner22Cont}>
                            <TouchableOpacity onPress={() => handleSignUp()} style={styles.buttonContainer}>
                                <Text style={styles.shopnow}>Sign Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }} style={styles.button}>
                                <Text style={styles.alreadyHaveAnContainer}>
                                    <Text
                                        style={styles.alreadyHaveAn}
                                    >{`Already have an account? `}</Text>
                                    <Text style={[styles.signIn, styles.signTypo]}>SIGN IN</Text>
                                </Text>
                            </TouchableOpacity>
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
        flex: 5,
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
        flex: 2,
        backgroundColor: 'white',
        width: '85%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderTopColor: 'black',
    },
    inner22Cont: {
        flex: 1,
    },
    otherCont: {
        flex: 1,
        backgroundColor: "#E8F1EE",
        alignItems: 'center'
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
        height: '100%',
        width: '20%',
        top: "-45%",
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 48
    },
    textField: {
        backgroundColor: "#F6F6F7",
        width: '88%',
        alignSelf: 'center',
        borderRadius: 11,
        height: "50%"
    },
    titleView: {
        flex: 1,
    },
    titleField: {
        height: '20%',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        left: '6%'
    },
    titleFieldPass: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    input: {
        marginLeft: '4%',
        fontSize: 13
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
    button: {
        bottom: '-65%',
        alignItems: "center",
    },
    buttonContainer: {
        position: "absolute",
        width: "50%",
        height: "40%",
        backgroundColor: '#23AA49',
        alignSelf: 'center',
        borderRadius: 30,
        bottom: '40%',
        justifyContent: "center",
    },
    signTypo: {
        fontFamily: FontFamily.subheader16Bold,
        fontWeight: "700",
    },
    alreadyHaveAn: {
        fontFamily: FontFamily.metadata12Regular,
        fontSize: FontSize.paragraph14Regular_size,
        color: Color.textTextDarkest,
    },
    signIn: {
        color: Color.colorForestgreen,
        fontSize: FontSize.subheader16Bold_size,
    },
    alreadyHaveAnContainer: {
        textAlign: "center",
    },
    flexTest: {
        backgroundColor: "#F6F6F7",
        width: '88%',
        alignSelf: 'center',
        borderRadius: 11,
        // height: "50%"
    },
    dataCont: {
        flex: 4
    }
});

export default SignUp;


