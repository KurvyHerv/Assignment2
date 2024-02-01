async function getUsers(db) {
    const userCol = collection(db, 'users');
    const userSnapshot = await getDocs(userCol);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
  }

  $('document').ready(function(){
    getUsers(db);
    console.log(userList)
  });