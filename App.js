import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './components/OnboardingScreen';
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ForgotPscreen from './Screens/ForgotPscreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreatePinScreen from './Screens/CreatPinScreen';
const Stack = createStackNavigator();

const App = () => {

  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ForgotPscreen" component={ForgotPscreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CreatePinScreen" component={CreatePinScreen} />


        </Stack.Navigator>
      </NavigationContainer>
  )}


export default App;