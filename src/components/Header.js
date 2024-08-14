import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Header = ({image, title, twoIcons, backArrow, onPress, propStyle}) => {
  return (
    <View style={[styles.header, propStyle]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {backArrow && (
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../assets/images/backArrow.png')}
              style={{width: 24, height: 14}}
            />
          </TouchableOpacity>
        )}
        <Text style={[styles.headerText, {marginLeft: backArrow ? 15 : 0}]}>
          {title}
        </Text>
      </View>
      {image ? (
        <Image source={image} style={{width: 26, height: 26}} />
      ) : twoIcons ? (
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/images/search.png')}
            style={{width: 26, height: 26}}
          />
          <Image
            source={require('../../assets/images/notification.png')}
            style={{
              width: 26,
              height: 26,
              marginLeft: 20,
              tintColor: 'black',
              resizeMode: 'contain',
            }}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Header;
