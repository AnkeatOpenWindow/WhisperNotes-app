import React from 'react';
import { View, Text, StyleSheet,SafeAreaView, ScrollView } from 'react-native';


export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.mainScrollContainer}>
      <View style={styles.mainInnerContainer}>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to WhisperNotes!</Text>
          <Text style={styles.description}>
            WhisperNotes is an intuitive app designed to help you transcribe your spoken words into text
            then saves them as notes. From there you can manage your notes effortlessly. 
            Here's how to use the app:
          </Text>

          <Text style={styles.sectionTitle}>Using the App:</Text>
          <Text style={styles.step}>
            1. Navigate to the "Speech-to-Text" screen using the tab navigation at the bottom.
          </Text>
          <Text style={styles.step}>
            2. On the "Speech-to-Text" page, you'll find a microphone button. Press and hold the button
            to record your voice. Release it when you're done speaking.
          </Text>
          <Text style={styles.step}>
            3. Your transcribed text will appear in the section labeled "Your transcribed text will be
            shown here."
          </Text>
          <Text style={styles.step}>
            4. Your transcription is automatically saved to the "Notes" screen, accessible via the tab
            navigation.
          </Text>
          <Text style={styles.step}>
            5. On the "Notes" page, you'll see all your recordings. Tap any note to view its details,
            including the timestamp and the transcription.
          </Text>
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
  mainInnerContainer: {
    gap: 75,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",

  },
  welcomeText: {
    fontSize: 35,
    padding: 5,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 50,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  step: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
});
