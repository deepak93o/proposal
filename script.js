// script.js
document.getElementById('acceptButton').addEventListener('click', function() {
    window.location.href = "confirmation.html";

  });
  document.getElementById('rejectButton').addEventListener('click', function() {
    alert('Sorry you have to accept this proposal!');
    // You can also redirect to another page or perform additional actions here
  });
  