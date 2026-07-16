let buttons = document.getElementsByClassName("accordion-item");
for(let button of buttons){
    button.addEventListener("click", (e)=>{
        e.currentTarget.classList.toggle("active")
    })
}