function showPage(){
    $("#loader").attr('hidden', true)
    document.getElementById("main").style.display = "block";
}
setTimeout(showPage, 3000)


function gameOver() {
    $("#end").attr('hidden', false)
    $("#main").attr('hidden', true)
  
    
    // You can add additional logic here, e.g., displaying final score or other actions.
  
    // Wait for the animation to finish (adjust the time accordingly)
    setTimeout(function () {
      // Redirect to homepage.html after animation
      window.location.href = "homepage.html";
    }, 3000); // Adjust the time according to the duration of your animation
  }

  function beforeLeave() {
    return "Are you sure you want to leave? Game progress will not be saved.";
  }