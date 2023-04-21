
import app from 'firebase/app'
import 'firebase/firestore'

import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA5RnUqy9GpcVcJKXuTp6NyEm8xoYK9gTs",
    authDomain: "job-listing-c29d9.firebaseapp.com",
    projectId: "job-listing-c29d9",
    storageBucket: "job-listing-c29d9.appspot.com",
    messagingSenderId: "293780255405",
    appId: "1:293780255405:web:0ae572bc25ec2fcba5cc24"
  };
  
  // Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

const firestore = firebase.firestore();


export {firebase, firestore, app};