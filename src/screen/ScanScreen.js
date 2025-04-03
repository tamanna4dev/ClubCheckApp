import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>ClubCheck</Text>
      {/* <Image
        style={styles.idImage}
        source={{ uri: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" }} // Replace with your image
      /> */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("ProcessingScreen")}
      >
        <Text style={styles.actionText}>Submit</Text>
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
  idImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: "#5a5af7",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  actionText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ScanScreen;
