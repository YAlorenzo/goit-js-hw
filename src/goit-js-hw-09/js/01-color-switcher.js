
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timer;


// listenerEvent ====>
startBtn.addEventListener("click", onStartAnim);
stopBtn.addEventListener("click", onStopAnim);
// ------------------------------------------------

// callback function ===>
function onStartAnim(){
      timer = setInterval(() => {
      const randomCol = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      body.style.backgroundColor = randomCol;
      }, 1000);
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

function onStopAnim() {
    clearInterval(timer);


    startBtn.disabled = false;
    stopBtn.disabled = true;
}
