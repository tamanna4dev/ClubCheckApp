import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

const { width } = Dimensions.get('window');

const PremiumUI = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          ClubCheck <Text style={styles.checkMark}>✔</Text>
        </Text>
      </View>

      {/* Benefits List */}
      <View style={styles.benefitsBox}>
        <Text style={styles.benefitText}>1. Ad-Free Experience</Text>
        <Text style={styles.benefitText}>2. Priority Booking & Fast-Pass Entry</Text>
        <Text style={styles.benefitText}>3. Exclusive Events & Deals</Text>
        <Text style={styles.benefitText}>4. VIP Status & Perks</Text>
        <Text style={styles.benefitText}>5. Faster Support & Verification</Text>
      </View>

      {/* Premium Section */}
      <View style={styles.premiumSection}>
        <Text style={styles.premiumTitle}>Club Check Premium!</Text>

 <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.buttonDisabled}>
        <View style={{flexDirection: "row", gap: 20}}>
          <Text style={styles.buttonText}>I got it!</Text>
          <Image source={require('../images/14.png')} style={{marginTop:2}} />
        </View>
  </TouchableOpacity>

<View style={{backgroundColor:'#403F49',padding:10,borderRadius:50,paddingHorizontal:25,marginVertical:15}}>
        <Text style={styles.premiumSubtext}>
          Unlock VIP Access &{`\n`}More with Premium Membership
        </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080221',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  checkMark: {
    color: '#6B4EFF',
    fontWeight: 'bold',
  },
  benefitsBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: width * 0.9,
    borderRadius: 15,
    padding: 20,
    marginBottom: 60,
  },
  benefitText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 5,
  },
  premiumSection: {
    alignItems: 'center',
  },
  premiumTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  premiumButton: {
    backgroundColor: '#6B4EFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 15,
    width: width * 0.7,
  },
  premiumButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 10,
  },
  premiumSubtext: {
    color: '#010101',
    fontSize: 8,
    textAlign: 'center',
  
  },
  buttonDisabled: {
    // width: "50%",
    backgroundColor: "rgba(210, 199, 221, 0.15)",
    paddingVertical: 10,
    borderRadius: 35,
    alignItems: "center",
    marginTop: 10,
    padding:20
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default PremiumUI;
