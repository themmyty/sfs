import React,{useState} from 'react';
import {View,Image,TouchableOpacity,Text,StyleSheet,TextInput} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {SelectProvider,Select,} from '@mobile-reality/react-native-select-pro';
import CustomSwitchtwo from '../components/CustomSwitchtwo'

const COLORS = {primary: '#062156', white: '#fff'};

const countries = ["Egypt", "Canada", "Australia", "Ireland"]

const DATA = [
    {
      value: 'one',
      label: 'Investment one',
    },
    {
      value: 'two',
      label: 'investment two'
    },
    {
      value: 'three',
      label: 'investment three',
    },
    
  ];

function RequestScreen() {

    const [gamesTab, setGamesTab] = useState(1);
  
    const onSelectSwitch = value => {
      setGamesTab(value);
    };
  

    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
             <View>
                     <Text style={{color:COLORS.primary, fontSize:24,marginTop:54,marginLeft:16}}>Statement Request</Text>
                    <Text style={{color:COLORS.primary, fontSize:12,marginTop:5,marginLeft:16}}>Download your monthly statements requests</Text>
             </View>
             <View>
                <SelectProvider>
                <View style={styles.container}>
                    <Select  placeholderText ='select investment'
                    options={DATA} />
                </View>
                </SelectProvider>
            </View>
            <View> 
                    <Text style={{color:COLORS.primary, fontSize:12,marginTop:5,marginLeft:16}}>Set the details</Text> 
                    <TextInput style = {styles.input}
                            placeholder = "Start  date"
                             placeholderTextColor = "gray"
                            autoCapitalize = "none"/>

                    <TextInput style = {styles.input}
                            placeholder = "End date"
                             placeholderTextColor = "gray"
                            autoCapitalize = "none"/>
            </View>
                        <View>
                        <CustomSwitchtwo
                        selectionMode={1}
                        option1="PDF"
                        option2="CSV"
                        
                        onSelectSwitch={onSelectSwitch}
                    />
                    </View>
                <View>
                {gamesTab==1 && <Text></Text>}
                {gamesTab==2 && <Text></Text>}
               
                </View>
                <View style={{marginTop:30}}>
                        <TouchableOpacity
                    style = {styles.submitButtonn}>
                    <Text style = {styles.submitButtonTextt}> Download </Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default RequestScreen;

const styles =StyleSheet.create({
    container: {
      
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 8,
        marginTop:40
    },
    input: {
        margin: 16,
        height: 40,
        borderBottomWidth: 2,
        borderColor:'gray'
     },

     submitButtonn: {
        backgroundColor:COLORS.primary,
        padding: 10,
        margin: 15,
        height: 54,
        borderRadius:5
        
     },
     submitButtonTextt:{
        color: 'white',
        alignSelf:'center',
        marginTop:10
     }

})