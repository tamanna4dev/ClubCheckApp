import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, isSecondary }) => (
  <TouchableOpacity
    style={[styles.button, isSecondary && styles.secondaryButton]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, isSecondary && styles.secondaryText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#54177C',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#54177C',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#54177C',
  },
});

export default CustomButton;
