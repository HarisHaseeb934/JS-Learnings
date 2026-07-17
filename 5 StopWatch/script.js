let display = document.querySelector(".time");
let timeId = null;
let isTimerRunning = false;
let startTime = 0;
let spendTime = 0;

document.querySelector(".start").addEventListener("click", (e) => {
    start();
})
document.querySelector(".stop").addEventListener("click", (e) => {
    stop();
})
document.querySelector(".reset").addEventListener("click", (e) => {
    reset();
})

function start(){
    if(!isTimerRunning){
        startTime = Date.now() - spendTime;
        timeId = setInterval(update,10);
        isTimerRunning = true;
    }
}

function stop(){
    if(isTimerRunning){
        clearInterval(timeId);
        isTimerRunning = false;
    }
}

function reset(){
    if(isTimerRunning){
        clearInterval(timeId);
    }
    timeId = null;
    isTimerRunning = false;
    startTime = 0;
    spendTime = 0;
    display.textContent = "00 : 00 : 00 : 000";
}

function update(){
    spendTime = Date.now() - startTime;
    let h = Math.floor(spendTime / (60 * 60 * 1000));

    let m = Math.floor((spendTime / (60 * 1000)) % 60);

    let s = Math.floor((spendTime / 1000) % 60);

    let ms = Math.floor(spendTime % 1000);

    h = h.toString().length === 1 ? "0" + h : h;
    m = m.toString().length === 1 ? "0" + m : m;
    s = s.toString().length === 1 ? "0" + s : s;
    ms = ms.toString().length === 1 || ms.toString().length === 2 ? "0" + ms : ms;

    display.textContent = `${h} : ${m} : ${s} : ${ms}`
}
