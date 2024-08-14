import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList,TouchableOpacity } from 'react-native';
import BottomTabsScreen from '../components/BottomTabsScreen';
import Header from '../components/Header';
import TabNavigator from '../components/TabNavigator';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const attendees = [
  {
    id: '1',
    name: 'Sanjay Kumar Tiwari',
    title: 'Developer, Times',
    color: '#F9D5D3',
  },
  {
    id: '2',
    name: 'Avikshith Shetty',
    title: 'Business Lead, Gpay, Google',
    color: '#D9E9F9',
  },
  {
    id: '3',
    name: 'Girish Mahajan',
    title: 'Lead. Top Merchant Partnerships',
    color: '#D4F9D5',
  },
  {
    id: '4',
    name: 'Sanjay Kumar Tiwari',
    title: 'Developer, Times',
    color: '#F9E3CD',
  },
];

const AttendeeCard = ({ attendee }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.avatar, { backgroundColor: attendee.color }]}>
        <Icon name="person" size={30} color="#000" />
        <View style={styles.onlineIndicator}></View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.attendeeName}>{attendee.name}</Text>
        <Text style={styles.attendeeTitle}>{attendee.title}</Text>
      </View>
      <TouchableOpacity style={styles.arrowContainer}>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const NetworkingScreen = () => {
  const navigation=useNavigation()
  const [activeTab, setActiveTab] = useState(1);

  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
     <Header image={require('../../assets/images/search.png')} twoIcons={true} title={"Networking Lounge"} propStyle={{marginHorizontal:20,marginTop:40}} backArrow onPress={()=>navigation.goBack()}/>
     <TabNavigator
        tabs={['Attendees', 'Received','Request']} 
        activeTab={activeTab} 
        onTabPress={handleTabPress} 
      />
      <ImageBackground source={require('../../assets/images/blackDog.png')} style={{height:160,justifyContent:"center",}}>
<Text style={{fontSize:20,fontWeight:"700",marginHorizontal:20}}>Explore. Connect. Network</Text>
<Text style={{fontSize:16,fontWeight:"400",marginHorizontal:20}}>Start Chat, Email, Business Card Exchange and Schedule Meetings With Attendees</Text>

      </ImageBackground>
      <FlatList
        data={attendees}
        renderItem={({ item }) => <AttendeeCard attendee={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
     <BottomTabsScreen/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    position: 'relative',
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00AB55',
    position: 'absolute',
    top: 5,
    left: 5,
    borderColor: '#fff',
    borderWidth: 2,
  },
  textContainer: {
    flex: 1,
  },
  attendeeName: {
    fontSize: 16,
    fontWeight: '600',
    color:'#000000'
  },
  attendeeTitle: {
    fontSize: 14,
    color: '#666',
  },
  arrowContainer: {
    padding: 5,
  },
});

export default NetworkingScreen;
