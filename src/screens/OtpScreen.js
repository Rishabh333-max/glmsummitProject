import React, { useContext, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation,CommonActions } from '@react-navigation/native';
import { AuthContext } from './AuthContext';

const OTPScreen = () => {
const navigation=useNavigation()
const { setIsAuthenticated } = useContext(AuthContext);

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const handleNavigation = () => {
    console.log('Available Routes:', navigation.getState().routes);
    navigation.navigate('Main', { screen: 'Home' });
  };

  const handleChangeText = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace') {
      let newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };
  
  const verifyOtp = async () => {
    if (otp.some((digit) => digit === '')) {
      Alert.alert('Error', 'Please enter a valid OTP.');
      return;
    }

    const isOtpValid = true;

    if (isOtpValid) {
      await AsyncStorage.setItem('userToken', 'some-auth-token');
      setIsAuthenticated(true);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Main', params: { screen: 'Home' } }],
        })
      );
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
        </View>

        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>An OTP has been sent to your entered email. Please enter the OTP to proceed.</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              style={[styles.otpInput,{marginHorizontal:index==0&&index==otp.length-1?0:5}]}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the OTP? <Text style={styles.resendLink}>Resend OTP</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.verifyButton} onPress={verifyOtp}>
          <Text style={styles.verifyButtonText}>Verify OTP</Text>
        </TouchableOpacity>

        <Footer />
      </ScrollView>
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  otpInput: {
    width: 78,
    height: 80,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal:5
  },
  resendContainer: {
    marginBottom: 30,
  },
  resendText: {
    fontSize: 14,
    color: '#666',
  },
  resendLink: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  verifyButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#800020',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:100
  },
  verifyButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OTPScreen;
