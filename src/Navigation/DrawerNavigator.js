import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* <View style={styles.header}>
        <Text style={styles.name}>I Am Tannu</Text>
        <Text style={styles.phone}>+91 12345-88889</Text>
      </View> */}
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const ScreenPlaceholder = ({ title }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>{title}</Text>
  </View>
);

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Homescreen" component={BottomNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Home" component={ScreenPlaceholder} initialParams={{ title: "Home" }} />
      <Drawer.Screen name="Offers" component={ScreenPlaceholder} initialParams={{ title: "Offers" }} />
      <Drawer.Screen name="Listing" component={ScreenPlaceholder} initialParams={{ title: "Listing" }} />
      <Drawer.Screen name="Bus Detail" component={ScreenPlaceholder} initialParams={{ title: "Bus Detail" }} />
      <Drawer.Screen name="Select Seat" component={ScreenPlaceholder} initialParams={{ title: "Select Seat" }} />
      <Drawer.Screen name="Checkout" component={ScreenPlaceholder} initialParams={{ title: "Checkout" }} />
      <Drawer.Screen name="Payment" component={ScreenPlaceholder} initialParams={{ title: "Payment" }} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#FFD700', // Yellow background
    alignItems: 'center',
    width: 361,
    marginLeft: -13,
    marginTop: -12
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  phone: {
    fontSize: 14,
    color: '#555',
  },
  logoutButton: {
    marginTop: 20,
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  logoutText: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
