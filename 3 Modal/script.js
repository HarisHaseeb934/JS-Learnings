let open_btn = document.querySelector("#open-btn");
let close_btn = document.querySelector("#close-btn");

let modal = document.querySelector("#modal-overlay");

open_btn.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        modal.classList.toggle("active");
    }
})
modal.addEventListener("click", (e) => {
    if(e.target.tagName === "DIV"){
        modal.classList.toggle("active");
    }
})
close_btn.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        modal.classList.toggle("active");
    }
})