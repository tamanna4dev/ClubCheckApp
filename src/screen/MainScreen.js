import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Camera } from "expo-camera";

const ScanScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return ( 
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          Camera access is required to scan your ID.
        </Text>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => Camera.requestCameraPermissionsAsync()}
        >
          <Text style={styles.actionText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleCapture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        Alert.alert("Photo Captured", "Photo has been taken successfully!");
        console.log(photo.uri);
        navigation.goBack();
      } catch (error) {
        Alert.alert("Error", "Failed to capture photo. Please try again.");
        console.error(error);
      }
    }
  };
  
  return (
    <View style={styles.container}>

      {Camera.Constants?.Type && (
  <Camera
    style={styles.camera}
    ref={cameraRef}
    type={Camera.Constants.Type.front} // or .back
  />
)}

      {Camera.Constants?.Type && (
        <Camera
          style={styles.camera}
          ref={cameraRef}
          type={Camera.Constants.Type.front}
          
        />
        
      )}
      console.log("Camera Constants:", Camera.Constants);

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
          <Text style={styles.captureText}>Capture</Text>
        </TouchableOpacity>
      </View>
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
  permissionText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    flexDirection: "row",
  },
  captureButton: {
    backgroundColor: "#5a5af7",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  captureText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
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

export default ScanScreen;
