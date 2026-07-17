let previousScreen = document.querySelector(".previous-operand");
let currentScreen = document.querySelector(".current-operand");

let prev = 0;
let curr = 0;
let string = "";
let op = "";
let resul = 0;

let obj = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

document.querySelectorAll(".calculator-keys").forEach(action => {
  action.addEventListener("click", (e) => {

    if(e.target.classList.contains("operator")){

      previousScreen.textContent += currentScreen.textContent + e.target.textContent;
      currentScreen.textContent = "";
      op = e.target.textContent;

    }else if(e.target.classList.contains("action")){

      if(e.target.getAttribute("data-action") === "delete"){
        currentScreen.textContent = stringEdit(currentScreen.textContent);
      }else{
        clear();
      }

    }else if(e.target.classList.contains("double-zero")){

      currentScreen.textContent += e.target.textContent;

    }else if(e.target.className === "key equals"){

      if(isNaN(parseFloat(currentScreen.textContent)) || isNaN(parseFloat(previousScreen.textContent))){
        currentScreen.textContent = "Please put valid expression";
        clear(string);
      }
      resul = obj[op](parseFloat(previousScreen.textContent), parseFloat(currentScreen.textContent));
      if(isFloat(resul)){
        currentScreen.textContent = resul.toFixed(2);
      }else{
        currentScreen.textContent = resul;
      }
    }else if(e.target.classList.contains("decimal")){
      if(currentScreen.textContent.includes('.')){
        return;
      }
      currentScreen.textContent += e.target.textContent;
    }else if(e.target.classList.contains("number")){
      // currentScreen.textContent = "";
      currentScreen.textContent += e.target.textContent;
      
    }

  })
})

function clear() {
  prev = 0;
  curr = 0;
  previousScreen.textContent = "";
  currentScreen.textContent = "";
}

function validateOperator(string) {
  

  return string;
}

function stringEdit(string) {
  return string.slice(0, -1);
}

function validString(string){
  if(!isNaN(parseFloat(string))){
    return parseFloat(string);
  }else{
    return "invalid";
  }
}

function save(string){
 
}

function isFloat(value) {
  return typeof value === 'number' && 
         !Number.isNaN(value) && 
         !Number.isInteger(value);
}