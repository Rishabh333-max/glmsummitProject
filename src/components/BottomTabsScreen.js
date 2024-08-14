import React from 'react';
import { View, TouchableOpacity, StyleSheet,  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


export default function BottomTabsScreen() {
    const navigation=useNavigation()
  return (
    <View style={styles.bottomNav}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:20
      }}>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
    <Icon name="home" size={30} color="#000" />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
    <Icon name="chat" size={30} color="#000" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.qrButton}>
      <Icon name="qr-code" size={40} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Networking')}>
    <Icon name="people" size={30} color="#000" />
    </TouchableOpacity>
    <Icon name="person" size={30} color="#000" />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  qrButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#800000',
    justifyContent: 'center',
    alignItems: 'center',
    top: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
  qrTouchable: {
    top: -10,
  },
  bottomNav: {
    
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    bottom:0,
    left:0,
    right:0,
    position:"absolute",
    // marginHorizontal:20,
    backgroundColor:"#FFFFFF"
  },
  qrButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#900',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
});


