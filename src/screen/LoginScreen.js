import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import CustomTextInput from '../components/TextInput';
import CustomButton from '../components/Button';
import { firestore } from '../../firebase.config';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      // Check user in Firestore
      const userDoc = await firestore.collection('users').doc(email).get();

      if (!userDoc.exists) {
        Alert.alert('Error', 'No account found for this email.');
        return;
      }

      const userData = userDoc.data();
      if (userData.password !== password) {
        Alert.alert('Error', 'Incorrect password.');
        return;
      }

      Alert.alert('Success', 'Logged in successfully!');
      navigation.navigate('DrawerNavigator');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <CustomTextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton title="Login" onPress={handleLogin} disabled={loading} />
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgotPasswordScreen')}
      >
        Forgot Password?
      </Text>
      <View style={{ marginTop: 10 }}>
        <CustomButton
          title="Login with OTP"
          onPress={() => navigation.navigate('OTPMobileNoScreen')}
          isSecondary
        />
        <View style={styles.Footercontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.text}>
            Already a member<Text style={styles.link}>LOGIN</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 15,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#1A1965',
    fontSize: 13,
  },
  text: {
    color: '#6c757d',
  },
  link: {
    color: '#54177C',
    fontWeight: 'bold',
  },
  Footercontainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default LoginScreen;
