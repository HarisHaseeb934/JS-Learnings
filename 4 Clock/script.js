let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h.toString().length === 1 ? "0" + h : h;
    m = m.toString().length === 1 ? "0" + m : m;
    s = s.toString().length === 1 ? "0" + s : s;

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
},1000);

