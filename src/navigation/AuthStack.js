import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpScreen from '../screens/OtpScreen';
import LoginScreen from '../screens/LoginScreen';

const AuthStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Otp" component={OtpScreen} />
    </AuthStack.Navigator>
  );
}
