const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timer = document.querySelector("#time");
const board = document.querySelector("#board");
let time = 0;
let score = 0;

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

board.addEventListener("click", (e) => {
    if (e.target.classList.contains("circle")) {
        score++;
        e.target.remove();
        createRandomCircle();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
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

function createRandomCircle() {
    const circle = document.createElement("div");
    const size = getRandomNumber(10, 60);
    const { height, width } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add("circle");
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle);
}

function setTime(value) {
    timer.innerHTML = `00:${value}`;
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
