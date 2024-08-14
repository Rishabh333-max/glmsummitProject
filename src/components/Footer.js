import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image source={require('../../assets/images/path.png')} style={styles.logo} />
      <Image source={require('../../assets/images/glmLogo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 134,
    height: 52,
    resizeMode: 'contain',
  },
});

export default Footer;
