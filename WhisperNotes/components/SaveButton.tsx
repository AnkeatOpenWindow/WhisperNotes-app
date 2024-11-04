import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Define the props for the SummaryButton component
interface SaveButtonProps {
  title: string;            // Title of the button
  onPress: () => void;      // Function to handle press event
}

const SaveButton: React.FC<SaveButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Button styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0f4d8f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SaveButton;
