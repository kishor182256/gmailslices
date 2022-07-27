
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBkxnWv8pRGGv-hmmqUfDNxHOzsy2Z5Nfc",
    authDomain: "clone-4fe96.firebaseapp.com",
    projectId: "clone-4fe96",
    storageBucket: "clone-4fe96.appspot.com",
    messagingSenderId: "949751345215",
    appId: "1:949751345215:web:4cd1ad8d981b3debf9488a"
  };


  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {app, auth, provider};
