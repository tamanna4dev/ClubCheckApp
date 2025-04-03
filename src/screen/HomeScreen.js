import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import clubsData from "../../src/API/JSONData/clubsData"; 

const HomeScreen = ({navigation}) => {
  const { categories, nightOut } = clubsData;

  return (
    <View style={styles.container}>
    
        <View style={styles.header}>
          <Text style={styles.logoText}>ClubCheck</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={24} color="white"  style={styles.menuIcon} />
        </TouchableOpacity>
         
        </View>
      
        {/* Category Slider */}
       
      <View style={{flexDirection:'row'}}>
       
      <FlatList
          data={categories[0].clubs}
          horizontal
          keyExtractor={(item, index) => `${item.name}-${index}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.sliderItem}>
              <Image source={item.image} style={styles.sliderImage} />
              <Text style={styles.sliderText}>{item.name}</Text>
            </View>
            
          )}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('EventsScrren')}>
         <Image source={require('../images/15.png')} style={{marginTop:30,marginRight:15}}/>
          </TouchableOpacity>
      </View>

        {/* Night Out Section */}
       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
       <Text style={styles.sectionTitle}>{nightOut.title}</Text>
       <Text style={{backgroundColor:'#585B78B0',paddingVertical:7,paddingHorizontal:13,color:'white',borderRadius:10,fontSize:9}}>Nearby</Text>
       </View>

       <ScrollView showsVerticalScrollIndicator={false}>
        {nightOut.clubs.map((club, index) => (
         <View key={index} style={styles.clubCard}>
         <ImageBackground source={club.image} style={styles.clubImage}>
           <View style={styles.overlay}>
             <View style={styles.clubDetails}>
               <View style={{ flexDirection: "row", alignItems: "center"}}>
                <Image source={club.images} style={styles.sliderImage} />
                <TouchableOpacity onPress={() => navigation.navigate("ClubScreen")}>
                <Text style={styles.clubName}>{club.name}</Text>

        </TouchableOpacity>

<Image source={require("../images/8.png")} style={styles.clubRatingIcon} />

               </View>
              <View style={{flexDirection:'row',}}>
              <View style={{backgroundColor:'rgba(66, 68, 88, 0.57)',borderRadius:10,paddingHorizontal:8,paddingVertical:3,marginLeft:12,marginTop:45}}>
               <Text style={styles.clubMeta}>{club.music}</Text>
               </View>
               <Image source={require('../images/20.png')} style={{marginTop:40}}/>

               <View style={{backgroundColor:'rgba(66, 68, 88, 0.57)',borderRadius:10,paddingHorizontal:8,paddingVertical:3,marginLeft:110,marginTop:42}}>
               <Text style={styles.clubtext}>$$$ . 4,6 . 3,5KM
               <Text style={styles.text}>
        $$$ · <FontAwesome name="star" size={13} color="#fff" /> 4.6 ·{" "}
        <MaterialIcons name="touch-app" size={13} color="#fff" /> 3.5KM
      </Text> </Text>
      
               </View>
               
              </View>
             </View>

           </View>
         </ImageBackground>
       </View>
        
        ))}
        </ScrollView>
      

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191233",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logoText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    // marginVertical: 15,
  },
  sliderItem: {
    marginRight: 25,
    alignItems: "center",
  },
  sliderImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    // marginBottom: 5,
  },
  sliderText: {
    color: "#999",
    fontSize: 13,
    
  },
  clubCard: {
           marginBottom: 15,
           borderRadius: 10,
           overflow: "hidden",
         },
         clubImage: {
           width: "100%",
           height: 150,
         },
         overlay: {
           flex: 1,
          //  backgroundColor: "rgba(0, 0, 0, 0.5)",
          //  justifyContent: "center",
         },
         clubDetails: {
           alignItems: "flex-start",
         },
         clubName: {
           color: "white",
           fontSize: 16,
           fontWeight: "bold",
          //  marginLeft: 10,
           
         },
         clubMeta: {
           color: "#fff",
           fontSize: 8,
          //  marginTop: 5,
         }, 
         
         clubtext:{
          color: "#fff",
          fontSize: 8,
       
         },
         clubRatingIcon: {
          width: 20,
          height: 20,
         textAlign:'left'
      
        },
  clubInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  clubPrice: {
    color: "lightgray",
  },
  clubRating: {
    color: "lightgray",
  },
  clubDistance: {
    color: "lightgray",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#1f1a42",
  },
});

export default HomeScreen;
