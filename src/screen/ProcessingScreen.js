import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProcessingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>ClubCheck</Text>
      <Text style={styles.processingText}>
        To further verify your identity, please take a real-time selfie.
      </Text>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate("SuccessScreen")}
      >
        <Text style={styles.actionText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0323",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  processingText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "#1b1b33",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  actionText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProcessingScreen;
