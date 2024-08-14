import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import BottomTabsScreen from '../components/BottomTabsScreen';
import { useNavigation } from '@react-navigation/native';

const speakers = [
  {
    id: '1',
    name: 'Dr. Robert Thompson',
    title: 'Head of Product Development at Innovatech',
    imageUrl: require('../../assets/images/speakerPhoto.png'),
  },
  {
    id: '2',
    name: 'Ms. Emily Zhang',
    title: 'Marketing Director at Global Enterprises',
    imageUrl: require('../../assets/images/speakerPhoto.png'),

  },
  {
    id: '3',
    name: 'Mr. David Kim',
    title: 'Head of Product Development at Innovatech',
    imageUrl: require('../../assets/images/speakerPhoto.png'),

  },
  {
    id: '4',
    name: 'Dr. Ayesha Khan',
    title: 'Senior Research Scientist at BioTech Innovations',
    imageUrl: require('../../assets/images/speakerPhoto.png'),
  },
  {
    id: '5',
    name: 'Dr. Shashank Pathak',
    title: 'Senior Research Scientist at BioTech Innovations',
    imageUrl: require('../../assets/images/speakerPhoto.png'),
  },
  {
    id: '6',
    name: 'Dr. Joshi',
    title: 'Senior Research Scientist at BioTech Innovations',
    imageUrl: require('../../assets/images/speakerPhoto.png'),
  },


];

const SpeakerCard = ({ speaker }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={ speaker.imageUrl } style={styles.speakerImage} />
      <Text style={styles.speakerName} numberOfLines={1}>{speaker.name}</Text>
      <Text style={styles.speakerTitle} numberOfLines={2}>{speaker.title}</Text>
      <TouchableOpacity style={styles.connectButton}>
        <Text style={styles.connectButtonText}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};

const SpeakerScreen = () => {

    const navigation=useNavigation()
  return (
    <View style={styles.container}>

    <Header image={require('../../assets/images/search.png')} twoIcons={true} title={"Speakers"} propStyle={{marginHorizontal:20,marginTop:40}} backArrow onPress={()=>navigation.goBack()}/>
  <View style={{marginBottom:200}}>
  <FlatList
      data={speakers}
      renderItem={({ item }) =>
         <SpeakerCard speaker={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      numColumns={2} 
    />
  </View>
   
   <BottomTabsScreen/>

    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  speakerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  speakerName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#000'
  },
  speakerTitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  connectButton: {
    backgroundColor: '#900',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SpeakerScreen;
