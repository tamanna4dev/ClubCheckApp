import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const CongratulationsScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(true);
  const navigation = useNavigation();

  // Hide modal when user allows permission
  const handleAllow = () => {
    setModalVisible(false);
  };

  // Open camera to capture image
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.canceled && result.assets.length > 0) {
        console.log("Image captured:", result.assets[0].uri);
      }
    } else {
      alert("Camera permissions are required!");
    }
  };

  // Navigate to email form screen
  const navigateToEmailForm = () => {
    navigation.navigate("EmailForm");
  };

  return (
    
    <View style={styles.container}>
      {/* Modal for permissions */}
    

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>ClubCheck</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Get Verified &{`\n`}Explore The City</Text>




<View style={{marginTop:245}}>

      {/* Buttons */}
      <TouchableOpacity
        onPress={openCamera}
        style={[styles.buttonDisabled, modalVisible && { opacity: 0.5 }]}
        disabled={modalVisible}
      >
        <View style={styles.buttonRow}>
          <Text style={styles.buttonText}>Scan ID</Text>
          <Image
            source={require("../images/14.png")}
            style={{ marginTop: 2 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={openCamera}
        style={[styles.buttonDisabled, modalVisible && { opacity: 0.5 }]}
        disabled={modalVisible}
      >
        <View style={styles.buttonRow}>
          <Text style={styles.buttonText}>Foto of you</Text>
          <Image
            source={require("../images/14.png")}
            style={{ marginTop: 2 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={navigateToEmailForm}
        style={[styles.buttonDisabled, modalVisible && { opacity: 0.5 }]}
        disabled={modalVisible}
      >
        <View style={styles.buttonRow}>
          <Text style={styles.buttonText}>Email</Text>
          <Image
            source={require("../images/14.png")}
            style={{ marginTop: 2 }}
          />
        </View>
      </TouchableOpacity>

      {/* Submit Button */}
   
</View>
         <TouchableOpacity
        style={styles.verifyButton}
      >
        <Text style={styles.verifyButtonText}>Submit</Text>
        </TouchableOpacity>

      <View style={styles.overlay} />
      <ImageBackground
  source={require("../images/28.png")}
  style={styles.imageBackgroundFix}
//   imageStyle={{ resizeMode: 'contain' }}
>
  <View style={styles.overlayBoxFix}>
    <Image source={require("../images/29.png")} style={styles.tickIcon} />
    <Text style={styles.congratsTextFix}>Congratulations!</Text>
  </View>
</ImageBackground>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080221",
    alignItems: "center",
    // paddingTop: 50,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
  header: {
    position: "absolute",
    top: 22,
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
    marginTop: 80
    // lineHeight: 30,
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
    marginTop: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
  },
  image: {
    width: 250,
    height: 150,
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
  },
   
  imageBackgroundFix: {
    width: 120,
    height:135,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 40,
    position:'relative',
    bottom:475
      },
  
  overlayBoxFix: {
    backgroundColor: '#2F303B80',
    paddingHorizontal: 20,
    paddingVertical:10,
    borderRadius: 8,
    // alignItems: 'center',
    // justifyContent:'center'
  },
  congratsTextFix: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    position:'relative',
    top:22
  },
  verifyButton: {
    backgroundColor: "#480DBE",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 15,
  },
  verifyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CongratulationsScreen;
