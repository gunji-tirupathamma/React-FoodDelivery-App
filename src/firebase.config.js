import{getApp,getApps,initializeApp} from 'firebase/app'
import{getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCUSVY7D-GKrXA-ZeZ65As9Js6efmjIIYM",
    authDomain: "restaurantapp-a2d49.firebaseapp.com",
    databaseURL: "https://restaurantapp-a2d49-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-a2d49",
    storageBucket: "restaurantapp-a2d49.appspot.com",
    messagingSenderId: "539935939007",
    appId: "1:539935939007:web:57001fd02a86e574b3290a"
  };
  

  const app=getApp.length>0? getApp() : initializeApp(firebaseConfig)

  const firestore=getFirestore(app)

  const storage =getStorage(app)

  export{app,firestore,storage}