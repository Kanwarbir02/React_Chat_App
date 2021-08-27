import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDkqBGFMuB7q4TCmCGy0i1OWsfwilgYeWw",
    authDomain: "firechat-basic.firebaseapp.com",
    projectId: "firechat-basic",
    storageBucket: "firechat-basic.appspot.com",
    messagingSenderId: "64978902589",
    appId: "1:64978902589:web:18f82a203a3a64013c1454",
    measurementId: "G-Y988R2VNK7"
})

const db = firebaseApp.fireStore();

const Auth = firebase.auth();

export { db, Auth }