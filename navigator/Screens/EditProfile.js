import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TitleBar from '../components/TitleBar'
import InputFieldComp from '../components/InputCont'
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-gesture-handler';
import validator from 'validator';
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Userprofile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    const [nameError, setNameError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [fetched, setFetched] = useState(false);
    const [user, setUser] = useState('');


    const fetchProfileData = async () => {
        const token = await AsyncStorage.getItem('authToken');
        const scKi = await AsyncStorage.getItem('scKi');
        try {
            const response = await fetch("http://192.168.1.35:8000/fetchProfile", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ token, scKi })
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data);

            } else {
                console.log('Signin failed');
            }
        } catch (error) {
            console.error('Error  : ', error);
        }
    }

    if (!fetched) {
        fetchProfileData();
        setFetched(true);
    }

    const handleEditProfile = async () => {
        const token = await AsyncStorage.getItem('authToken');
        const scKi = await AsyncStorage.getItem('scKi');
        try {
            const response = await fetch("http://192.168.1.35:8000/editProfile", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ token, scKi, name, email, mobile, gender, age })
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

                }
            } else {
                console.log('Signin failed');
            }
        } catch (error) {
            console.error('Error  : ', error);
        }
    }

    const isAlphabeticWithSpacesOnly = (input) => {
        const alphabeticWithSpacesRegex = /^[a-zA-Z\s]+$/;
        return alphabeticWithSpacesRegex.test(input);
    };

    const handleNameChange = (text) => {
        setName(text);
        if (!isAlphabeticWithSpacesOnly(text)) {
            setNameError('Contains only alphabets and spaces');
        } else {
            setNameError('');
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

    const handleEmailChange = (text) => {
        setEmail(text);
        if (!validator.isEmail(text)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const handleGenderChange = (text) => {
        setGender(text);
        if (!text) {
            setGenderError('please choose any!');
        } else {
            setGenderError('');
        }
    };

    const handleAgeChange = (text) => {
        console.log("age is :  ", text);
        setAge(text);
        if (!text) {
            setAgeError('between 18 to 60!');
        } else {
            setAgeError('');
        }
    };

    return (
        <View style={styles.profile}>
            <TitleBar title="Edit Profile" />
            <View style={styles.form}>

                <InputFieldComp inputTitle='Name' place={user.name} value={name}
                    onChangeText={handleNameChange} />
                {nameError ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{nameError}</Text> : null}
                <InputFieldComp inputTitle='Email' place={user.email} value={email}
                    onChangeText={handleEmailChange} />
                {emailError ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{emailError}</Text> : null}
                <InputFieldComp inputTitle='Mobile' place={user.phNo} value={mobile}
                    onChangeText={handleMobileChange} />
                {mobileError ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{mobileError}</Text> : null}
                <View style={styles.agegenCont}>
                    <View style={styles.genCont}>
                        <View style={styles.genInnerCont}>
                            <RNPickerSelect style={styles.gender}
                                placeholder={{ label: (!user.gender) ? 'Gender' : user.gender, value: user.gender }}
                                items={[
                                    { label: 'Male', value: 'Male' },
                                    { label: 'Female', value: 'Female' },
                                ]}
                                onValueChange={handleGenderChange}
                            />
                        </View>
                        {genderError ? <Text style={{ marginLeft: '15%', color: 'red', fontSize: 11 }}>{genderError}</Text> : null}
                    </View>
                    <View style={styles.age}>
                        <View style={styles.ageInnerCont}>
                            <TextInput style={styles.input}
                                placeholder={(!user.age) ? 'Age' : user.age} value={age}
                                onChangeText={handleAgeChange} />
                        </View>
                        {ageError ? <Text style={{ marginLeft: '25%', color: 'red', fontSize: 11 }}>{ageError}</Text> : null}
                    </View>
                </View>
                <View style={styles.buttonCont}>
                    <TouchableOpacity onPress={handleEditProfile} style={styles.button}>
                        <Text style={styles.textStyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Userprofile;

const styles = StyleSheet.create({
    agegenCont: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonCont: {
        flex: 4,
    },
    form: {
        flex: 1,
        top: '20%',
    },
    profile: {
        flex: 1,
        backgroundColor: '#F3F5F7',
    },
    genCont: {
        flex: 1,
        justifyContent: 'center'
    },
    genInnerCont: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        height: '55%',
        justifyContent: 'center',
        borderWidth: .7,
        borderColor: 'grey'
    },
    ageInnerCont: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '60%',
        alignSelf: 'center',
        height: '55%',
        justifyContent: 'center',
        borderWidth: .7,
        borderColor: 'grey'
    },
    age: {
        justifyContent: 'center',
        flex: 1,
        right: '-20%',
    },
    input: {
        left: '10%',

    },
    textStyle: {
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        fontFamily: FontFamily.body16Bold,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#23AA49',
        height: '15%',
        width: '75%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        top: '10%'
    },
    inputTiltle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    }



});