import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/Button";

const VerificationUI = () => {
  const [modalVisible, setModalVisible] = React.useState(true);
  const navigation = useNavigation();

  const handleAllow = () => {
    setModalVisible(false);
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        console.log("Image captured:", result.uri);
      }
    } else {
      alert("Camera permissions are required!");
    }
  };

  const navigateToEmailForm = () => {
    navigation.navigate("EmailForm");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>ClubCheck</Text>
      </View>

      {/* Main Content */}
      <Text style={styles.title}>Get Verified &{`\n`}Explore The City</Text>

      {/* Modal for Camera Access */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Allow Camera Access for your ID Verification!
            </Text>
            <TouchableOpacity style={styles.allowButton} onPress={handleAllow}>
              <Text style={styles.allowButtonText}>Allow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Image source={require('../images/13.png')} style={styles.image} />

      {/* Buttons */}
      <TouchableOpacity onPress={openCamera} style={styles.buttonDisabled}>
        <View style={{ flexDirection: "row", gap: 225 }}>
          <Text style={styles.buttonText}>Scan ID</Text>
          <Image source={require('../images/14.png')} style={{ marginTop: 2 }} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={openCamera} style={styles.buttonDisabled}>
        <View style={{ flexDirection: "row", gap: 189 }}>
          <Text style={styles.buttonText}>Foto of you</Text>
          <Image source={require('../images/14.png')} style={{ marginTop: 2 }} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToEmailForm} style={styles.buttonDisabled}>
        <View style={{ flexDirection: "row", gap: 237 }}>
          <Text style={styles.buttonText}>Email</Text>
          <Image source={require('../images/14.png')} style={{ marginTop: 2 }} />
        </View>
      </TouchableOpacity>
      
        <TouchableOpacity style={styles.verifyButton} onPress={() => navigation.navigate('CongratulationsScreen')}>
        <Text style={styles.verifyButtonText}>Submit</Text>
      </TouchableOpacity> 
      {/* LoginScreen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080221",
    alignItems: "center",
    paddingTop: 50,
  },
  header: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginTop: 100,
    lineHeight: 30,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#18122B",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  allowButton: {
    backgroundColor: "#5B3EAA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  allowButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonDisabled: {
    width: "80%",
    backgroundColor: "rgba(210, 199, 221, 0.15)",
    paddingVertical: 15,
    borderRadius: 35,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
 verifyButton: {
    backgroundColor: "#480DBE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 20
  },
  verifyButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: '500'
  },
});

export default VerificationUI;
