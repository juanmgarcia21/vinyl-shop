import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADypWMmfTJOtG-WjCOKgskWk8G0qSgj3A",
    authDomain: "vinyl-store-8c115.firebaseapp.com",
    projectId: "vinyl-store-8c115",
    storageBucket: "vinyl-store-8c115.appspot.com",
    messagingSenderId: "769915390832",
    appId: "1:769915390832:web:11f593d77731b296c01db5"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export const database = firebase.firestore();