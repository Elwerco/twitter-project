// import firebase from "firebase";
import * as firebase from 'firebase';
// import firebase from 'firebase/app';

  var config = {
    apiKey: "AIzaSyB8FEV2YzoC8roEll0yBICoqh3R1IKAZMA",
    authDomain: "twitter-project-e5c77.firebaseapp.com",
    databaseURL: "https://twitter-project-e5c77.firebaseio.com",
    projectId: "twitter-project-e5c77",
    storageBucket: "twitter-project-e5c77.appspot.com",
    messagingSenderId: "555560489573"
  };

export const fire = firebase.initializeApp(config);