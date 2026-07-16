let previousScreen = document.querySelector(".previous-operand");
let currentScreen = document.querySelector(".current-operand");
let string = "";
let op = "";
let prev = "";
let current = "";
let opCount = "";

let obj = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};
document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", (e) => {
    if(e.target.className === "key number"){
        string += e.target.textContent;
        currentScreen.textContent = string;
    }else if(e.target.className === "key operator"){
        prev = currentScreen.textContent;
        previousScreen.textContent = currentScreen.textContent;

        currentScreen.textContent = " ";
        currentScreen.textContent = e.target.textContent;
        // string += 

    }else if(e.target.className === "key action"){

    }else if(e.target.className === "key equals"){

    }
  });
});

function calc(a, op, c) {
  switch (op) {
    case "+":
      return obj["+"](a, c);
      break;
    case "-":
      return obj["-"](a, c);
      break;
    case "*":
      return obj["*"](a, c);
      break;
    case "/":
      return obj["/"](a, c);
      break;
  }
}

// console.log(calc(10, "+", 11));
