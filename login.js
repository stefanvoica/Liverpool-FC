document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        alert("Logare reușită!");
        window.location.href = "/logat.html";
      })
      .catch((error) => {
        alert("Eroare la logare: " + error.message);
        window.location.href = "/404.html";
      });
  });
});
