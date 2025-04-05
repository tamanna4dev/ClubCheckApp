import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Image 
} from "react-native";

// Importing VerificationUI screen for navigation (assuming it's already in your navigator stack)
import VerificationUI from './VerificationUI';

export default function NotDoneYet({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.appName}>
          ClubCheck <Text style={styles.checkmark}>✔</Text>
        </Text>
      </View>

      {/* Info Section with Benefits List */}
      <View style={styles.infoSection}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.infoText}>NOT DONE YET!!!!</Text>
        </View>

        <View style={{ padding: 15 }}>
          <Text style={styles.benefit}>1. Ad-Free Experience</Text>
          <Text style={styles.benefit}>2. Priority Booking & Fast-Pass Entry</Text>
          <Text style={styles.benefit}>3. Exclusive Events & Deals</Text>
          <Text style={styles.benefit}>4. Faster Support & Verification</Text>
        </View>
      </View>

      {/* Main Content Section */}
      <View style={styles.mainContent}>
        
        {/* Promo Text */}
        <Text style={styles.ClubButtonText}>Club Check Premium!</Text>

        {/* "I got it" Button with icon */}
        <TouchableOpacity 
          style={styles.gotButton}
          onPress={() => navigation.navigate('VerificationUI')}
          accessibilityLabel="Proceed to verification"
        >
          <Text style={styles.gotButtonText}>I got it!</Text>
          <Image 
            source={require('../images/14.png')} 
            style={{ width: 20, height: 20, resizeMode: 'contain' }}
          />
        </TouchableOpacity> 

        {/* Promo Footer Box */}
        <View style={styles.promoBox}>
          <Text style={styles.promoText}>Unlock VIP Access &</Text>
          <Text style={styles.promoText}>More with Premium Membership</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// StyleSheet Section
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080221", // Dark purple background
    alignItems: "center",
    padding: 20,
  },
  header: {
    marginBottom: 15,
  },
  appName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  checkmark: {
    color: "#9370DB", // Light purple
  },
  infoSection: {
    backgroundColor: "#585B78",
    padding: 7,
    borderRadius: 15,
    width: "90%",
    marginVertical: 80,
  },
  infoText: {
    color: "#FF0000",
    fontSize: 22,
    fontWeight: "900",
    textAlign: 'center',
  },
  benefit: {
    color: "#CCCCCC",
    fontSize: 13,
    marginBottom: 5,
  },
  mainContent: {
    alignItems: "center",
    gap: 10, // if gap doesn't work on your version, use marginBottom on children
  },
  ClubButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "400",
    marginBottom: 10,
  },
  gotButton: {
    backgroundColor: "#585B78",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 13,
  },
  gotButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: '500',
  },
  promoBox: {
    backgroundColor: '#403F49',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  promoText: {
    color: '#010101', // changed to white for better visibility
    fontSize: 9,
  }
});
