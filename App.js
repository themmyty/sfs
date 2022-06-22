import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './components/OnboardingScreen';
import HomeScreenWithIvst from './Screens/HomeScreenWithIvst'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ForgotPscreen from './Screens/ForgotPscreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreatePinScreen from './Screens/CreatPinScreen';
import { LogBox } from 'react-native';

import NavigationTab from './components/NavigationTab'
import NavTabWitIvst from './components/NavTabWitIvst'

const Stack = createStackNavigator();

const App = () => {

  LogBox.ignoreLogs(['Warning: ...']); //Hide warnings

  LogBox.ignoreAllLogs();//Hide all warning notifications on front-end

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
          <Stack.Screen name="NavTabWitIvst" component={NavTabWitIvst} />
          <Stack.Screen name="CreatePinScreen" component={CreatePinScreen} />
          <Stack.Screen name="NavigationTab" component={NavigationTab} />

        </Stack.Navigator>
      </NavigationContainer>
  )}


export default App;