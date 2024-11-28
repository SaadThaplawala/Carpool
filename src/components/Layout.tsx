import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo/vector-icons
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const slideAnim = new Animated.Value(-300);

  const toggleSidebar = () => {
    const toValue = showSidebar ? -300 : 0;
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setShowSidebar(!showSidebar);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <Sidebar />
      </Animated.View>

      <View style={styles.mainContent}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={toggleSidebar}
        >
          <Ionicons name="menu" size={30} color="#4B0082" />
        </TouchableOpacity>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 2,
    elevation: 2,
  },
  mainContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuButton: {
    padding: 15,
    zIndex: 1,
  },
});

export default Layout;