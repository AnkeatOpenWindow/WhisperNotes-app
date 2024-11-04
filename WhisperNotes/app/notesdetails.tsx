import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, ActivityIndicator, Button, Alert } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { doc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import axios from 'axios';
import { db } from "../firebaseConfig";
import { OPENAI_API_KEY } from '@env';
import { RootStackParamList } from "./types"; // Import your types
import SummaryButton from "@/components/SummaryButton";

type Note = {
  timestamp: Timestamp;
  text: string;
  summarizedText?: string; // Field for the saved summary
};

export default function NoteDetails() {
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

  const summarizeText = async (text: string) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Summarize the following text: ${text}`
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`
          }
        }
      );

      const generatedSummary = response.data.choices[0].message.content;

      // Save the summarized text to Firebase
      await updateDoc(doc(db, "transcripts", noteId), {
        summarizedText: generatedSummary,
      });

      // Update the local note state to include the saved summary
      setNote((prevNote) => prevNote ? { ...prevNote, summarizedText: generatedSummary } : null);

      // Show an alert to the user
      Alert.alert("Success", "Your note has been summarized");
    } catch (error) {
      console.error('Error summarizing or saving text:', error);
      Alert.alert("Error", "An error occurred while summarizing your note.");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainScrollContainer}>
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size="large" color="#557d9d" />
          ) : note ? (
            <View style={styles.grid}>
              <Text style={styles.title}>Title</Text>

              <Text style={styles.subtitle}>What was recorded:</Text>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{note.text}</Text>
              </View>

              {/* Display existing summarized text if available */}
              <Text style={styles.subtitle}>Summarized Text:</Text>
              {note.summarizedText ? (
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{note.summarizedText}</Text>
                </View>
              ) : (
                <View style={styles.textContainer}>
                  <Text style={styles.message}>You haven't summarized this note yet.</Text>
                </View>
              )}

              <Text style={styles.subtitle}>Your Note's Time Stamp</Text>
              <Text style={styles.timestamp}>{new Date(note.timestamp.seconds * 1000).toLocaleString()}</Text>

              {/* Button to trigger summarization */}
              <SummaryButton title="Summarize your note" onPress={() => summarizeText(note.text)} />
            </View>
          ) : (
            <Text style={styles.notemessage}>Note not found.</Text>
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
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  title: {
    width: "100%",
    color: "white",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "left",
  },
  timestamp: {
    color: "#a0a0a0",
    fontSize: 18,
    textAlign: "left",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    alignSelf: "center",
    width: '100%',
    height: 200,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  textTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notemessage: {
    color: "red",
    fontSize: 18,
  },
  message: {
    color: "#a0a0a0", // Gray color for subtle contrast
    fontSize: 16,
    textAlign: "left",
  },
});
