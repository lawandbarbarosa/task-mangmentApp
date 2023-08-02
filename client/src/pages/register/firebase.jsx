
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJXq_kydThOkLo5bxWHXDpLAYbAh4ETBQ",
  authDomain: "task-23793.firebaseapp.com",
  projectId: "task-23793",
  storageBucket: "task-23793.appspot.com",
  messagingSenderId: "651870597167",
  appId: "1:651870597167:web:37470f83ea36ad2ca056da",
  measurementId: "G-BPGM1JH2L7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);