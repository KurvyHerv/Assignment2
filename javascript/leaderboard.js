  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getFirestore, getDocs, collection, query, orderBy, where} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

  async function querySnapshot(q) {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      $("#leaderboardList2").append("<p>No users for leaderboard</p>")
      $("#leaderboardList").append("<p>No users for leaderboard</p>")
    } else {
      querySnapshot.forEach((doc) => {
        $("#leaderboardList2").append('<li class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + doc.data().username + '</div></div><span class="badge bg-primary rounded-pill">' + doc.data().score + ' Points</span></li>');   
        $("#leaderboardList").append('<li class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + doc.data().username + '</div></div><span class="badge bg-primary rounded-pill">' + doc.data().score + ' Points</span></li>');   
    });
    }
  }

  async function search(q) {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      $("#leaderboardList").empty().append("<p>No users for leaderboard</p>")
    } else {
      querySnapshot.forEach((doc) => {
        $("#leaderboardList").empty().append('<li class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + doc.data().username + '</div></div><span class="badge bg-primary rounded-pill">' + doc.data().score + ' Points</span></li>');   
    });
    }
  }

  $( document ).ready(function() {
    $("#accountBtn").text(localStorage.getItem("username"));
    const q = query(collection(db, "users"), orderBy("score", "desc"));
    querySnapshot(q);
  });

  $("#submit").click(function(){
    const username = $("#search").val();
    var q = query(collection(db, "users"), where("username", "==", username.toLowerCase()));
    if (username == "") {
      q = query(collection(db, "users"), orderBy("score", "desc"));
      $("#leaderboardList").empty();
      $("#leaderboardList2").empty();
      querySnapshot(q);
    }
    else {
      search(q);
    }
  });