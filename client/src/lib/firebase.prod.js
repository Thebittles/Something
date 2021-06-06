import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";
// we need to somehow seed the database
//we need a config here
const config = {
  apiKey: "AIzaSyDbacPZ5TqllwBWOJvpeByf94Ug2edMPrc",
  authDomain: "netflix2-e98da.firebaseapp.com",
  projectId: "netflix2-e98da",
  storageBucket: "netflix2-e98da.appspot.com",
  messagingSenderId: "383107556298",
  appId: "1:383107556298:web:f8ff81b6c215421f8da533",
};
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };
