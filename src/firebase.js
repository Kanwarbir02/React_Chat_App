import firebase from "firebase";
import 'firebase/firestore';
import {useAuthState} from "react-firebase-hooks/auth";
import { object } from "./firebaseInitObj";

const firebaseApp = firebase.initializeApp(object)

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }