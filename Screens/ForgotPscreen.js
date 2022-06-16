import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Image, SafeAreaView, Text, View,StyleSheet,TextInput} from 'react-native';

const COLORS = {primary: '#062156', white: '#fff'};

const ForgotPscreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.white}}>
      <View>
        <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')} >
        <Image style={{marginTop:50, marginLeft:12}} source={require('../assets/close.png')} />
        </TouchableOpacity>
      <Text style={{color:COLORS.primary, marginLeft:16,fontSize:25,marginTop:30}} >Forgot Password</Text>
      <Text style ={{color:COLORS.primary, marginLeft:16,fontSize:14,marginTop:5}}> Enter your Email Address</Text>
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               placeholder = "Your Email"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>
            
               </View>
               <TouchableOpacity
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> SUBMIT </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('OnboardingScreen')}>
               <Text style = {{alignSelf:'center',fontSize:14,color:COLORS.primary,marginTop:50}}> Go back</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default ForgotPscreen;

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 16,
     height: 40,
     borderBottomWidth: 2,
     borderColor:'gray'
  },
  submitButton: {
     backgroundColor:COLORS.primary,
     padding: 10,
     margin: 15,
     height: 54,
     borderRadius:5
     
  },
  submitButtonText:{
     color: 'white',
     alignSelf:'center',
     marginTop:10
  }
})