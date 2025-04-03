import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ClubDetailsScreen = ({ route, navigation }) => {
  const { club } = route.params;

  return (
    <View style={styles.container}>
      {/* <Image
        source={{ uri: 'https://via.placeholder.com/300' }}
        style={styles.detailImage} */}
      {/* /> */}
      <Text style={styles.detailTitle}>{club.name}</Text>
      <View style={styles.row}>
        <Ionicons name="musical-notes-outline" size={20} color="white" />
        <Text style={styles.detailText}>{club.genre}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="star-outline" size={20} color="white" />
        <Text style={styles.detailText}>4.6 (500)</Text>
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Analytics')}
      >
        <Text style={styles.buttonText}>View Analytics</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClubDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1b29',
    padding: 20,
  },
  detailImage: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  detailTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  detailText: {
    color: '#ccc',
    marginLeft: 10,
  },
  backButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#654ce5',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
