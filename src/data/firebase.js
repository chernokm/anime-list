import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAOKOK0HfjU3FbDQMSWkgKl3cw5lv_1mto",
    authDomain: "animelist-3ca6c.firebaseapp.com",
    databaseURL: "https://animelist-3ca6c.firebaseio.com",
    projectId: "animelist-3ca6c",
    storageBucket: "animelist-3ca6c.appspot.com",
    messagingSenderId: "222163150103",
    appId: "1:222163150103:web:ce4e437f1b17396ae6c352"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

const db = firebase.firestore();
const animeCollection = db.collection("anime");
const usersCollection = db.collection("users");

export default db;
export { animeCollection, usersCollection, provider, auth, firebase };