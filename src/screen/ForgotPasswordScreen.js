import React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import CustomTextInput from '../components/TextInput';
import CustomButton from '../components/Button';

const ForgotPasswordScreen = () => (
  <View style={styles.container}>
    {/* Lock Icon Image */}
    {/* <View style={{ alignItems: 'center' }}>
      <Image source={require('../images/1.png')} style={styles.lockImage} />
    </View> */}

 
      
    <Text style={styles.title}>Forgot Password</Text>
    

    <CustomTextInput placeholder="Enter your email" />

    {/* Send Button */}
    <CustomButton title="Send" onPress={() => {}} />
      
    </View>  
 
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    // marginTop: 60,
    // marginBottom: 30,
    justifyContent:'center'

  },
  lockImage: {
    width: 100, 
    height: 100, 
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    color: '#54177C',
      marginBottom: 40,
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    
  },
});

export default ForgotPasswordScreen;
