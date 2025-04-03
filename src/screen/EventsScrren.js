import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const events = [
  {
    id: 1,
    image: require('../images/11.png'),
    date: "26 Nov",
    time: "23:00 - 03:00",
    name: "Event Name",
    location: "Odeonsplatz 17",
    Image: require('../images/12.png'),

    price: "15€",
    soldOut: false,
  },
  {
    id: 2,
    image: require('../images/22.png'),
    date: "26 Nov",
    time: "23:00 - 03:00",
    name: "Drink Friday",
    location: "Odeonsplatz 17",
    Image: require('../images/12.png'),

    price: "15€",
    soldOut: true,
  },
  {
    id: 3,
    image: require('../images/23.png'),
    date: "26 Nov",
    time: "23:00 - 03:00",
    name: "Halloween Party",
    location: "Odeonsplatz 17",
    Image: require('../images/12.png'),

    price: "15€",
    soldOut: false,
  },
];

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ClubCheck</Text>
        <Feather name="menu" size={24} color="white" />
      </View>
      <Text style={styles.subtitle}>Events this week!</Text>
      <ScrollView>
        {events.map((event) => (
          <View key={event.id} style={styles.eventCard}>
                          <View style={{flexDirection:"row",}}>
                          <Image source={event.image} style={styles.eventImage} />
            
            <View style={{marginLeft:20}}>
 
            {/* <View style={styles.eventHeader}> */}
               <Text style={styles.eventDate}>{event.date}</Text>
               <Text style={styles.eventTime}>{event.time}</Text>
             {/* </View> */}
             <Text style={styles.eventName}>{event.name}</Text>
             <Text style={styles.eventLocation}>{event.location}</Text>
             <View style={styles.eventFooter}>
               <TouchableOpacity style={event.soldOut ? styles.soldOutButton : styles.activeButton}>
                 <Text style={styles.buttonText}>{event.soldOut ? "Solid out" : <Image source={event.Image} style={styles.buttonText} />}</Text>
                
                 {/* <Image source={event.Image} style={styles.buttonText} /> */}
                 <Text style={styles.buttonText}>{event.price}</Text> 

               </TouchableOpacity>
             
             </View>
            
            </View>
                          </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c031b",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#b3b3b3",
    fontSize: 18,
    marginBottom: 8,
  },
  eventCard: {
    backgroundColor: "#1a1033",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  eventImage: {
    width: "40%",
    height: 160,
    borderRadius: 12,
  },
  eventHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  eventDate: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  eventTime: {
    color: "#b3b3b3",
    fontSize:9
  },
  eventName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    marginVertical: 8,
  },
  eventLocation: {
    color: "#550BE9",
    fontSize: 12,
    marginTop:10
  },
  eventFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  soldOutButton: {
    // backgroundColor: "#ff4c4c",
    // paddi    
    // borderRadius: 6,

    flexDirection:'row'
    ,gap:17,
    color:'#FF0000'
  
  },
  activeButton: {
    backgroundColor: "#480DBE",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection:'row',
    gap:17

  },
  buttonText: {
    color: "#fff",
    width:22,
    height:20
  },
  clubMeta: {
    color: "#fff",
    fontSize: 8,
    marginTop: 5,
  },
  clubText: {
    color: "#fff",
    fontSize: 8,
    marginTop: 5,
  },
});
