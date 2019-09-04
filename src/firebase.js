import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDKlIeYO0jIJpAGyqa1JIfl_sAIyw_RNrg",
  authDomain: "authentication-eb85d.firebaseapp.com",
  databaseURL: "https://authentication-eb85d.firebaseio.com",
  projectId: "authentication-eb85d",
  storageBucket: "",
  messagingSenderId: "602704770815",
  appId: "1:602704770815:web:64a0ccc2e8687a6581beca"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
