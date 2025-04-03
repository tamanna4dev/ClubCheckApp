import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>ClubCheck</Text>
      <Text style={styles.successText}>Your verification is complete!</Text>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => Alert.alert("Thank you!", "Verification complete!")}
      >
        <Text style={styles.actionText}>Finish</Text>
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
  successText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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

export default SuccessScreen;
