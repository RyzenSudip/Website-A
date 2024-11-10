document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple check: Adjust these values to your preference
  const correctUsername = "admin";
  const correctPassword = "password123";

  if (username === correctUsername && password === correctPassword) {
      // Redirect to admin page
      window.location.href = "admin.html";
  } else {
      // Display error message
      document.getElementById("error-message").textContent = "Invalid username or password.";
  }
});
