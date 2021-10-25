"use strict";

document.querySelector(".toggle-btn").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("hidden");
  document.querySelector(".social-icons").classList.toggle("hidden");
});

let email = document.querySelector("#email");
let password = document.querySelector("#password");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let r_data = localStorage.getItem("users_accounts");

  if (r_data) {
    r_data = JSON.parse(r_data);

    for (let i = 0; i < r_data.length; i++) {
      if (
        r_data[i].email === email.value &&
        r_data[i].password === password.value
      ) {
        window.location.href = "./quiz.html";
        localStorage.setItem("logged_in", JSON.stringify(r_data[i]));
        showError(" ");
        break;
      } else {
        if (
          r_data[i].password !== password.value &&
          r_data[i].email !== email.value
        ) {
          showError("email & password incorrect!");
        } else if (r_data[i].password !== password.value) {
          showError("password incorrect!");
        } else if (r_data[i].email !== email.value) {
          showError("email incorrect!");
        }
      }
    }
  } else {
    email.value = "";
    password.value = "";
    showError("Please go to register page & create an account!");
  }
});

function showError(error_type) {
  document.querySelector(".msg_error").style.display = "block";
  document.querySelector(".msg_error").textContent = `${error_type}`;
}

document.querySelector(".login").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".form_sections").classList.toggle("form_hidden");
  document
    .querySelector(".form_sections")
    .scrollIntoView({ behavior: "smooth" });
});

let scrollBtn = document.getElementById("scroll-up");
document.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
