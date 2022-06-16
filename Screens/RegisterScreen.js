import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Image, SafeAreaView, Text, View,StyleSheet,TextInput, StatusBar,ScrollView} from 'react-native';
import Button from '../components/Button'

const COLORS = {primary: '#062156', white: '#fff'};

const RegisterScreen = (navigation) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.white}}>
       <ScrollView>
       <StatusBar barStyle = "dark-content" hidden = {false}  translucent = {true}/>
      <View>
        <View>
        <Image style={{marginTop:50, marginLeft:16}} source={require('../assets/close.png')} />
        </View>
      <Text style={{color:COLORS.primary, marginLeft:16,fontSize:25}} >Create Account</Text>
         <Text style ={{color:COLORS.primary, marginLeft:16,fontSize:14,marginTop:5}}>Create a free account and start investing with SFS</Text>
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               placeholder = "Full name"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>
            
            <TextInput style = {styles.input}
               placeholder = "Email Address"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>

<TextInput style = {styles.input}
               placeholder = "Phone number"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>

<TextInput style = {styles.input}
               placeholder = "Password"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>

<TextInput style = {styles.input}
               placeholder = "Referer code"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>

<TextInput style = {styles.input}
               placeholder = "How did you hear about us"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>
               </View>
               <TouchableOpacity onPress={()=>navigation.navigate('CreatePinScreen')}
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
               <Text style = {{alignSelf:'center',fontSize:14,color:COLORS.primary,marginTop:50}}> Already have an Account? Log in</Text>
            </TouchableOpacity>
            <Text style={{alignSelf:'center',fontSize:12,color:'gray',marginTop:20}}>Or Sign up with </Text>
            <View>
               <Button/>
            </View>
            <Text style = {{alignSelf:'center',fontSize:14,color:COLORS.primary,marginTop:50}}>By registering you accept our {'\n'}terms and conditions</Text>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
  }
})