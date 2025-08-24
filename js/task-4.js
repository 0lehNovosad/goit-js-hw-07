const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.elements.email;
  const password = loginForm.elements.password;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  const result = {
    [email.name]: email.value.trim(),
    [password.name]: password.value.trim(),
  };

  console.log(result);
  loginForm.reset();
});