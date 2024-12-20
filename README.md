<!-- REPLACE ALL [USERNAME] TEXT WITH YOUR GITHUB PROFILE NAME & [PROJECTNAME] WITH YOUR GITHUB PROJECT NAME -->

<!-- Repository Information & Links-->
<br>

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0; margin:0;">Anke Du Raan</h5>
<h5 align="center" style="padding:0; margin:0;">221202</h5>
<h6 align="center">DV 300</h6>
</br>

<p align="center">
   <a href="https://github.com/AnkeatOpenWindow/WhisperNotes-app.git">
       <img src="./assets/Logo.png" alt="Logo" width="200">
  </a> 

  <h3 align="center">WhisperNotes</h3>

  <p align="center">
    This app allows a user to record what they say using Speech-to-Text. Users can view transcriptions on the Notes Page, tap on a note for details, and summarize the recorded text on the same page.<br>
    <a href="https://github.com/AnkeatOpenWindow/WhisperNotes-app.git"><strong>Explore the docs »</strong></a>
    <br>
  </p>
</p>

---

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to Install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
* [Development Process](#development-process)
  * [Implementation Process](#implementation-process)
    * [Highlights](#highlights)
    * [Challenges](#challenges)
  * [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
  * [Mockups](#mockups)
  * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

---
<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
<img src="./assets/Logo.png" alt="Logo" width="140" >

### Project Description

This app allows a user to record what they say using Speech-to-Text. Users can view transcriptions on the Notes Page, access note details by tapping on a note, and summarize the text on the same page. Additionally, users can assign each note a title for easier organization.

### Built With

* [React Native](https://reactnative.dev/)
* [Node.js](https://nodejs.org/en)
* [React](https://react.dev/)
* [Firebase](https://firebase.google.com/)
* [Expo Go](https://docs.expo.dev/)
* [Google Cloud's Speech-to-Text API](https://cloud.google.com/speech-to-text)
* [OpenAI Summarization Model](https://platform.openai.com/docs/overview)

---

## Getting Started

Follow these instructions to set up the project locally for development and testing.

### Prerequisites

Ensure you have the latest version of [Node.js](https://nodejs.org/en) installed.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/AnkeatOpenWindow/WhisperNotes-app.git
   ```
2.  Create a .env file in root folder: </br>
   ```sh
      GOOGLE_SPEECH_TO_TEXT_API_KEY=YOUR_SPEECH_TO_TEXT_API_KEY
      OPENAI_API_KEY=YOUR_OPENAI_API_KEY
   ```
    
   Replays `YOUR_SPEECH_TO_TEXT_API_KEY` with your API key you got from Google Cloud after creating an API key and enabling Speech-to-text. 
   Also replacys `YOUR_OPENAI_API_KEY` with the API key you got from OpenAI.

3. Create a .env file in `WhisperNotes` folder </br>
   ```sh
   GOOGLE_SPEECH_TO_TEXT_API_KEY=YOUR_SPEECH_TO_TEXT_API_KEY
   OPENAI_API_KEY=YOUR_OPENAI_API_KEY
   EXPO_PUBLIC_LOCAL_DEV_IP=YOUR_LOCAL_DEV_IP
   ```
   Replays `YOUR_SPEECH_TO_TEXT_API_KEY` with your API key you got from Google Cloud after creating an API key and enabling Speech-to-text. <br />
   Also replacys `YOUR_OPENAI_API_KEY` with the API key you got from OpenAI.<br />
   Replace `YOUR_LOCAL_DEV_IP` with your device’s local IP address, which helps in development if you’re using a local network.

4. Create a expo-env.d.ts file in `WhisperNotes` folder </br>
```typescript
/// <reference types="expo/types" />
// NOTE: This file should not be edited and should be in your git ignore
```
5. Add a `firebase.js` file in the `WhisperNotes` folder and added the following </br>
    ```sh
   
    import { initializeApp } from "firebase/app";
    import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";
    import { getStorage } from "firebase/storage";
    import AsyncStorage from '@react-native-async-storage/async-storage';

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Auth with persistence
    const auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage)
    });

    // Export auth, db, and storage
    export { auth };
    export const db = getFirestore(app);
    export const storage = getStorage(app);

   ```
The be sure to replace the `firebaseConfig` with your firebaseConfig from firebase.

6. Install Dependencies in Root folder </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```
7. Install Dependencies in `WhisperNotes` folder </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```
8. Install React Native CLI
If you haven't already, you need to install the React Native CLI globally
   ```sh
   npm install -g react-native-cli
   ```
9. Start the Expo Development Server
Start the Expo development server by running:
   ```sh
   npx expo start
   ```
10: Running the App with Expo Go

  10.1 Download and install the Expo Go app from the App Store (iOS) or Google Play Store (Android) on your mobile device.
  
  10.2 Open the Expo Go app on your device.
  
  10.3 In the Expo Dev Tools in your browser, you will see a QR code. Scan this QR code using the Expo Go app.
  
  * For iOS: Use the camera app to scan the QR code.
  * For Android: Use the built-in QR code scanner in the Expo Go app.
  * The app should now load and run on your device.

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

### Feature 1: Recording what you say using Speech-to-text

If the users wishes to record a note that can go to the speech-to-text screen. From there they need to press and hold the mic button before speaking. After speaking they need to release the button. The Recording will then be turned into text that is saved to Firebase and stored on the Notes screen.

<div style="display: flex; justify-content: space-between;">
  <img src="./assets/Recordingscreen.jpg" alt="Recordingscreen" width="300" style="margin-right: 10px;">
</div>

### Feature 2: View Note that has been recorded.

After the recording has been saved the user can head over to the Notes screen where all previous and new notes are shown. The user can then tap on the note to be able to view the recording.

<div style="display: flex; justify-content: space-between;">
  <img src="./assets/Notesscreen.jpg" alt="Notesscreen" width="300" style="margin-right: 10px;">
   <img src="./assets/Detailscreen1.jpg" alt="Detailscreen1" width="300" style="margin-right: 10px;">
</div>

### Feature 3: Sumirize the text that came from the recording.

At the bottom of the Note's details page there is a sumarize note's text button which if the taps the text will be sumirized and saved.

<div style="display: flex; justify-content: space-between;">
  <img src="./assets/Detailscreen1.jpg" alt="Detailscreen1" width="300" style="margin-right: 10px;">
  <img src="./assets/Detailscreen2.jpg" alt="Detailscreen2" width="300">
</div>

### Feature 5: Name Notes.

When the recording is saved it take the time stamp of when the recording was made and uses that as a defult title. In the note's detail a user can give the note a title which will then be saved and show on the Notes screen.

<img src="./assets/Detailscreen2.jpg" alt="Detailscreen2" width="300">


<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
## Concept Process

Baised on the brief requirements we had to create an project using any language and application that uses at least one AI service from any avalible sources. I choose to use Google Cloud's Speech-to-text API and OpenAI for as a sumirizing model. I also used Firebase as my backend where my transcrips from the recording are saved.  

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->

* Users are able to record what they say and get it back in text using Google Cloud's Speech-to-text API.
* Users can view the note's details where they can give it a title if they wish.
* Users can get a sumirize of what they had said previously wuth the help of OpenAI.

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* Be able to learn more about AI and how to use them in a project.
* Being able to learned and see how Google Cloud's speech-to-text works.
* Being able to leanred and see how OpenAI can sumirize text that it is given.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Struggled to get Google Cloud's API to work. Manged to fix it by the help of a [video](https://youtu.be/gcZSlMU-n48?si=RzFVfPWr3QCnmTGc) I decoved on YouTube.
* At some point my project refused to open up the app and kept giving me a screen that says "Welcome to expo start by creating a file in the app directory". Unable to figure out why it kept giving me this screen so I redid my project which was when I got it working again.
* Before my Peer Testing session my app wouldn't open on my Android device so I had to set up an Emulator using [Android studio](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjqi6bJ3MyJAxUmj1AGHXOzNjQYABAAGgJkZw&co=1&ase=2&gclid=Cj0KCQiAire5BhCNARIsAM53K1gdHGS-QAtS-v-7uR-4k56doaw6bfsbqoh45-v_D9SMfmjFnPZQLEUaAhpHEALw_wcB&ohost=www.google.com&cid=CAESVOD278duZ_jcHnvq7EjcvIgK0JOEk9-IgyRf_TFwG_-jbrzS-KkgmyZMGZqlAU3KcIISjH5RotS_SA3EaiRz0Ne2-o3dKE060GWC1FNwJIFMIZM0XA&sig=AOD64_39r_E1W9-t1iBDvvuWF39Wjk01pw&q&nis=4&adurl&ved=2ahUKEwjE7qDJ3MyJAxVnVUEAHR-5F84Q0Qx6BAgKEAE).
* After getting the emulator to show my project I ran into trouble to get the speech-to-text function to work. Sometimes it work and sometimes it doesn't. Unsure of why that is because I know it works perfectly on my physical device before I was unable to open it up.

### Reviews & Testing
<!-- stipulate how you've conducted testing in the form of peer reviews, feedback and also functionality testing, like unit tests (if applicable) -->
* Tested using dummy users.
* Got feedback from my lecturer.
* Asked some of my peers to watch a video of how I did it. Due to the fact I couldn't get my physical device to open up to allow them to test it out of themselves.

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Future 1: Allow users to take photo's of any text they wish and have to saved as text to a note then allow the user to sumarize the text they got back.

<!-- MOCKUPS -->
## Final Outcome

### Mockups

<div style="display: flex; justify-content: space-between;">
   <img src="./assets/Splash.png" alt="Image 5" width="300" style="margin-right: 50px;">
   <img src="./assets/Recording.png" alt="Image 6" width="300" style="margin-right: 50px;">
   <img src="./assets/Info.png" alt="Image 5" width="300">
</div>
<br>
<div style="display: flex; justify-content: space-between;">
   <img src="./assets/Notes.png" alt="Image 6" width="300" style="margin-right: 50px;">
   <img src="./assets/Detail1.png" alt="Image 6" width="300" style="margin-right: 50px;">
   <img src="./assets/Detail2.png" alt="Image 6" width="300">
</div>

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

<a href="https://drive.google.com/file/d/14GdS8aqaAuVTwbDOobOjcbv0RLrwf0p6/view?usp=sharing">
  <img src="./assets/Splash.png" alt="Image 5" width="300">
</a>

<!-- Conclusion -->
## Conclusion
For further added feature I could implementation a scan-to-summarize using Google Cloud's Document AI to allow a user to upload photos to be sumarized. As well as add a sign up and login screens to personalize the app for a user. 


<!-- AUTHORS -->
## Authors

* **Anke Du Raan** - [AnkeatOpenWindow](https://github.com/AnkeatOpenWindow)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Anke Du Raan** - [anke12345du@gmail.com](anke12345du@gmail.com)
* **Project Link** - [https://github.com/AnkeatOpenWindow/WhisperNotes-app.git](https://github.com/AnkeatOpenWindow/WhisperNotes-app.git)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [React Native documentation](https://reactnative.dev/docs/environment-setup)
* [Expo go documentation](https://docs.expo.dev/)
* [ChatGPT](https://openai.com/index/chatgpt/)
* [Firestore documentation](https://firebase.google.com/docs/firestore)
* [Avi Mamenko's video on how to build a speech to text app using Google Cloud's Speech-to-text API](https://youtu.be/gcZSlMU-n48?si=bzNPX2O8xD6yHe96)


<!-- MARKDOWN LINKS & IMAGES -->
[image1]: /path/to/image.png
[image2]: /path/to/image.png
[image3]: /path/to/image.png
[image4]: /path/to/image.png
[image5]: /path/to/image.png
[image6]: /path/to/image.png
[image7]: /path/to/image.png
[image8]: /path/to/image.png
[image9]: /path/to/image.png
[image10]: /path/to/image.png
