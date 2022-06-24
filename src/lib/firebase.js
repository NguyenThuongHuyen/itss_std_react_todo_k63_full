import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-tHz353NOL0ddeMUogI9e9znH56zz-_0",
    authDomain: "fir-sample-18a11.firebaseapp.com",
    projectId: "fir-sample-18a11",
    storageBucket: "fir-sample-18a11.appspot.com",
    messagingSenderId: "692465114236",
    appId: "1:692465114236:web:f4b6a29b6fcd61e57c3df9"
  };

  　firebase.initializeApp(firebaseConfig);