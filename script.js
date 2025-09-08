document.getElementById("Btn").addEventListener("click", () => {
  document.getElementById("message").textContent = "Button clicked successfully!";
});
document.getElementById("theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
document.getElementById("Form").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Please fill out your name";
    valid = false;
  }
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword !== password) {
    document.getElementById("confirmError").textContent = "Invalid password!Try again.";
    valid = false;
  }
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully!";
    document.getElementById("myForm").reset();
  }
});
