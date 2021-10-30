"use strict";

const email = document.querySelector("#email");
const password = document.querySelector("#password");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let users_accounts = localStorage.getItem("users_accounts");
  users_accounts = JSON.parse(users_accounts);
  let found_email=false;
  if(users_accounts){
  for(let i=0;i<users_accounts.length;i++){
    if(users_accounts[i].email==email.value){
      users_accounts=users_accounts[i];
      found_email=true;
    }
  }
  if(found_email){
    if(users_accounts.password == password.value){
      localStorage.setItem("logged_in", JSON.stringify(users_accounts));
      showError(" ");
      window.location.href="./quiz.html";
    }
  }
  if(!found_email){
    found_email=false;
    showError("Email not registered")
  }
  if(found_email && users_accounts.password!==password.value){
    showError("Wrong Password");
  }
}
else{
  showError("Email not registered");
}
});

const showError = (error_type) => {
  document.querySelector(".msg_error").style.display = "block";
  document.querySelector(".msg_error").textContent = `${error_type}`;
};

document.querySelector(".login").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".form_sections").classList.toggle("form_hidden");
  document.querySelector(".form_sections").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".toggle-btn").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("hidden");
  document.querySelector(".social-icons").classList.toggle("hidden");
});

let scrollBtn = document.getElementById("scroll-up");
document.addEventListener("scroll", () => {
  document.documentElement.scrollTop > 20 ? scrollBtn.style.display = "block" : scrollBtn.style.display = "none";
});
