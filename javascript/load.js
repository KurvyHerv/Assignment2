import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, updateDoc, getDocs, collection, query, where} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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
var prevScore = 0;

window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = '';
  alert('Your game data will not be saved if you leave the page.');
});

async function setHighscore(username, score) {
  const querySnapshot = await getDocs(query(collection(db, "users"), where("username", "==", username)));
  querySnapshot.forEach((doc) => {
    prevScore = doc.data().score;
  });
  if (prevScore < score) {
    await updateDoc(doc(db, "users", username), {
      score: score
    });
  }
}

function showPage(){
    $("#loader").attr('hidden', true);
    document.getElementById("main").style.display = "block";
}
setTimeout(showPage, 3000);


export function gameOver() {
    const username = localStorage.getItem("username");
    const score = Number(localStorage.getItem("score"));
    var prevScore = 0;
    $("#end").attr('hidden', false);
    $("#main").attr('hidden', true);
    setHighscore(username, score, prevScore);
    window.onbeforeunload = null;
  
    // Wait for the animation to finish
    setTimeout(function () {
      // Redirect to homepage.html after animation
      window.location.href = "homepage.html";
    }, 3000);
  }