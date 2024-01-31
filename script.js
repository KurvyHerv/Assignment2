const docRef = doc(assignment2, "users", "hervsie@gmail.com");
const docSnap = await getDoc(docRef);

document.addEventListener("DOMContentLoaded", function() {
  const APIKEY = "65b471a98b1bd4aa1706fb1a";
  document.getElementById("loginSubmit").addEventListener("click", function(e) {
    e.preventDefault();

    let settings = {
      "async": true,
      "crossDomain": true,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      }
    }

    fetch("https://interactivedev-f11e.restdb.io/rest/student", settings)
    .then(response => response.json())
    .then(response => {

      for (var i = 0; i < response.length && i < limit; i++) {

        if (response[i].email == document.getElementById("email").value) {
          console.log("SDJKLFSDJFSLFDJFSDLKFJSDLSFJS:FLSDFJSD")
        }
        else {
          console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
        }

      }
    });
});
})