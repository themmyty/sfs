import React, { useState } from 'react';
import {View,Image,TouchableOpacity,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import investPic from '../assets/investPage.png'
import CustomSwitch from '../components/CustomSwitch';

const COLORS = {primary: '#062156', white: '#fff'};


function InvestScreen() {

  const [gamesTab, setGamesTab] = useState(1);
  
  const onSelectSwitch = value => {
    setGamesTab(value);
  };



    return (
      <SafeAreaView style={{flex:1}}>
        <View >
        <View>
          <Text style={{color:COLORS.primary, marginLeft:16,fontSize:25,marginTop:79}} >Invest</Text>
         <Text style ={{color:COLORS.primary, marginLeft:16,fontSize:14,marginTop:5}}> Select an Investment to withdraw from</Text>
        </View>
        <View style={styles.investPage}>
          <Image source={investPic}/>
        </View>
        <View >
        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Active"
            option2="Investments"
            option3="Closed"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
      </View>
      {gamesTab==1 && <Text>Active</Text>}
      {gamesTab==2 && <Text>investment</Text>}
      {gamesTab==3 && <Text>closed</Text>}
      </View>
      </SafeAreaView>
    );
}

export default InvestScreen;

const styles = StyleSheet.create({
    investPage:{
      resizeMode:'contain',
      alignSelf:'center',
      marginTop:29,
      
    }
})