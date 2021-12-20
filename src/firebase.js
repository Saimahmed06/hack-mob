import { getFirestore } from "firebase/firestore"

import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDRomuru_3Duwx50ADonOEuKbsdP0fCnEQ",
    authDomain: "khana-sab-ky-liye.firebaseapp.com",
    projectId: "khana-sab-ky-liye",
    storageBucket: "khana-sab-ky-liye.appspot.com",
    messagingSenderId: "797351327059",
    appId: "1:797351327059:web:83a4b0fbb0cdfb7a009da6",
    measurementId: "G-BQPMK46F2J"
  };
  initializeApp(firebaseConfig)

export const db = getFirestore();
