let scrollBtn=document.getElementById("scroll-up");
document.addEventListener('scroll',function(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
scrollBtn.style.display="block";}
else{
    scrollBtn.style.display="none";
}
})

function check_function() {
    let p1 = document.getElementById("password1");
    let p2 = document.getElementById("password2");
    let msg1 = document.getElementById("pw1_check");
    let msg2 = document.getElementById("pw2_check");
   
    if(p1.value.length >= 8){
        msg1.innerHTML = "<img src=\"https://img.icons8.com/material-outlined/24/4a90e2/checkmark--v1.png\"/>";
    }
    else{
        msg1.innerHTML="Length is short";
    }

    if (p1.value == p2.value) {
        msg2.innerHTML= "<img src=\"https://img.icons8.com/material-outlined/24/4a90e2/checkmark--v1.png\"/>";
    }
    else if(p1.value != p2.value && p1.value.length <8){
        msg2.innerHTML="Doesn't match";
    }

}


let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password1");

document.querySelector(".toggle-btn").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("hidden");
  document.querySelector(".social-icons").classList.toggle("hidden");
});

const all_user_data = [];

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault();

  const user_data = {
    first_name: fname.value,
    last_name: lname.value,
    email: email.value,
    password: password.value,
  };

  all_user_data.push(user_data);

  if (!localStorage.getItem("users_accounts")) {
    localStorage.setItem("users_accounts", JSON.stringify(all_user_data));
  } else {
    let getAcconuts = JSON.parse(localStorage.getItem("users_accounts"));
    getAcconuts.push(user_data);
    localStorage.setItem("users_accounts", JSON.stringify(getAcconuts));
  }

  fname.value = "";
  lname.value = "";
  email.value = "";
  password.value = "";

  window.location.href = "./index.html";
});
// function moveToLogin(e){
//     e.preventDefault();
//     const user_data = {
//         first_name: fname.value,
//         last_name: lname.value,
//         email: email.value,
//         password: password.value,
//       };
    
//       all_user_data.push(user_data);
    
//       if (!localStorage.getItem("users_accounts")) {
//         localStorage.setItem("users_accounts", JSON.stringify(all_user_data));
//       } else {
//         let getAcconuts = JSON.parse(localStorage.getItem("users_accounts"));
//         getAcconuts.push(user_data);
//         localStorage.setItem("users_accounts", JSON.stringify(getAcconuts));
//       }
    
//       fname.value = "";
//       lname.value = "";
//       email.value = "";
//       password.value = "";
    
//       window.location.href = "./index.html";    
// }