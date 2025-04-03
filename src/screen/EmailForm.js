import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const EmailForm = ({navigation}) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
    alert("Email submitted successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type in your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      {/*  */}
      <TouchableOpacity onPress={() => navigation.navigate('PremiumUI')}
 style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080221",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#5B3EAA",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EmailForm;