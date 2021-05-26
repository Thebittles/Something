// initial firebase boiler plate
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

// we need a config here

const config = {
  apiKey: "AIzaSyCNspYdDgZENANVW8cRD0N0L-udhrQi5O4",
  authDomain: "netflix-clone-irisn.firebaseapp.com",
  projectId: "netflix-clone-irisn",
  storageBucket: "netflix-clone-irisn.appspot.com",
  messagingSenderId: "684687606440",
  appId: "1:684687606440:web:61e113104975e70da8789d"
};

const firebase = Firebase.initializeApp(config);

// comment out after seeding - or else it will fill firebase cloud again

// seedDatabase(firebase);

export {firebase};