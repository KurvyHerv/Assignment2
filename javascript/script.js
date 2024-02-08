

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDocs, collection, query, where, deleteDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// Firebase configuration
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

async function registerNewUser(username, password) {
  var querySnapshot = await getDocs(query(collection(db, "users"), where("username", "==", username.toLowerCase())));
  if (querySnapshot.empty) {
    await setDoc(doc(db, "users", username), {
      username: username,
      password: password,
      score: 0
    });
    querySnapshot = await getDocs(query(collection(db, "users"), where("username", "==", username.toLowerCase()), where("password", "==", password)));
    if (querySnapshot.empty) {
      console.log("An error occured.");
    } else {
      querySnapshot.forEach((doc) => {
        localStorage.setItem("score", doc.data().score);
        window.location.href = "homepage.html";
    });
    }
  } else {
    querySnapshot.forEach((doc) => {
      $("#usernameExistReg").attr("hidden",false);
  });
}
}

/* login new user */
async function querySnapshot(q) {
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    $("#wrongPwd").attr("hidden",false);
  } else {
    querySnapshot.forEach((doc) => {
      localStorage.setItem("score", doc.data().score);
      window.location.href = "homepage.html";
  });
  }
}

async function delDoc(username) {
  await deleteDoc(doc(db, "users", username));
}

async function changeInfo(username, password, oldUsername) {
  var querySnapshot = await getDocs(query(collection(db, "users"), where("username", "==", username.toLowerCase())));
  if (querySnapshot.empty) {
    await setDoc(doc(db, "users", username), {
      username: username,
      password: password,
      score: Number(localStorage.getItem("score"))
    });
    delDoc(oldUsername);
        localStorage.setItem("username",username.toLowerCase());
        localStorage.setItem("password",password);
        location.reload();
  } else if (username == oldUsername) {
    await setDoc(doc(db, "users", username), {
      username: username,
      password: password,
      score: Number(localStorage.getItem("score"))
    });
      localStorage.setItem("username",username.toLowerCase());
      localStorage.setItem("password",password);
      location.reload();
  } else {
    querySnapshot.forEach((doc) => {
      $("#usernameExist").attr("hidden",false);
    });
  }
}

$("#loginSubmit").click(function(){
  const username = $("#username").val();
  const password = $("#password").val();
  localStorage.setItem("username", username.toLowerCase());
  localStorage.setItem("password", password);

  const q = query(collection(db, "users"), where("username", "==", username.toLowerCase()), where("password", "==", password));
  querySnapshot(q);
});

$("#signUp").click(function(){
  const username = $("#registerUsername").val();
  const password = $("#registerPassword").val();
  localStorage.setItem("username",username.toLowerCase());
  localStorage.setItem("password",password);

  registerNewUser(username.toLowerCase(), password);
});

$("#saveChanges").click(function(){
  const oldUsername = localStorage.getItem("username");
  const username = $("#changeUsername").val().toLowerCase();
  const password = $("#changePassword").val();
  changeInfo(username, password, oldUsername);
});
