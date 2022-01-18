import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  apiKey: "AIzaSyBGpVNZLM6YonNfdtJYgL2r-IjJkG50O88",
  authDomain: "shop-ffc4f.firebaseapp.com",
  projectId: "shop-ffc4f",
  storageBucket: "shop-ffc4f.appspot.com",
  messagingSenderId: "1036420973913",
  appId: "1:1036420973913:web:fc75558dd02917f137f848",
  measurementId: "G-KWV590YQZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
