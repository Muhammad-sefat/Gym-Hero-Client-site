import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbeRSdphiYr_TBLw1HfptZR8IOkPhQ2ws",
  authDomain: "gym-hero-client.firebaseapp.com",
  projectId: "gym-hero-client",
  storageBucket: "gym-hero-client.appspot.com",
  messagingSenderId: "401896481349",
  appId: "1:401896481349:web:01ea44ddef23742702792c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
