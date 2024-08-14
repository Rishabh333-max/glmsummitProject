import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import AgendaScreen from '../screens/AgendaScreen';
import TravelDetails from '../screens/TravelDetails';
import SpeakerScreen from '../screens/SpeakerScreen';
import NetworkingScreen from '../screens/NetworkingScreen';

const AppStack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <AppStack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Main" component={BottomTabNavigator} />
      <AppStack.Screen name="Profile" component={ProfileScreen} />
      <AppStack.Screen name="Agenda" component={AgendaScreen} />
      <AppStack.Screen name="TravelDetails" component={TravelDetails} />
      <AppStack.Screen name="SpeakerScreen" component={SpeakerScreen} />
      <AppStack.Screen name="Network" component={NetworkingScreen} />
    </AppStack.Navigator>
  );
}
