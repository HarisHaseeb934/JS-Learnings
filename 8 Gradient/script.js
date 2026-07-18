let div = document.querySelector(".copy");
let icon = document.querySelector(".fa-regular");
let color1 = "";
let color2 = "";
let color3 = "";
let body = document.body;

document.getElementById("generate").addEventListener("click", (e) => {
  generateColor();
  body.style.backgroundImage = `linear-gradient(${color1}, ${color2}, ${color3})`;
  div.textContent = `background-image: linear-gradient(${color1}, ${color2}, ${color3});`;
});
div.addEventListener("click", (e) => {
  copyText(div);
});

document.querySelectorAll(".btn").forEach((b) => {
  b.addEventListener("click", (e) => {
    if (e.target.id === "up") {
      body.style.backgroundImage = `linear-gradient(to top,${color1}, ${color2}, ${color3})`;
      div.textContent = `background-image: linear-gradient(to top,${color1}, ${color2}, ${color3});`;
    } else if (e.target.id === "down") {
      body.style.backgroundImage = `linear-gradient(to bottom,${color1}, ${color2}, ${color3})`;
      div.textContent = `background-image: linear-gradient(to bottom,${color1}, ${color2}, ${color3});`;
    } else if (e.target.id === "right") {
      body.style.backgroundImage = `linear-gradient(to right,${color1}, ${color2}, ${color3})`;
      div.textContent = `background-image: linear-gradient(to right,${color1}, ${color2}, ${color3});`;
    } else {
      body.style.backgroundImage = `linear-gradient(to left,${color1}, ${color2}, ${color3})`;
      div.textContent = `background-image: linear-gradient(to left,${color1}, ${color2}, ${color3});`;
    }
  });
});

function copyText(element) {
  const textToCopy = element.innerText;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Text copied successfully!");
    })
    .then(() => {
      icon.style.visibility = "visible";
      setTimeout(() => {
        icon.style.visibility = "hidden";
      }, 500);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

function generateColor() {
  color1 = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  color2 = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  color3 = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}
