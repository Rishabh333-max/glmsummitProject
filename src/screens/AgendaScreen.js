import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar, Image } from 'react-native';
import Header from '../components/Header';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const AgendaScreen = () => {
  const [selectedDate, setSelectedDate] = useState('10');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const formattedDate = moment().format('MMMM D');
  const navigation=useNavigation()

  const dates = [
    { day: 'Sat', date: '10' },
    { day: 'Sun', date: '11' },
    { day: 'Mon', date: '12' },
    { day: 'Tue', date: '13' },
  ];

  const events = {
    '10': [
      {
        id: 1,
        title: 'Breakfast',
        location: 'Coral Lounge',
        time: '07:30 AM to 08:30 AM',
        icon: require('../../assets/images/folk.png'),
        speaker: '',
        attendees: 26,
        notes: 0,
        files: 0,
        label: 'Network at Breakfast',
        labelColor: '#94061F',
        labelIcon:require('../../assets/images/breakfast.png'),
        labelBackColor:'#FFEEF1'
      },
      {
        id: 2,
        title: 'Keynote: Watson the Future',
        location: 'Grand Ballroom B',
        time: '07:30 AM to 08:30 AM',
        icon: require('../../assets/images/video.png'),
        speaker: 'Guruduth Banavar',
        attendees: 26,
        notes: 0,
        files: 0,
        label: 'Win a Prize',
        labelColor: '#FF9900',
        labelIcon:require('../../assets/images/trophy.png'),
        labelBackColor:'#FFF7E1'
      },
      {
        id: 3,
        title: 'Lightning Session',
        location: 'Grand Ballroom B',
        time: '07:30 AM to 08:30 AM',
        icon: require('../../assets/images/video.png'),
        speaker: 'Guruduth Banavar',
        attendees: 26,
        notes: 0,
        files: 0,
        label: 'Network at Breakfast',
        labelColor: '#80BC52',
        labelIcon:require('../../assets/images/greenBreakfast.png'),
        labelBackColor:'#F7FFF1'
      },
    ],
    '11': [
      {
        id: 4,
        title: 'Breakfast',
        location: 'Grand Ballroom A',
        time: '08:00 AM to 09:00 AM',
        icon: require('../../assets/images/folk.png'),
        speaker: '',
        attendees: 30,
        notes: 0,
        files: 0,
        label: 'Morning Networking',
        labelColor: '#94061F',
        labelIcon:require('../../assets/images/breakfast.png'),
        labelBackColor:'#FFEEF1'
      },
    ],
    '12': [
      {
        id: 5,
        title: 'Workshop: AI in Healthcare',
        location: 'Room 305',
        time: '09:00 AM to 10:00 AM',
        icon: require('../../assets/images/video.png'), 
        speaker: 'Dr. Smith',
        attendees: 50,
        notes: 2,
        files: 1,
        label: 'Hands-On',
        labelColor: '#80BC52',
        labelIcon:require('../../assets/images/greenBreakfast.png'),
        labelBackColor:'#F7FFF1'
      },
    ],
    '13': [
      {
        id: 6,
        title: 'Panel Discussion: Future of AI',
        location: 'Room 101',
        time: '10:00 AM to 11:00 AM',
        icon: require('../../assets/images/video.png'), 
        speaker: 'Multiple Speakers',
        attendees: 75,
        notes: 5,
        files: 3,
        label: 'Q&A Session',
        labelColor: '#FF9900',
        labelIcon:require('../../assets/images/trophy.png'),
        labelBackColor:'#FFF7E1'
      },
    ],
  };

 
  const filteredEvents = events[selectedDate] || [];

  return (
    <View style={styles.container}>
           <StatusBar
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent={true}
      />
      <View style={styles.topBlur} />
   <Header onPress={()=>navigation.goBack()} backArrow image={require('../../assets/images/hamburger.png')} title={'Agenda'}/>
   <View style={{marginVertical:20,flexDirection:"row"}}>
<Image source={require('../../assets/images/redCalender.png')} style={{height:20,width:20,resizeMode:"contain"}}/>
<Text style={{fontSize:18,lineHeight:22,color:'#000',marginHorizontal:10}}>{formattedDate}</Text>
   </View>
      <FlatList
        horizontal
        data={dates}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dateButton,
              selectedDate === item.date && styles.selectedDateButton,
            ]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text
              style={[
                styles.dateText,
                selectedDate === item.date && styles.selectedDateText,
              ]}
            >
              {item.date}
            </Text>
            <Text style={[styles.dayText,selectedDate === item.date &&styles.selectedDateText]}>{item.day}</Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.eventCard,
              selectedEvent === item.id ? styles.selectedEventCard:styles.selectedEventCardGray,
            ]}
            onPress={() => setSelectedEvent(item.id)}
          >
            <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:1}}>
           <View>
            <View style={styles.eventHeader}>
            <Image source={item.icon} style={styles.eventIcon}/>
              <View>
                <Text style={styles.eventTitle}>{item.title}</Text>
              </View>
            </View>
            <View style={styles.eventHeader}>
            <Image source={require('../../assets/images/location.png')} style={styles.eventIcon}/>
              <View>
                <Text style={styles.eventLocation}><Text style={{color:'#979797',fontSize:16}}>Location:</Text> {item.location}</Text>
              </View>
            </View>
            </View>
            <View style={{backgroundColor:"#F2FBFF",padding:10,borderRadius:40}}>
            <Image source={require('../../assets/images/blueCalender.png')} style={{height:40,width:40,resizeMode:"contain"}}/>
            </View>
            </View>
            <View style={styles.eventHeader}>
            <Image source={require('../../assets/images/clockwise.png')} style={styles.eventIcon}/>
              <View>
                <Text style={styles.eventTimeZone}>{item.time}</Text>
              </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <View>
            {item.speaker && (
                    <View style={styles.eventHeader}>
                    <Image source={require('../../assets/images/crowd.png')} style={[styles.eventIcon,{resizeMode:"contain"}]}/>
                      <View>
                        <Text style={styles.eventLocation}><Text style={{color:'#979797',fontSize:16}}>Speaker:</Text> {item.speaker}</Text>
                      </View>
                    </View>
            )}
            <View style={{flexDirection:"row",marginHorizontal:30,marginVertical:10}}>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
