// initial firebase boiler plate
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// re comment when seeding done
// import { seedDatabase } from '../seed';

// we need a config here

// MUST REMOVE CONFIG INFO BEFORE PUSH TO GITHUB!!!!!!!!!!!

const config = {
  
};

const firebase = Firebase.initializeApp(config);

// comment out after seeding - or else it will fill firebase cloud again

// seedDatabase(firebase);

export {firebase};
