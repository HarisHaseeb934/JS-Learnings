let currentTimeDisplay = document.querySelector("#current-time");
let status = document.querySelector("#status-text");

let currentTime = 0;
let grabHour = 0;
let grabMin = 0;
let grabAmPm = 0;

let arr = [];
let count = 0;

let timerId = setInterval(() => {
  let date = new Date();
  currentTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  currentTimeDisplay.textContent = currentTime;

  for (let a = 0; a < arr.length; a++) {
    if (arr[a] === currentTime) {
      document.querySelector(".alarm-card").classList.add("ringing");
     arr = arr.filter((t)=> t !== currentTime)
      setTimeout(() => {
        document.querySelector(".alarm-card").classList.remove("ringing");
        let indexToRemove = arr.indexOf(currentTime);
        if (indexToRemove > -1) {
          arr.splice(indexToRemove, 1);
        }
        arr.splice(delIndex, 1);
      }, 20000);
    }
  }

  console.log(arr);
}, 1000);

console.log(currentTime);

document.querySelector("#set-alarm-btn").addEventListener("click", (e) => {
  grabAmPm = document.getElementById("ampm-select").value;
  grabMin = document.getElementById("minute-select").value;
  grabHour = document.getElementById("hour-select").value;

  if (grabAmPm && grabMin && grabHour) {
    create(grabHour, grabMin, grabAmPm);
  }
});

function create(h, m, amPm) {
  let div = document.createElement("div");
  let span = document.createElement("span");
  let button = document.createElement("button");

  div.classList.add("alarm-item");
  span.classList.add("alarm-time-text");
  button.classList.add("delete-alarm-btn");

  span.textContent = `${h}:${m} ${amPm}`;
  button.textContent = "X";

  div.appendChild(span);
  div.appendChild(button);

  status.appendChild(div);

  arr[count++] = `${h}:${m} ${amPm}`;

  button.addEventListener("click", (e) => {
    div.remove();
  });

  document.querySelector("#clear-alarm-btn").addEventListener("click", (e) => {
    document.querySelectorAll(".alarm-item").forEach((div) => {
      div.remove();
    });
  });
}
