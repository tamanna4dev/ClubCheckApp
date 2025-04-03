import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

const RegisterScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>ClubCheck</Text>
          <Text style={styles.logoIcon}>✔</Text>
        </View>

        {/* Register Box */}
        <View style={styles.registerBox}>
          <Text style={styles.title}>Register</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>USER NAME</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>PASSWORD</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>CONFIRM PASSWORD</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details")}>
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.registerText}>Sign in</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#080221",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logoContainer: {
    backgroundColor: "#4C258D",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  logoText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoIcon: {
    color: "white",
    marginLeft: 4,
    fontSize: 20,
  },
  registerBox: {
    backgroundColor: "#390068",
    width: "90%",
    maxWidth: 340,
    padding: 24,
    borderRadius: 20,
    alignItems: "center",
    elevation: 6, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#4C258D",
    color: "white",
    padding: 12,
    borderRadius: 12,
    width: "100%",
  },
  button: {
    backgroundColor: "#7B689A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: 340,
    marginTop: 20,
  },
  footerText: {
    color: "#fff",
    fontSize: 12,
  },
  registerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
};
