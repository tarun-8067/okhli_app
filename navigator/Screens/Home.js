import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitleComp from "../components/TitleComp";
import Navbar from "../components/Navbar";

const Home = () => {
    const navigation = useNavigation();
    // const { image, container, container1, container2, textStyle, BSImage } = styles;
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TitleComp />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollerView}>
                <TouchableOpacity onPress={() => { navigation.navigate('ItemSpecs') }} style={styles.headText}>
                    <Text style={styles.offText}>Today's Offers</Text>
                </TouchableOpacity>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container3}>
                    <View style={styles.offerImageContainer}>
                        <Image
                            style={[styles.offImage]}
                            source={require("../assets/group-36780.png")}
                        />
                    </View>
                    <View style={styles.offerImageContainer}>
                        <Image
                            style={[styles.offImage]}
                            source={require("../assets/group-36780.png")}
                        />
                    </View>
                    <View style={styles.offerImageContainer}>
                        <Image
                            style={[styles.offImage]}
                            source={require("../assets/group-36780.png")}
                        />
                    </View>
                </ScrollView>

                <View style={styles.headText}>
                    <Text style={styles.offText}>Best Selling's</Text>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container2}>
                    <View style={styles.bestSellImageCont}>
                        <Image
                            style={[styles.bestSellImage]}
                            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
                        />
                        <View style={styles.priceTag}>
                            <View>
                                <Text style={[styles.textFont]}>Bell Pepper Red</Text>
                                <Text style={[styles.h2Typo, styles.textFont]}>1kg, 6$</Text>
                            </View>
                            <View style={styles.plus1Icon}>
                                <Image
                                    style={styles.plus}
                                    source={require("../assets/plus-1.png")}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bestSellImageCont}>
                        <Image
                            style={[styles.bestSellImage]}
                            source={require("../assets/adrak.png")}
                        />
                        <View style={styles.priceTag}>
                            <View>
                                <Text style={[styles.textFont]}>Bell Pepper Red</Text>
                                <Text style={[styles.h2Typo, styles.textFont]}>1kg, 6$</Text>
                            </View>
                            <View style={styles.plus1Icon}>
                                <Image
                                    style={styles.plus}
                                    source={require("../assets/plus-1.png")}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bestSellImageCont}>
                        <Image
                            style={[styles.bestSellImage]}
                            source={require("../assets/seetafal.png")}
                        />
                        <View style={styles.priceTag}>
                            <View>
                                <Text style={[styles.textFont]}>Bell Pepper Red</Text>
                                <Text style={[styles.h2Typo, styles.textFont]}>1kg, 6$</Text>
                            </View>
                            <View style={styles.plus1Icon}>
                                <Image
                                    style={styles.plus}
                                    source={require("../assets/plus-1.png")}
                                />
                            </View>
                        </View>

                    </View>
                    <View style={styles.bestSellImageCont}>
                        <Image
                            style={[styles.bestSellImage]}
                            source={require("../assets/gobhi.png")}
                        />
                        <View style={styles.priceTag}>
                            <View>
                                <Text style={[styles.textFont]}>Bell Pepper Red</Text>
                                <Text style={[styles.h2Typo, styles.textFont]}>1kg, 6$</Text>
                            </View>
                            <View style={styles.plus1Icon}>
                                <Image
                                    style={styles.plus}
                                    source={require("../assets/plus-1.png")}
                                />
                            </View>
                        </View>

                    </View>
                </ScrollView>

                <View style={styles.headText}>
                    <Text style={styles.offText}>All Products</Text>
                </View>
                <View style={styles.container1}>
                </View>
                <View style={styles.container1}>
                </View>
                <View style={styles.container1}>
                </View>
                <View style={styles.container1}>
                </View>
                <View style={styles.container1}>
                </View>
                <View style={styles.container1}>
                </View>
                <View style={styles.container1}>
                </View>
                <View style={styles.fixed}>
                </View>
            </ScrollView>
            <Navbar />
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    fixed: {
        height: 200,
    },
    texts: {
        fontSize: 16,
        fontWeight: '500',
    },
    scrollerView: {
        flex: 1,
        backgroundColor: 'white',
        top: '10%',
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F3F5F7',
        height: 170,
        marginTop: '0.5%'
    },
    container3: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 170,
        marginTop: '0.5%'
    },
    offText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        left: '3%',
        top: '3%'
    },
    container2: {
        flex: 1,
        backgroundColor: 'white',
        height: 250,
        marginTop: '0.5%',
    },
    headText: {
        flex: 1,
        backgroundColor: 'white',
        height: 30,
        marginTop: '.5%'
    },
    offerImageContainer: {
        flex: 1,
        top: 10,
        width: 300,
        height: 150,
        marginLeft: 10,
        marginRight: 5
    },
    offImage: {
        height: 150,
        width: 300,
        alignSelf: 'center',
        borderRadius: 10
    },
    bestSellImageCont: {
        flex: 1,
        backgroundColor: '#F3F5F7',
        borderRadius: 20,
        top: 10,
        width: 270,
        height: 230,
        marginLeft: 10,
        marginRight: 5
    },
    priceTag: {
        flexDirection: 'row',
        left: '10%',
        top: '5%'
    },
    textFont: {
        fontWeight: '600',
        fontSize: 16
    },
    bestSellImage: {
        top: '2%',
        left: '10%',
        height: 140,
        width: 170
    },
    plus1Icon: {
        marginLeft: '30%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 15,
        height: 30,
        width: 30
    }

});