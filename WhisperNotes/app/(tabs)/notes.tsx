import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, ActivityIndicator, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { collection, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; // Correct import for Stack Navigation
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type Note = {
  id: string;
  timestamp: Timestamp;
  text: string;
};

type NotesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "notesdetails">;

export default function Notes() {
  const navigation = useNavigation<NotesScreenNavigationProp>();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "transcripts"), (snapshot) => {
      const fetchedNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Note[];
  
      // Sort notes by timestamp in descending order (latest first)
      fetchedNotes.sort((a, b) => b.timestamp.seconds - a.timestamp.seconds);
  
      setNotes(fetchedNotes);
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);

  const handleNotePress = (noteId: string) => {
    navigation.navigate("notesdetails", { noteId });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainScrollContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Your Notes</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#557d9d" />
          ) : (
            <View style={styles.grid}>
              {notes.map((note) => (
                <TouchableOpacity key={note.id} style={styles.button} onPress={() => handleNotePress(note.id)}>
                  <Ionicons name="folder-open" size={100} color="#557d9d" />
                  <Text style={styles.buttonText}>{new Date(note.timestamp.seconds * 1000).toLocaleString()}</Text>
                </TouchableOpacity>
              ))}
            </View>
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
