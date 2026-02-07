function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    document.getElementById("error").innerText = "All fields required";
    return;
  }

  // Save login session
  localStorage.setItem("loggedInUser", username);

  window.location.href = "index.html";
}
