import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="notesdetails" 
        options={{ 
          title: "Your Note's Details" ,
          headerStyle: {
            backgroundColor: '#25292e',
          },
          headerTintColor: '#fff',
        }} />
      </Stack>
    </>
  );
}
