import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {
  const navigation = useNavigation();

  const menuItems = [
    { title: 'View ride history', screen: 'RideHistory' },
    { title: 'Create new ride', screen: 'CreateRide' },
    { title: 'Cancel ride', screen: 'CancelRide' },
    { title: 'Manage notifications', screen: 'Notifications' },
    { title: 'My profile', screen: 'Profile' },
    { title: 'Settings', screen: 'Settings' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082', // Dark purple color
    paddingTop: 20,
    width: '80%',
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Sidebar;