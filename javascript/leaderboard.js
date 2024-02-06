  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getFirestore, getDocs, collection, query, orderBy, where, limit} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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
      $("#leaderboardList").append("<p>No users for leaderboard</p>")
    } else {
      querySnapshot.forEach((doc) => {
        $("#leaderboardList").append('<li class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + doc.data().username + '</div></div><span class="badge bg-primary rounded-pill">' + doc.data().score + ' Points</span></li>');   
    });
    }
  }

  async function querySnapshotTop10(q) {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      $("#leaderboardList2").append("<p>No users for leaderboard</p>")
    } else {
      querySnapshot.forEach((doc) => {
        $("#leaderboardList2").append('<li class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + doc.data().username + '</div></div><span class="badge bg-primary rounded-pill">' + doc.data().score + ' Points</span></li>');   
    });
    }
  }

  // search player
  async function search(q) {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      $("#leaderboardList").append("<p>No users for leaderboard</p>")
    } else {
      querySnapshot.forEach((doc) => {
        $("#leaderboardList").append('<li class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + doc.data().username + '</div></div><span class="badge bg-primary rounded-pill">' + doc.data().score + ' Points</span></li>');   
    });
    }
  }

  // show leaderboard
  $( document ).ready(function() {
    $("#accountBtn").text(localStorage.getItem("username"));
    const q = query(collection(db, "users"), orderBy("score", "desc"));
    const j = query(collection(db, "users"), orderBy("score", "desc"), limit(10));
    querySnapshot(q);
    querySnapshotTop10(j)
  });

  $("#submit").click(function(){
    const username = $("#search").val();
    var q = query(collection(db, "users"), where("username", ">=", username.toLowerCase()), where("username", "<=", username.toLowerCase() + "\uf8ff"));
    if (username == "") {
      q = query(collection(db, "users"), orderBy("score", "desc"));
      $("#leaderboardList").empty();
      querySnapshot(q);
    }
    else {
      $("#leaderboardList").empty();
      search(q);
    }
  });