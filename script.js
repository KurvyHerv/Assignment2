const docRef = doc(assignment2, "users", "hervsie@gmail.com");
const docSnap = await getDoc(docRef);

document.addEventListener("DOMContentLoaded", function() {

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
});