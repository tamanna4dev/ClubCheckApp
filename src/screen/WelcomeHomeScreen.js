import { Image, StyleSheet, Text, View , } from 'react-native'
import React, { useEffect } from 'react'

const WelcomeHomeScreen = ({navigation}) => {
     useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('HomeScreen');   
        }, 3000);
    
        return () => clearTimeout(timer);  
      }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/30.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <Image
        source={require("../images/31.png")}
    
      />
      <View style={styles.overlay} />
       
    </View>
  )
}

export default WelcomeHomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',alignItems:'center'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(136, 129, 211, 0.4)', 
  },
})
