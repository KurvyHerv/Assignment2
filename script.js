  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA8pGEb5R2z-6tJ0EWQTpzodg_XfetCLzM",
    authDomain: "assignment2-c611f.firebaseapp.com",
    projectId: "assignment2-c611f",
    storageBucket: "assignment2-c611f.appspot.com",
    messagingSenderId: "624702798608",
    appId: "1:624702798608:web:92f6ac8760ba9955010395"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const docRef = doc(db, "users", "hervsie@gmail.com");
  const docSnap = await getDoc(docRef);

  $("#loginSubmit").click(function(){
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  });