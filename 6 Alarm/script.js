  let currentTimeDisplay = document.querySelector("#current-time");
let status = document.querySelector("#status-text");

let arr = [];
let delId = null;

setInterval(() => {
  date = new Date();

  currentTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  currentTimeDisplay.textContent = currentTime;

  arr.forEach((obj) => {
    if (obj.time === currentTime && obj.id !== delId) {
      delId = obj.id;
      let card = document.querySelector(".alarm-card");
      if (card) {
        card.classList.add("ringing");
      }
      setTimeout(() => {
        if (card) {
          card.classList.remove("ringing");
        }
        arr = arr.filter((obj) => obj.id != delId);

        saveToLocalStorage();
        loadFromLocalStorage();

        delId = null;
      }, 10000);
    }
  });
}, 1000);

document.querySelector("#set-alarm-btn").addEventListener("click", (e) => {
  let grabAmPm = document.getElementById("ampm-select").value;
  let grabMin = document.getElementById("minute-select").value;
  let grabHour = document.getElementById("hour-select").value;

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
    arr = arr.filter(
      (obj) => obj.id != e.target.parentNode.getAttribute("data-id"),
    );
    div.remove();
    saveToLocalStorage();
  });
}

document.querySelector("#clear-alarm-btn").addEventListener("click", (e) => {
  status.innerHTML = "";
  arr = [];
  saveToLocalStorage();
});

function saveToLocalStorage() {
  localStorage.setItem("arr", JSON.stringify(arr));
}

function loadFromLocalStorage() {
  status.innerHTML = "";
  if (localStorage.getItem("arr")) {
    arr = JSON.parse(localStorage.getItem("arr"));
    arr.forEach((obj) => {
      create(obj);
    });
  }
}

loadFromLocalStorage();
