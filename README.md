<!-- REPLACE ALL [USERNAME] TEXT WITH YOUR GITHUB PROFILE NAME & [PROJECTNAME] WITH YOUR GITHUB PROJECT NAME -->

<!-- Repository Information & Links-->
<br>

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0; margin:0;">Anke Du Raan</h5>
<h5 align="center" style="padding:0; margin:0;">221202</h5>
<h6 align="center">DV 300</h6>
</br>

<p align="center">
  <!-- <a href="https://github.com/AnkeatOpenWindow/WhisperNotes-app.git">
       <img src="./assets/Logo.png" alt="Logo" width="140">
   -->
  </a> 

  <h3 align="center">WhisperNotes</h3>

  <p align="center">
    This app allows a user to record what they say using Speech-to-Text. Users can view transcriptions on the Notes Page, tap on a note for details, and summarize the recorded text on the same page.<br>
    <a href="https://github.com/AnkeatOpenWindow/WhisperNotes-app.git"><strong>Explore the docs »</strong></a>
    <br>
    <br>
    <a href="path/to/demonstration/video">View Demo</a>
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
  * [Ideation](#ideation)
  * [Wireframes](#wireframes)
  * [User-flow](#user-flow)
* [Development Process](#development-process)
  * [Implementation Process](#implementation-process)
    * [Highlights](#highlights)
    * [Challenges](#challenges)
  * [Reviews and Testing](#peer-reviews)
    * [Feedback from Reviews](#feedback-from-reviews)
    * [Unit Tests](#unit-tests)
  * [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
  * [Mockups](#mockups)
  * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

---

## About the Project

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

### Environment Setup

Before installing packages, create `.env` files in the root folder (where the `functions` folder is) and in the `WhisperNotes` folder.

1. **.env file in root folder**: </br>
   ```sh
   GOOGLE_SPEECH_TO_TEXT_API_KEY=YOUR_SPEECH_TO_TEXT_API_KEY
   OPENAI_API_KEY=YOUR_OPENAI_API_KEY
   ```
    Replays `YOUR_SPEECH_TO_TEXT_API_KEY` with your API key you got from Google Cloud after creating an API key and enabling Speech-to-text. <br />
    Also replacys `YOUR_OPENAI_API_KEY` with the API key you got from OpenAI.
2. **.env file in WhisperNotes folder**: </br>
   ```sh
   GOOGLE_SPEECH_TO_TEXT_API_KEY=YOUR_SPEECH_TO_TEXT_API_KEY
   OPENAI_API_KEY=YOUR_OPENAI_API_KEY
   EXPO_PUBLIC_LOCAL_DEV_IP=YOUR_LOCAL_DEV_IP
   ```
   Replays `YOUR_SPEECH_TO_TEXT_API_KEY` with your API key you got from Google Cloud after creating an API key and enabling Speech-to-text. <br />
   Also replacys `YOUR_OPENAI_API_KEY` with the API key you got from OpenAI.<br />
   Replace `YOUR_LOCAL_DEV_IP` with your device’s local IP address, which helps in development if you’re using a local network.
3. **expo-env.d.ts file**: </br>
```typescript
/// <reference types="expo/types" />
// NOTE: This file should not be edited and should be in your git ignore
```

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/AnkeatOpenWindow/WhisperNotes-app.git
   ```
2. Install Dependencies in Root folder </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```
3. Navigate to the Project Directory
Once the repository is cloned, navigate into the project directory:
   ```sh
   cd WhisperNotes
   ```
4. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```
5. Install React Native CLI
If you haven't already, you need to install the React Native CLI globally
   ```sh
   npm install -g react-native-cli
   ```
6. Start the Expo Development Server
Start the Expo development server by running:
   ```sh
   npx expo start
   ```
7: Running the App with Expo Go

  7.1 Download and install the Expo Go app from the App Store (iOS) or Google Play Store (Android) on your mobile device.
  
  7.2 Open the Expo Go app on your device.
  
  7.3 In the Expo Dev Tools in your browser, you will see a QR code. Scan this QR code using the Expo Go app.
  
  * For iOS: Use the camera app to scan the QR code.
  * For Android: Use the built-in QR code scanner in the Expo Go app.
  * The app should now load and run on your device.

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

### Feature 1: Recording what you say using Speech-to-text

If the users wishes to record a note that can go to the speech-to-text screen. From there they need to press and hold the mic button before speaking. After speaking they need to release the button. The Recording will then be turned into text that is saved to Firebase and stored on the Notes screen.

<div style="display: flex; justify-content: space-between;">
   <!--
  <img src="./assets/Mockups/2.png" alt="Image 2" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/3.png" alt="Image 3" width="300">
   -->
</div>

### Feature 2: View Note that has been recorded.

After the recording has been saved the user can head over to the Notes screen where all previous and new notes are shown. The user can then tap on the note to be able to view the recording.

<div style="display: flex; justify-content: space-between;">
   <!--
  <img src="./assets/Mockups/4.png" alt="Image 3" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/5.png" alt="Image 4" width="300">
   -->
</div>

### Feature 3: Sumirize the text that came from the recording.

At the bottom of the Note's details page there is a sumarize note's text button which if the taps the text will be sumirized and saved.

<div style="display: flex; justify-content: space-between;">
   <!--
  <img src="./assets/Mockups/6.png" alt="Image 5" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/7.png" alt="Image 6" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/8.png" alt="Image 6" width="300">
   -->
</div>

### Feature 5: Name Notes.

When the recording is saved it take the time stamp of when the recording was made and uses that as a defult title. In the note's detail a user can give the note a title which will then be saved and show on the Notes screen.
<!--
<img src="./assets/Mockups/9.png" alt="Image 7" width="300">
-->

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
## Concept Process

Baised on the brief requirements we had to create an project using any language and application that uses at least one AI service from any avalible sources. I choose to use Google Cloud's Speech-to-text API and OpenAI for as a sumirizing model. I also used Firebase as my backend where my transcrips from the recording are saved.  

### Wireframes

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
   <!--
  <img src="./assets/Wireframes/Splash.png" alt="Image 5" height="300" style="margin-right: 10px;">
  <img src="./assets/Wireframes/Login.png" alt="Image 6" height="300" style="margin-right: 10px;">
  <img src="./assets/Wireframes/Regester.png" alt="Image 6" height="300">
   -->
</div>
<br>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
   <!--
   <img src="./assets/Wireframes/Home.png" alt="Image 6" height="300" style="margin-right: 10px;">
  <img src="./assets/Wireframes/Competition.png" alt="Image 6" height="300" style="margin-right: 10px;">
  <img src="./assets/Wireframes/Review1.png" alt="Image 5" height="300">
   -->
</div>
<br>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
   <!--
   <img src="./assets/Wireframes/Review2.png" alt="Image 6" height="300" style="margin-right: 10px;">
  <img src="./assets/Wireframes/Own.png" alt="Image 6" height="300" style="margin-right: 10px;">
  <img src="./assets/Wireframes/Profile.png" alt="Image 6" height="300" style="margin-right: 10px;">
   -->
</div>

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
* At some point my project refused to open up the app and kept giving me a screen that says "Welcome to expo start by creating a file in the app directory". Unable to figure out why it kept giving me this screen so I redid my project which was when i got it working again.
* Before my Peer Testing session my app wouldn't open on my Android device so i had to set up an Emulator using [Android studio](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjqi6bJ3MyJAxUmj1AGHXOzNjQYABAAGgJkZw&co=1&ase=2&gclid=Cj0KCQiAire5BhCNARIsAM53K1gdHGS-QAtS-v-7uR-4k56doaw6bfsbqoh45-v_D9SMfmjFnPZQLEUaAhpHEALw_wcB&ohost=www.google.com&cid=CAESVOD278duZ_jcHnvq7EjcvIgK0JOEk9-IgyRf_TFwG_-jbrzS-KkgmyZMGZqlAU3KcIISjH5RotS_SA3EaiRz0Ne2-o3dKE060GWC1FNwJIFMIZM0XA&sig=AOD64_39r_E1W9-t1iBDvvuWF39Wjk01pw&q&nis=4&adurl&ved=2ahUKEwjE7qDJ3MyJAxVnVUEAHR-5F84Q0Qx6BAgKEAE).
* After getting the emulator to show my project I ran into trouble to get the speech-to-text function to work. Sometimes it work and sometimes it doesn't. Unsure of why that is because i know it works perfectly on my physical device before I was unable to open it up.

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
   <!--
  <img src="./assets/Mockups/1.png" alt="Image 5" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/2.png" alt="Image 6" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/3.png" alt="Image 6" width="300">
   -->
</div>
<br>
<div style="display: flex; justify-content: space-between;">
   <!--
  <img src="./assets/Mockups/4.png" alt="Image 6" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/5.png" alt="Image 6" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/6.png" alt="Image 5" width="300">
   -->
</div>
<br>
<div style="display: flex; justify-content: space-between;">
   <!--
  <img src="./assets/Mockups/7.png" alt="Image 6" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/8.png" alt="Image 6" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/9.png" alt="Image 6" width="300" style="margin-right: 10px;">
  <img src="./assets/Mockups/10.png" alt="Image 6" width="300">
   -->
</div>

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:
<!--
<a href="https://drive.google.com/file/d/1UusvSPGxn4X1b71fbkst5Yv45hw0IzYY/view?usp=sharing">
  <img src="./assets/Mockups/1.png" alt="Demo Video" width="300">
  -->
</a>

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
