const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timer = document.querySelector("#time");
const board = document.querySelector("#board");
const colors = [
    "#d66868",
    "#e2ab6c",
    "#d1b82d",
    "#5bd12d",
    "#1957ca",
    "#a719ca",
];
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

function finishGame() {
    timer.parentNode.classList.add("hide");
    board.innerHTML = `<h1>Ваш счет: <span class='primary'>${score}</span><h1>`;
}

function createRandomCircle() {
    const circle = document.createElement("div");
    const size = getRandomNumber(10, 60);
    const { height, width } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add("circle");
    circle.style.background = getRandomColor();
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    console.log(index);
    return colors[index];
}

function setTime(value) {
    timer.innerHTML = `00:${value}`;
}
