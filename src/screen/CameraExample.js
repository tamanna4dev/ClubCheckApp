import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from './CustomButton';

export default function CameraExample() {
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Camera access is required.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      Alert.alert('Image Captured', 'The image was captured successfully.');
      console.log(result.assets[0].uri); // You can use this URI to display or upload the image
    }
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Open Camera" onPress={openCamera} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});

