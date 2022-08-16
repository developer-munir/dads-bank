document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "developermunir@gmail.com" && password === "baperbank") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid Email Password!! Bap er tk mara atow sosta na");
  }
});
