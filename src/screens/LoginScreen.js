import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Platform, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import Footer from '../components/Footer';


const LoginScreen = () => {

    const navigation=useNavigation()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
        </View>

        <Text style={styles.title}>Login</Text>
        <Text style={styles.welcomeText}>Welcome to <Text style={styles.boldText}>PATH</Text></Text>
        <Text style={styles.subtitle}>Please log in to access the GLM Conference event management system.</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#A9A9A9" />
          <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#A9A9A9" />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A9A9A9" keyboardType="email-address" />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('Otp')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

      </ScrollView>
      <Footer/>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3B0D11',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#94061F',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#94061F',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 140,
    width: '100%',
  },
  logo: {
    width: 134,
    height: 52,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
