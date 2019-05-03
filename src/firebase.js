import firebase from 'firebase/app';
import 'firebase/firestore'
const config = {
    apiKey: "AIzaSyAiINnlDtFHofyzMLs0aJdevvsOVdnKn4g",
    authDomain: "test-8f4aa.firebaseapp.com",
    databaseURL: "https://test-8f4aa.firebaseio.com",
    projectId: "test-8f4aa",
    storageBucket: "test-8f4aa.appspot.com",
    messagingSenderId: "96540366653"
  };

firebase.initializeApp(config);
const firestore=new firebase.firestore()

export {firestore}