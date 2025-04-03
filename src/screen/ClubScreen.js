import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet,ImageBackground } from "react-native";
import { Ionicons, FontAwesome ,} from "@expo/vector-icons";

const ClubScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>ClubCheck</Text>
        <Ionicons name="menu" size={28} color="white" />
      </View>

      {/* Club Image */}
      <View style={styles.imageContainer}>
        
          <ImageBackground source={require('../images/26.png')}style={styles.image}>
          <Image
          source={require('../images/1.png')}
          style={{width:40,height:40}}
        />
        
          
        <Text style={styles.clubName}>Neuraum</Text>

          <Ionicons name="bookmark-outline" size={28} color="white" />
          </ImageBackground>
      </View>

      {/* Share Button */}
      <TouchableOpacity style={styles.shareButton}>
      <Image
          source={require('../images/27.png')}
          style={{width:30,height:30}}
        />
        <Text style={styles.shareText}>Share with friends</Text>
      </TouchableOpacity>

      {/* Tags */}
      <View style={styles.tagsContainer}>
        {[
          { icon: "music", text: "Hip Hop" },
          { icon: "users", text: "18 - 30" },
          { icon: "shopping-bag", text: "Street style" },
          { icon: "star", text: "Specials" },
        ].map((item, index) => (
          <View key={index} style={styles.tagItem}>
            <FontAwesome name={item.icon} size={20} color="white" />
            <Text style={styles.tagText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* Rating */}
      <View style={styles.ratingContainer}>
        <FontAwesome name="star" size={20} color="gold" />
        <Text style={styles.ratingText}>4.6</Text>
        <Text style={styles.ratingCount}>(500)</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#080221",
    flex: 1,
    padding:10
  },
  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    // padding: 16,

  },
  image: {
    width: "100%",
    height: 340,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius: 20,
  
  },
  clubName: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    // marginTop: 8,
  },
  bookmarkButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  shareButton: {
   
    justifyContent: "center",
    alignItems: "center",
   
  },
  shareText: {
    color: "white",
    fontSize:10
  },
  tagsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    backgroundColor:'black',
    padding:15,
    borderRadius:20
  },
  tagItem: {
    alignItems: "center",
  },
  tagText: {
    color: "white",
    marginTop: 4,
  },
  ratingContainer: {
    backgroundColor: "#190a3d",
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 40,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    
    justifyContent: "center",
  },
  ratingText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  ratingCount: {
    color: "gray",
    marginLeft: 8,
    fontSize: 8,
marginTop:9    
  },
});

export default ClubScreen;
