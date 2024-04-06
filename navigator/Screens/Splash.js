import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = () => {
    const handleSplash = async () => {
        const token = await AsyncStorage.getItem("authToken");

        if (token !== null) {
            navigation.replace("Home");
        }
        else {
            navigation.navigate("Intro");
        }
    }
    const navigation = useNavigation();
    React.useEffect(() => {
        setTimeout(() => {
            handleSplash();
        }, 3000)
    }, [])
    return (
        <View style={styles.splash}>
            <View style={styles.playstore1Icon}>
                <Image
                    source={require("../assets/playstore-11.png")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    playstore1Icon: {
        height: '20%',
        top: "40%",
        flex: 1,
        position: "absolute",
        alignSelf: 'center',
    },
    splash: {
        backgroundColor: Color.lightColorsPrimary,
        flex: 1,

    },
});

export default Splash;
