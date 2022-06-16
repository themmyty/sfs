import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Image, SafeAreaView, Text, View,StyleSheet,TextInput,StatusBar} from 'react-native';
import Button from '../components/Button'
import { Feather } from '@expo/vector-icons';

const COLORS = {primary: '#062156', white: '#fff'};

const LoginSCreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.white}}>
      <StatusBar barStyle = "dark-content" hidden = {false}  translucent = {true}/>
      <View>
        <View>
        <Image style={{marginTop:50, marginLeft:12}} source={require('../assets/close.png')} />
        </View>
      <Text style={{color:COLORS.primary, marginLeft:20,fontSize:25}} >Log In</Text>
      <Text style={{color:COLORS.primary,fontSize:14,marginTop:5, marginLeft:20}} >Securely login to your SFS account</Text>
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               placeholder = "Your Email"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>
            
            <TextInput style = {styles.input}
               placeholder = "Password"
               placeholderTextColor = "gray"
               autoCapitalize = "none">
               </TextInput>
               <Feather style={{alignSelf:'flex-end',position:'absolute',top:110,right:20}} name="eye" size={22} color="gray" />
               </View>
               <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> LOGIN </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPscreen')}
               style = {styles.forgotpbtn}>
               <Text style = {styles.forgotpText}> Forgot password</Text>
           
            </TouchableOpacity>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Image  style={{alignSelf:'center',marginTop:49}} source={require('../assets/Unlock.png')}/>
              </TouchableOpacity>
              <Text style={{alignSelf:'center',fontSize:12,color:'gray',marginTop:20}}>Or login with </Text>
            </View>
            <Button />
        </View>
    </SafeAreaView>
  );
};

export default LoginSCreen;

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
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
  },
  forgotpbtn:{
    alignSelf:'center',
    marginTop:30
  },

  forgotpText:{
    fontSize:15,
    color:COLORS.primary
  },
  

  



})