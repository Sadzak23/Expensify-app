import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// databaseExp.on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((child) => {
//    expenses.push({
//     id: child.key,
//     ...child.val()
//     })
//   });
  
//   console.log(expenses);
// });

// databaseExp.on('child_changed', (snapshot) => {
//   console.log(snapshot.key + ' has changed to ', snapshot.val());
// })

// databaseExp.push({
//   description: "Water bill",
//   note: "Last months bill",
//   amount: 1520,
//   createdAt: 1500
// });


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title.toLowerCase()} at ${val.job.company}`);
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Fetch failed', e);
//   });

// database.ref().set({
//   name: 'Alex',
//   age: 31,
//   stressLevel: 8,
//   job: {
//     title: 'Owner',
//     company: 'Running Tribe'
//   },
//   location: {
//     city: 'Belgrade',
//     country: 'Serbia'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// //database.ref('age').set(32);

// database.ref('isSingle').remove()
// .then(function() {
//   console.log("Remove succeeded.")
// })
// .catch(function(error) {
//   console.log("Remove failed: " + error.message)
// });

// database.ref().update({
//   stressLevel: 5,
//   'job/company': 'My agency',
//   'location/city': 'New York'
// })