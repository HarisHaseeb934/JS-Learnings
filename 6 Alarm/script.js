let currentTimeDisplay = document.querySelector("#current-time");
let status = document.querySelector("#status-text");

let currentTime = 0;
let grabHour = 0;
let grabMin = 0;
let grabAmPm = 0;

let arr = [];
let date = 0;
let delId = 0;

setInterval(() => {
  date = new Date();

  currentTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  currentTimeDisplay.textContent = currentTime;

  arr.forEach(obj => {
    if(obj.time === currentTime){
      document.querySelector(".alarm-card").classList.add("ringing");
      setTimeout(() => {
        document.querySelector(".alarm-card").classList.remove("ringing");
        delId = obj.id;
      },10000)
    }
  })

  setTimeout(() => {
    arr = arr.filter(obj => obj.id !== delId);
  },10000)

}, 100);

console.log(currentTime);

document.querySelector("#set-alarm-btn").addEventListener("click", (e) => {
  grabAmPm = document.getElementById("ampm-select").value;
  grabMin = document.getElementById("minute-select").value;
  grabHour = document.getElementById("hour-select").value;

  if (grabAmPm && grabMin && grabHour) {
    let obj = {};
    obj.id = Date.now();
    obj.time = `${grabHour}:${grabMin} ${grabAmPm}`;

    arr.push(obj);
    saveToLocalStorage();
    create(obj);
  }
});

function create(obj) {
  let div = document.createElement("div");
  let span = document.createElement("span");
  let button = document.createElement("button");

  div.classList.add("alarm-item");
  span.classList.add("alarm-time-text");
  button.classList.add("delete-alarm-btn");

  div.dataset.id = obj.id;
  span.textContent = obj.time;
  button.textContent = "X";

  div.appendChild(span);
  div.appendChild(button);

  status.appendChild(div);

  button.addEventListener("click", (e) => {
    arr = arr.filter(obj => obj.id != e.target.parentNode.getAttribute("data-id"));
    div.remove();
    saveToLocalStorage();
  });
}

document.querySelector("#clear-alarm-btn").addEventListener("click", (e) => {
  document.querySelectorAll(".alarm-item").forEach((div) => {
    status.innerHTML = "";
    arr = [];
    saveToLocalStorage();
  });
});

function saveToLocalStorage(){
  localStorage.setItem("arr", JSON.stringify(arr));
}

function loadFromLocalStorage(){
  if(localStorage.getItem("arr")){
    arr = JSON.parse(localStorage.getItem("arr"));
    arr.forEach(obj => {
      create(obj);
    })
  }
}

loadFromLocalStorage();
