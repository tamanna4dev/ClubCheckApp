import React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import CustomTextInput from '../components/TextInput';
import CustomButton from '../components/Button';

const OTPMobileNoScreen = ({navigation}) => (
  
   <View style={styles.container}>
      <Text style={styles.title}>Continue With Phone</Text>
      <CustomTextInput placeholder="Mobile Number" />
      <CustomButton title="Continue" onPress={() => navigation.navigate('OTPVerificationScreen')} />
    </View>

);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent:'center'
  },
 title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#54177C',
      marginBottom: 20,
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    
  },
});

export default OTPMobileNoScreen;