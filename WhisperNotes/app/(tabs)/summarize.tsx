import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
//import { analyzeText } from "@/components/AIServices"; // Your service
import SummaryButton from "@/components/SummaryButton"; // Import your custom button

interface AnalyzeSyntaxResponse {
  sentences?: Array<{
    text: {
      content: string;
    };
  }>;
}

export default function Summarize() {
  const [inputText, setInputText] = useState<string>(''); 
  const [summaryResult, setSummaryResult] = useState<AnalyzeSyntaxResponse | null>(null);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type Text to Summarize</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor="white"
        placeholder="Type your text here..."
        value={inputText}
        onChangeText={setInputText}
        multiline
      />

      <SummaryButton title="Summarize your note" onPress={() =>{}} />

      {summaryResult && (
        <ScrollView style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Summary:</Text>
          <Text style={styles.resultText}>
            {summaryResult.sentences && summaryResult.sentences.length > 0
              ? summaryResult.sentences[0].text.content
              : 'No summary available'}
          </Text>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: "white",
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    textAlignVertical: 'top',
    color: "white",
  },
  resultContainer: {
    marginTop: 20,
    color: "white",
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
  },
  resultText: {
    fontSize: 16,
    marginTop: 10,
    color: "white",
  },
});
