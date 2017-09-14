var link = document.querySelector(".feedback-button");

var popup = document.querySelector(".modal-feedback");

var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
  
form.addEventListener("submit", function (evt) {
  console.log("OK");
  console.log("usr: "+username.value);
  console.log("email: "+email.value);
  console.log("logic: "+(!username.value || !email.value));
  if (!username.value || !email.value) {
    evt.preventDefault();
	console.log("Нужно ввести логин и пароль");
    popup.classList.add("modal-error");
  } else {
    popup.classList.remove("modal-error");
  }
});