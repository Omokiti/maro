
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyArzGJYs4S4UkBsNcEdM-uC2wSqmOubhOU",
  authDomain: "maro-e3c96.firebaseapp.com",
  projectId: "maro-e3c96",
  storageBucket: "maro-e3c96.appspot.com",
  messagingSenderId: "368819325370",
  appId: "1:368819325370:web:53775459a1d7659ee37583"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const authentication = getAuth(app);



// export const signInWithGoogle = ()=>{

// signInWithPopup(auth,provider)
// .then((result)=>{
// const name = result.user.displayName
//  console.log(result)
// localStorage.setItem("name",name)
// })
// .catch((error)=>{
//     console.log(error)
// })
// }