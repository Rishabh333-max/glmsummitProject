import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomTabsScreen from '../components/BottomTabsScreen';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import TabNavigator from '../components/TabNavigator';

const TravelDetails = () => {
    const navigation=useNavigation()
  const [checkInDate, setCheckInDate] = useState(new Date(2024, 0, 8));
  const [checkOutDate, setCheckOutDate] = useState(new Date(2024, 2, 8));
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const onChangeCheckIn = (event, selectedDate) => {
    const currentDate = selectedDate || checkInDate;
    setShowCheckInPicker(Platform.OS === 'ios');
    setCheckInDate(currentDate);
  };

  const onChangeCheckOut = (event, selectedDate) => {
    const currentDate = selectedDate || checkOutDate;
    setShowCheckOutPicker(Platform.OS === 'ios');
    setCheckOutDate(currentDate);
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
     <Header twoIcons={true} title={"Travel Details"} propStyle={{marginHorizontal:20,marginTop:40}} backArrow onPress={()=>navigation.goBack()}/>

       <TabNavigator
        tabs={['Flights', 'Hotel']} 
        activeTab={activeTab} 
        onTabPress={handleTabPress} 
      />
      <ScrollView >
      <View style={{backgroundColor:'#E0E7F2',flex:1,marginBottom:100}}>
      <Text style={styles.lastUpdatedText}>Last updated: 7/19/23, 2:51 AM ET</Text>
      <View style={styles.hotelDetailsContainer}>
        <View style={styles.hotelInfo}>
          <Image source={require('../../assets/images/hotel.png')} style={{height:43,width:40}} />
          <Text style={styles.hotelName}>Renaissance Downtown Hotel</Text>
        </View>
        <View style={styles.dateContainer}>
  <TouchableOpacity
    style={styles.dateBox}
    onPress={() => setShowCheckInPicker(true)}
  >
    <Text style={styles.labelText}>Date</Text>
    <View style={styles.dateInput}>
      <Icon name="calendar" size={20} color="#666" />
      <Text style={styles.dateText}>{formatDate(checkInDate)}</Text>
    </View>
  </TouchableOpacity>

  <Text style={styles.toText}>To</Text>

  <TouchableOpacity
    style={styles.dateBox}
    onPress={() => setShowCheckOutPicker(true)}
  >
    <Text style={styles.labelText}>Date</Text>
    <View style={styles.dateInput}>
      <Icon name="calendar" size={20} color="#666" />
      <Text style={styles.dateText}>{formatDate(checkOutDate)}</Text>
    </View>
  </TouchableOpacity>
</View>
<Text style={styles.hotelHeading}>ADDRESS</Text>
        <Text style={styles.hotelAddress}>
          Gera Imperium Green, Mala, Neugi Nagar, Panaji, Goa 403001
        </Text>
        <Image source={require('../../assets/images/horizontalRule.png')} style={[styles.horizontalLine,{width:'90%'}]}/>
        <View style={{flexDirection:"row",justifyContent:"space-between",}}>
<View>
<Text style={styles.hotelHeading}>PHONE</Text>
        <Text style={styles.hotelAddress}>
        07940050179
        </Text>
</View>
<Image style={{height:50,width:1}} source={require('../../assets/images/verticalRule.png')}/>
<Text style={[styles.hotelAddress,{maxWidth:116}]}>
RESERVED BY Malhotra, Kunal
        </Text>
        </View>
        <Image source={require('../../assets/images/horizontalRule.png')} style={[styles.horizontalLine,{width:'90%'}]}/>
        <View>
<Text style={styles.hotelHeading}>ROOM TYPE</Text>
        <Text style={[styles.hotelAddress,{marginBottom:20}]}>
        Suit Room
        </Text>
</View>
      </View>
      <View style={{height:250,backgroundColor:"#FFFFFF",marginHorizontal:20,borderRadius:20,marginVertical:20}}>
        <TouchableOpacity style={{padding:10}}>
        <Image source={require('../../assets/images/map.png')} style={{width:'100%',borderRadius:20}}/>
        </TouchableOpacity>
        <View style={{marginHorizontal:20,marginVertical:5}}>
<Text style={styles.hotelHeader}>Hotel Updates</Text>
<Text style={styles.hotelSubHeader}>Please check with the hotel to receive the latest updates.</Text>
        </View>
      </View>
      {showCheckInPicker && (
        <DateTimePicker
          value={checkInDate}
          mode="date"
          display="default"
          onChange={onChangeCheckIn}
        />
      )}
      {showCheckOutPicker && (
        <DateTimePicker
          value={checkOutDate}
          mode="date"
          display="default"
          onChange={onChangeCheckOut}
        />
      )}
     
</View>
</ScrollView>
   <BottomTabsScreen/>
   

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 4,
    borderBottomColor: '#900',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#900',
    fontWeight: 'bold',
  },
  lastUpdatedText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginVertical: 15,
    marginHorizontal:20
  },
  hotelDetailsContainer: {
    backgroundColor: '#f5f5f5',
    // padding: 16,
    borderRadius: 10,
    marginHorizontal:20
  },
  hotelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight:92,
    padding:25,
    backgroundColor: '#2d3f50',
  },
  hotelName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#2d3f50',
    marginHorizontal:20,
    borderRadius: 4,
  },
   dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal:10
  },
  dateBox: {
    width: '45%',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    position: 'relative',
  },
  labelText: {
    fontSize: 12,
    color: '#666',
    position: 'absolute',
    top: -9,
    left: 10,
    paddingHorizontal: 5,
    zIndex: 1,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10, 
  },
  dateText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  toText: {
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#666',
  },
  hotelAddress: {
    fontSize: 16,
    color: '#000',
    marginHorizontal:20,
    marginVertical: 4,
    fontWeight:'500'
  },
  hotelHeading: {
    fontSize: 16,
    color: '#747474',
    marginHorizontal:20
  },
  hotelPhone: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
  },
  horizontalLine:{
    marginVertical:10,
    marginHorizontal:20,
  },
  reservedBy: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
  },
  roomType: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
  },
  map: {
    height: 200,
    borderRadius: 8,
    marginVertical: 16,
  },
  mapButton: {
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#900',
    borderRadius: 8,
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    bottom:0,
    left:0,
    right:0,
    position:"absolute",
    marginHorizontal:20
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
  hotelHeader:{
    fontSize:18,
    fontWeight:"400",
    lineHeight:20,
    color:'#000'
  },
  hotelSubHeader:{
    fontSize:18,
    fontWeight:"300",
    lineHeight:20,
    color:'#000'
  },
});

export default TravelDetails;
