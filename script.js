async function getUsers(db) {
  const usersCol = collection(db, 'cities');
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map(doc => doc.data());
  return userList;
}

document.addEventListener("DOMContentLoaded", function() {
  getUsers(db);

});