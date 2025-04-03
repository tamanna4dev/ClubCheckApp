import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,Image } from "react-native";

export default function VerifyScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.appName}>
          ClubCheck <Text style={styles.checkmark}>✔</Text>
        </Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Get Verified &</Text>
        <Text style={styles.title1}>Explore The City</Text>

         
        <Image
        source={require('../images/13.png')}
        style={styles.Image}
      />
        
        <TouchableOpacity 
  style={styles.verifyButton}
  onPress={() => navigation.navigate('VerificationUI')}
>
  <Text style={styles.verifyButtonText}>Verify Now!</Text>
</TouchableOpacity> 
      </View>

      {/* Information Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>Why Verify Your ID?</Text>
        <Text style={styles.benefit}>1. Skip the Line ✔</Text>
        <Text style={styles.benefit}>2. Enhance Security ✔</Text>
        <Text style={styles.benefit}>3. Get Rewards & Discounts ✔</Text>
        <Text style={styles.benefit}>4. Unlock VIP & Premium Features ✔</Text>
      </View>

      {/* Secondary Button */}
      <TouchableOpacity style={styles.laterButton}>
        <Text style={styles.laterButtonText}>Later</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080221", // Dark purple background
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  header: {
    marginTop: 20,
  },
  appName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  checkmark: {
    color: "#9370DB", // Light purple
  },
  mainContent: {
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 19,
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  title1: {
    fontSize: 19,
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 10,

  },
  Image: {
    
       marginVertical: 20,
  },
  verifyButton: {
    backgroundColor: "#480DBE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  verifyButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: '500'
  },
  infoSection: {
    backgroundColor: "#010101",  
    padding: 25,
    borderRadius: 15,
    width: "100%",
    alignItems: "flex-start",
    marginVertical:10
  },
  infoText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  benefit: {
    color: "white",
    fontSize: 13,
    marginVertical: 5,
  },
  laterButton: {
    marginBottom: 20,
    backgroundColor:'#480DBE',
     padding:5,
     borderRadius:15,
     paddingVertical: 5,
     paddingHorizontal: 15,
  },
  laterButtonText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "400",
  },
});
