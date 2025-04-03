import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native'; // Important: Add NavigationContainer
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import OTPVerificationScreen from '../screen/OTPVerificationScreen';
import OTPMobileNoScreen from './../screen/OTPMobileNoScreen';
import Details from './../screen/Details';
import MainScreen from './../screen/MainScreen';
import ScanScreen from './../screen/ScanScreen';
import ProcessingScreen from './../screen/ProcessingScreen';
import SuccessScreen from './../screen/SuccessScreen';
import HomeScreen from './../screen/HomeScreen';
import BottomNavigator from './BottomNavigator';
import EventsScrren from './../screen/EventsScrren';
import VerifyScreen from './../screen/VerifyScreen';
import VerificationUI from './../screen/VerificationUI';
import EmailForm from './../screen/EmailForm';
import PremiumUI from './../screen/PremiumUI';
import DrawerNavigator from './DrawerNavigator';
import RegisterScreen from './../screen/RegisterScreen.';
import ClubScreen from './../screen/ClubScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    // <NavigationContainer> {/* Wrap with NavigationContainer */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="OTPMobileNoScreen" component={OTPMobileNoScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="ProcessingScreen" component={ProcessingScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="EventsScrren" component={EventsScrren} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
        <Stack.Screen name="VerificationUI" component={VerificationUI} />
        <Stack.Screen name="EmailForm" component={EmailForm} />
        <Stack.Screen name="PremiumUI" component={PremiumUI} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ClubScreen" component={ClubScreen} />

      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigator;
