import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from './../screen/SearchScreen';
import SavedScreen from './../screen/SavedScreen';
import ConnectionScreen from './../screen/ConnectionScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = require('../images/16.png');
              break;
            case 'Search':
              iconSource = require('../images/17.png');
              break;
            case 'Saved':
              iconSource = require('../images/18.png');
              break;
            case 'Connection':
              iconSource = require('../images/19.png');
              break;
            default:
              return null;
          }

          return (
            <Image
              source={iconSource}
              style={[
                styles.tabIcon,
              ]}
            />
          );
        },
        tabBarLabelStyle: { fontSize: 10 },
        tabBarActiveTintColor: '#fff', // Active tab text color
        tabBarInactiveTintColor: '#fff', // Inactive tab text color
        tabBarStyle: {
          backgroundColor: 'rgb(0, 0, 0)', // Set the background color of the tab bar
          borderTopWidth: 0,
        }
      })}>

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Connection" component={ConnectionScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  
  },
});

export default BottomNavigator;
