import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CustomButton from '../components/Button';

const Details = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Can I get your number?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your number"
        keyboardType="phone-pad"
        value={number}
        onChangeText={setNumber}
      />
      <Text style={styles.label}>What's your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>When is your birthday?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your birthday"
        value={birthday}
        onChangeText={setBirthday}
      />
    
      <CustomButton title="Submit" onPress={() => navigation.navigate('VerifyScreen')} />
      
      {/* VerifyScreen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor:'#fff'
 
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});

export default Details;


 