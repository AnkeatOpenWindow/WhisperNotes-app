import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, ActivityIndicator, TouchableOpacity, Dimensions } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native"; // Correct import
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { RootStackParamList } from "./types"; // Import your types

type Note = {
  timestamp: Timestamp;
  text: string;
};

export default function NoteDetails() {
  // Define the route prop type and use it to access params
  const route = useRoute<RouteProp<RootStackParamList, "notesdetails">>();
  const { noteId } = route.params;
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      const noteDoc = await getDoc(doc(db, "transcripts", noteId));
      if (noteDoc.exists()) {
        setNote(noteDoc.data() as Note);
      }
      setLoading(false);
    };

    fetchNote();
  }, [noteId]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainScrollContainer}>
        <View style={styles.container}>

          {loading ? (
            <ActivityIndicator size="large" color="#557d9d" />
          ) : note ? (
            <View>
              <Text style={styles.title}>Your Note's Time Stamp</Text>
              <Text style={styles.timestamp}>{new Date(note.timestamp.seconds * 1000).toLocaleString()}</Text>
              <Text style={styles.title}>What was recorded</Text>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{note.text}</Text>
              </View>
            </View>
          ) : (
            <Text style={styles.message}>Note not found.</Text>
          )}
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
  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 50,
  },
  timestamp: {
    color: "#a0a0a0",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  textContainer: {
    borderWidth: 1,        // Add border width
    borderColor: "white",  // Set border color
    borderRadius: 8,       // Optional: add border radius for rounded corners
    padding: 10,           // Optional: add padding inside the border
    marginBottom: 20,      // Optional: margin below the border container
    alignSelf: "center",    // Center align the container
    width: '100%',  
    height: 300,         // Optional: set a width for the container
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
   
  },
  message: {
    color: "red",
    fontSize: 18,
  },
});
