import React from "react";
import {View,Image,TouchableOpacity,Text,StyleSheet} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { LinearGradient } from 'expo-linear-gradient'
import HomeScreenWithIvst from '../Screens/HomeScreenWithIvst'
import InvestScreen from '../Screens/InvestScreen'
import WithdrawScreen from '../Screens/WithdrawScreen'
import RequestScreen from '../Screens/RequestScreen'
import AccountScreen from '../Screens/AccountScreen'


import Homepng from '../assets/Home.png'
import Accountpng from '../assets/Account.png'
import Requestpng from '../assets/Request.png'
import Withdrawpng from '../assets/Withdraw.png'
import Investpng from '../assets/grow.png'

const COLORS = {
    primary: "#7F5DF0",     // Light purple
    secondary: "#5D2DFD",   // Dark purple

    white: "#fff",
    black: "#000000",
    green: "#5CAC6B",
    red: "#F9A8BA",
    gray: "#6A6A6A",
    lightGray: "#dbdbdb",
    lightGray1: "#f5f6fa"
};


const Tab = createBottomTabNavigator()


const NavTabWitIvst= () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}
            tabBarOptions={{
            showLabel:false,
                style:{
                    bottom:0,
                    elevation:0,
                    right:0,
                    left:0,
                    position:'absolute',
                    borderTopColor:0,
                    height:120,
                    backgroundColor:'#fff'
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreenWithIvst}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                          <Image source ={Homepng} resizeMode='contain'
                            style={{
                                width:40,
                                height:40,
                                marginTop:4,
                                tintColor: focused ? COLORS.primary: COLORS.gray
                            }}
                          /> 
                          <Text 
                          style={{color: focused ? COLORS.gray: COLORS.gray}}>Home</Text> 
                        </View>
                    )
                }}
            
            />
            <Tab.Screen
                name="Withdraw"
                component={WithdrawScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                          <Image source = {Withdrawpng} resizeMode='contain'
                            style={{
                                width:40,
                                height:40,
                                marginTop:4,
                                tintColor: focused ? COLORS.primary: COLORS.gray
                            }}
                          /> 
                          <Text 
                          style={{color: focused ? COLORS.gray: COLORS.gray}}>Withdraw</Text> 
                        </View>
                    )
                }}
            
            />
            <Tab.Screen
                name="Invest"
                component={InvestScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                          <Image source ={Investpng} resizeMode='contain'
                            style={{
                                width:70,
                                height:70,
                                marginTop:5,
                                borderWidth:0.3,
                                borderRadius:20,
                                tintColor: focused ? COLORS.primary: COLORS.green
                            }}
                          /> 
                          <Text 
                          style={{color: focused ? COLORS.gray: COLORS.gray,marginBottom:30}}>Invest</Text> 
                        </View>
                    )
                }}
            
            />
            <Tab.Screen
                name="Request"
                component={RequestScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                          <Image source ={Requestpng} resizeMode='contain'
                            style={{
                                width:40,
                                height:40,
                                marginTop:4,
                                tintColor: focused ? COLORS.primary: COLORS.gray
                            }}
                          /> 
                          <Text 
                          style={{color: focused ? COLORS.gray: COLORS.gray}}>Request</Text> 
                        </View>
                    )
                }}
            
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                          <Image source ={Accountpng} resizeMode='contain'
                            style={{
                                width:40,
                                height:40,
                                marginTop:4,
                                tintColor: focused ? COLORS.primary: COLORS.gray
                            }}
                          /> 
                          <Text 
                          style={{color: focused ? COLORS.gray: COLORS.gray}}>Account</Text> 
                        </View>
                    )
                }}
            
            />
        </Tab.Navigator>
    )
}
export default NavTabWitIvst;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

