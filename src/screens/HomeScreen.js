import { useNavigation } from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from './AuthContext';


const {width} = Dimensions.get('window');


const data = [
  {
    key: '1',
    title: 'Welcome to the GLM Summit 2024',
    date: '24 Monday, October 2024',
  },
  {
    key: '2',
    title: 'Welcome to the GLM Summit 2024',
    date: '24 Monday, October 2024',
  },
  {
    key: '3',
    title: 'Welcome to the GLM Summit 2024',
    date: '24 Monday, October 2024',
  },
];



const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
const navigation=useNavigation()
const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };


const gridItems = [
  {
    icon: 'people',
    label: 'Attendee',
    image: require('../../assets/images/attendee.png'),
    onPress:()=>{

    }
  },
  {
    icon: 'event-note',
    label: 'Agenda',
    image: require('../../assets/images/agenda.png'),
    onPress:()=>{
      navigation.navigate('Agenda')
    }
  },
  {
    icon: 'record-voice-over',
    label: 'Speakers',
    image: require('../../assets/images/speaker.png'),
    onPress:()=>{
      navigation.navigate('SpeakerScreen')
    }
  },
  {
    icon: 'chat',
    label: 'Networking Lounge',
    image: require('../../assets/images/network.png'),
    onPress:()=>{
      navigation.navigate('Network')
    }
  },
  {
    icon: 'assignment',
    label: 'Event Survey',
    image: require('../../assets/images/event.png'),
    onPress:()=>{
      
    }
  },
  {
    icon: 'camera-alt',
    label: 'Selfie Booth',
    image: require('../../assets/images/selfie.png'),
    onPress:()=>{
      navigation.navigate('TravelDetails')
    }
  },
  {
    icon: 'local-shipping',
    label: 'Logistic Details',
    image: require('../../assets/images/logistic.png'),
    onPress:()=>{
      
    }
  },
  {
    icon: 'help-outline',
    label: 'F&Q',
    image: require('../../assets/images/f&q.png'),
    onPress:()=>{
      
    }
  },
  {
    icon: 'support-agent',
    label: 'Help Desk',
    image: require('../../assets/images/helpDesk.png'),
    onPress:()=>{
      
    }
  },
];
  const onScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setActiveIndex(index);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent={true}
      />
      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled 
          onScroll={onScroll} 
          keyExtractor={item => item.key}
          contentContainerStyle={styles.carouselContainer}
          renderItem={({item}) => (
            <ImageBackground
              source={require('../../assets/images/carousel1.png')}
              style={styles.carouselItem}
              imageStyle={{borderRadius: 10}}>
              <View style={styles.topBlur} />
              <View style={styles.header}>
                <TouchableOpacity onPress={handleLogout}>
                <Image
                  style={styles.profilePic}
                  source={require('../../assets/images/userPic.png')}
                />
                </TouchableOpacity>
                <View style={styles.headerText}>
                  <Text style={styles.greeting}>Hello</Text>
                  <Text style={styles.username}>John Anderson</Text>
                </View>
                <Icon name="notifications" size={24} style={styles.icon} />
              </View>
            </ImageBackground>
          )}
        />
        <View style={styles.dotsContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    activeIndex === index ? '#94061F' : '#FFFFFF',
                },
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.flexDir}>
          <View style={styles.box}>
            <Text style={styles.boxText}>GLM</Text>
            <Text style={styles.boxSubText}>SUMMIT</Text>
            <Text style={styles.boxSubText}>2024</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.welcomeText}>
              Welcome to the GLM Summit 2024
            </Text>
            <Text
              style={styles.welcomeDate}>
              24 Monday, October 2024
            </Text>
          </View>
        </View>
        <Image source={require('../../assets/images/aero.png')} style={{height:32,width:32}}/>
      </View>
      <ScrollView>
      <View style={styles.gridContainer}>
       
        {gridItems.map((item, index) => (
  <View key={index} style={styles.gridWrapper}>
    <TouchableOpacity style={styles.gridItem} onPress={item.onPress}>
      <Image source={item.image} style={{width: 36, height: 40}} />
      <Text style={styles.gridLabel}>{item.label}</Text>
    </TouchableOpacity>
    {index % 3 !== 2 && (
      <Image
        source={require('../../assets/images/verticalRule.png')}
        style={[
          styles.verticalLine,
          { height: index >= 6 ? 80 : 180 } 
        ]}
      />
    )}
 {index < 6 && (
      <Image
        source={require('../../assets/images/horizontalRule.png')}
        style={[
          styles.horizontalLine,
          {
            width: (index + 1) % 3 === 0 ? 80 : 200
          }
        ]}
      />
    )}
  </View>
))}
      </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 30,
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
    marginVertical: 10,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  icon: {
    marginLeft: 'auto',
    color: '#000',
  },
  carouselContainer: {
    // paddingLeft: 16,
  },
  carouselItem: {
    width: width,
    height: 270,
    // marginHorizontal: 8,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  topBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 30, 
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    bottom:20
  },
  gridWrapper: {
    width: '33.33%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  gridLabel: {
    marginTop: 8,
    textAlign: 'center',
    color: '#94061F',
  },
  verticalLine: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 2,
    resizeMode: 'stretch',
  },
  horizontalLine: {
    position: 'absolute',
    left: 20,
    right: 40,
    bottom: 0,
    height: 2,
    resizeMode: 'stretch',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:20
  },
  flexDir: {
    flexDirection: 'row',
  },
  box: {
    width: 123,
    height: 126,
    backgroundColor: '#94061F',
    borderRadius: 9,
    bottom: 55,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
  },
  boxSubText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '500',
  },
  textView: {
    left: 40,
    flexWrap: 'wrap',
  },
  welcomeText: {
    width: 140,
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
  },
  welcomeDate:{
    width: 140,
    fontSize: 11,
    color: '#000000',
    fontWeight: '300',
  }
});

export default HomeScreen;
