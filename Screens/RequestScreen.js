import React from 'react';
import {View,Image,TouchableOpacity,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {primary: '#062156', white: '#fff'};

function RequestScreen() {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:COLORS.primary, fontSize:24,marginTop:54,marginLeft:16}}>Statement Request</Text>
            <Text style={{color:COLORS.primary, fontSize:12,marginTop:5,marginLeft:16}}>Download your monthly statements requests</Text>
        
        </View>
        </SafeAreaView>
    );
}

export default RequestScreen;
