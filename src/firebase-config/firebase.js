import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import "firebase/auth"

firebase.initializeApp({
    apiKey: "AIzaSyDDkc0US9x80d9fOjz2O-_a5rwG5Zhkkso",
    authDomain: "hackaton-citi.firebaseapp.com",
    databaseURL: "https://hackaton-citi.firebaseio.com",
    projectId: "hackaton-citi",
    storageBucket: "hackaton-citi.appspot.com",
    messagingSenderId: "960931952664",
    appId: "1:960931952664:web:0b07d674fec36906502b6d"
  });

let db = firebase.firestore();
export let auth = firebase.auth();

export default db;