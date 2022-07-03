const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timer = document.querySelector("#time");
let time = 0;

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-time")) {
        time = +e.target.getAttribute("data-time");
        screens[1].classList.add("up");
        startGame();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timer.innerHTML = `00:${value}`;
}
