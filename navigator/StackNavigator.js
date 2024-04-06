import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Screens/Splash";
import Intro from "./Screens/Intro";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Home from "./Screens/Home";
import Account from "./Screens/Account";
import Orders from "./Screens/Orders";
import Cart from "./Screens/Cart";
import Userprofile from "./Screens/EditProfile";
import Address from "./Screens/MyAddress";
import Editaddresses from "./Screens/EditAddress";
import Itemspecs from "./Screens/ItemSpecs";
import Checkout from "./Screens/Checkout";
import Otpscreen from "./Screens/Otpscreen";
import ChangePass from "./Screens/ChangePass";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Intro"
          component={Intro}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Account"
          component={Account}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Orders"
          component={Orders}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EditProfile"
          component={Userprofile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Address"
          component={Address}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Editaddresses"
          component={Editaddresses}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ItemSpecs"
          component={Itemspecs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Checkout"
          component={Checkout}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Otpscreen"
          component={Otpscreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Changepass"
          component={ChangePass}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