<View style={{flexDirection:"row"}}>
  <View style={{height:20,width:20,borderRadius:60,backgroundColor:"#EEF2FF",justifyContent:"center",alignItems:"center",padding:10}}>
  <Image source={require('../../assets/images/userKind.png')} style={{height:14,width:14}}/>
  </View>
<Text style={styles.attendees}>{item.attendees}</Text>
</View>
<View style={{flexDirection:"row",marginLeft:15}}>
<View style={{height:20,width:20,borderRadius:40,backgroundColor:"#EEF2FF",justifyContent:"center",alignItems:"center",padding:10}}>
  <Image source={require('../../assets/images/dill.png')} style={{height:14,width:14}}/>
  </View>
<Text style={styles.attendees}>{item.notes}</Text>
</View>
<View style={{flexDirection:"row",marginLeft:15}}>
<View style={{height:20,width:20,borderRadius:40,backgroundColor:"#EEF2FF",justifyContent:"center",alignItems:"center",padding:10}}>
  <Image source={require('../../assets/images/mess.png')} style={{height:14,width:14}}/>
  </View>
<Text style={styles.attendees}>{item.files}</Text>
</View>
<View style={{minHeight:32,backgroundColor:item.labelBackColor,padding:10,borderRadius:10,flexDirection:"row",justifyContent:"center",alignItems:"center",marginHorizontal:5,bottom:10}}>
              <Image source={item.labelIcon} style={{width:11,height:11}}/>
              <Text style={{color:item.labelColor,marginLeft:5}}>{item.label}</Text>
            </View>
</View>
            </View>
            </View>
          
            </View>
         
          </TouchableOpacity>
        )}
      />
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity style={styles.addActivityButton}>
        <Text style={styles.addActivityButtonText}>+ Add my own Activity</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },

topBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 30, 
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  },
  dateButton: {
    marginRight: 16,
    alignItems: 'center',
    paddingBottom: 4,
    height:70,
    width:45,
    justifyContent:"center"
  },
  selectedDateButton: {
    // borderBottomWidth: 4,
    // borderBottomColor: '#D61A3C',
    backgroundColor:'#94061F',
    borderRadius:10
  },
  dateText: {
    fontSize: 18,
    color: '#333',
  },
  selectedDateText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  dayText: {
    fontSize: 12,
    color: '#999',
  },
  eventCard: {
    backgroundColor: '#fff',
    // padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
    minHeight:150
  },
  selectedEventCard: {
    borderLeftColor: '#94061F',
  },
  selectedEventCardGray: {
    borderLeftColor: '#D9D9D9',
  },
  eventHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 8,
  },
  eventIcon: {
    fontSize: 24,
    // marginRight: 8,
    tintColor:'#979797',
    marginHorizontal:10
  },
  eventTimeZone:{
    fontSize: 14,
    // marginRight: 8,
    tintColor:'#979797',
    marginHorizontal:10
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  eventTimeZone:{
    fontSize: 14,
    fontWeight: '200',
    color: '#333',
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
  },
  eventTime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  eventSpeaker: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  eventFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  attendees: {
    fontSize: 12,
    color: '#666',
    marginLeft:5
  },
  notes: {
    fontSize: 12,
    color: '#666',
  },
  files: {
    fontSize: 12,
    color: '#666',
  },
  eventLabel: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#fff',
    fontSize: 12,
  },
  addActivityButton: {
    backgroundColor: '#94061F',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    
    width:200
  },
  addActivityButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AgendaScreen;
