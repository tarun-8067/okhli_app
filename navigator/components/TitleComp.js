import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";

const TitleComp = () => {
    return (
        <View style={styles.homeheaderPosition}>
            <View style={styles.manIconCont}>
                <Image
                    style={styles.manIcon}
                    source={require("../assets/man.png")}
                />
            </View>
            <View style={styles.goodMorningParent}>
                <Text style={styles.texts}>
                    Hello,
                </Text>
                <Text style={styles.texts}>
                    Rahul Sharma
                </Text>
            </View>
        </View>

    )

}

export default TitleComp;

const styles = StyleSheet.create({
    homeheaderPosition: {
        flexDirection: 'row',
        position: 'absolute',
        height: '10%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    manIconCont: {
        flex: 1,
    },
    manIcon: {
        alignSelf: 'center',
        top: '20%',
        height: '60%',
        width: '30%'
    },
    goodMorningParent: {
        alignSelf: 'center',
        flex: 2,
    },
    texts: {
        fontSize: 16,
        fontWeight: '500',
    },
});
