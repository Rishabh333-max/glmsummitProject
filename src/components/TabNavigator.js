import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabNavigator = ({ tabs, activeTab, onTabPress }) => {
  return (
    <View style={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tab, activeTab === index && styles.activeTab]}
          onPress={() => onTabPress(index)}
        >
          <Text style={[styles.tabText, activeTab === index && styles.activeTabText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    backgroundColor:"#94051F"
  },
  tab: {
    width:'25%',
    marginHorizontal:20,
    padding: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
  },
  tabText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default TabNavigator;
