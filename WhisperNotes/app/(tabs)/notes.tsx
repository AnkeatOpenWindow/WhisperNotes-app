import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, ActivityIndicator, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//import { collection, onSnapshot, Timestamp } from "firebase/firestore";
//import { db } from '../../firebaseConfig';


export default function Notes() {
  

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainScrollContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Your Notes</Text>
         
            <View style={styles.grid}>
              
            </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainScrollContainer: {
    padding: 20,
    height: "100%",
    width: "100%",
    backgroundColor: "#25292e",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 50,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width / 2.5,
  },
  buttonText: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});
