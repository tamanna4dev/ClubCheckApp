// Import the necessary functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import the Auth module
import { getFirestore } from 'firebase/firestore'; // Firestore module if needed
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI1D6UnsdJZPXeveGxfS-ca2wZM2xu3-g",
  authDomain: "clubcheckapp.firebaseapp.com",
  projectId: "clubcheckapp",
  storageBucket: "clubcheckapp.firebasestorage.app",
  messagingSenderId: "395456068200",
  appId: "1:395456068200:web:4f8f37c23e2aecf31cd9dd", 
  measurementId: "G-BGDPV48YKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional if you want to use analytics
export const auth = getAuth(app); // Firebase authentication instance
export const firestore = getFirestore(app); // Firestore instance, if needed
