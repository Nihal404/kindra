import { initializeApp } from "firebase/app";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCFtcc1OrD_G7x1Xa0V8tXxtiKQRODhX44",

  authDomain: "AIzaSyCFtcc1OrD_G7x1Xa0V8tXxtiKQRODhX44",

  projectId: "kindra-auth",

  storageBucket: "kindra-auth.firebasestorage.app",

  messagingSenderId: "167789952975",

  appId: "1:167789952975:web:98de56114bfc1ef909dcbas"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export {
  RecaptchaVerifier,
  signInWithPhoneNumber,
};