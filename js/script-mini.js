var link=document.querySelector(".feedback-button"),popup=document.querySelector(".modal-feedback"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),username=popup.querySelector("[name=username]"),email=popup.querySelector("[name=email]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){username.value&&email.value?popup.classList.remove("modal-error"):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))});