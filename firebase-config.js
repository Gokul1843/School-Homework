
// 🔥 Firebase Configuration
// Replace with your own Firebase project keys

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "000000000",
  appId: "1:000000:web:000000"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
