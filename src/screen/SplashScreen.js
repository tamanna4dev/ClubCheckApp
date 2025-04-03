import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect } from 'react';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignupScreen');   
    }, 2000);

    return () => clearTimeout(timer);  
  }, [navigation]);

  return (
    <View style={styles.container}>
    
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')} style={{backgroundColor:"#54177C",padding:10,borderRadius:20}}>
          <Text style={styles.buttonText}>ClubCheck</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#070138'
  },
 
  buttonText: {
    color: '#FFF',
    fontSize: 14,
  },
});
