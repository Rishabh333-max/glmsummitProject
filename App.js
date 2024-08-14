import React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, StyleSheet } from 'react-native';
import AuthStackNavigator from './src/navigation/AuthStack';
import AppStackNavigator from './src/navigation/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './src/screens/AuthContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error clearing user token:', error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setIsAuthenticated(!!token);
    };

    const initialize = async () => {
      await checkAuth();
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    initialize();
  }, []);
  
    console.log('isAuthenticated',isAuthenticated);
  
  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Image source={require('../glmSummit/assets/images/FullSplash.png')} style={styles.splashImage} />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated,logout }}>
     
      <NavigationContainer>
      
        {isAuthenticated ? (
          <AppStackNavigator />
        ) : (
          <AuthStackNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
