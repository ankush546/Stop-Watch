let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let lap = document.querySelector(".lap");
let mili = document.querySelector(".milisec");
let minutes = document.querySelector(".min");
let seconds = document.querySelector(".sec");
let hour = document.querySelector(".hr");
let reset = document.querySelector(".reset");
let lapContainer = document.querySelector(".lapcontainer");

let a = 0, b = 0, c = 0, d = 0;
let interval;
let lapCount = 1;

start.addEventListener("click", () => {
    start.style.display = "none";
    stop.style.display = "block";
    lap.style.display = "block";
    interval = setInterval(time, 10);
});

stop.addEventListener("click", () => {
    reset.style.display = "block";
    stop.style.display = "none";
    start.style.display = "block";
    lap.style.display = "none";
    clearInterval(interval);
});

reset.addEventListener("click", () => {
    stop.style.display = "none";
    reset.style.display = "none";
    lap.style.display = "block";
    start.style.display = "block";
    lapContainer.innerHTML = "";
    lapCount = 1;
    resetTimer();
});

lap.addEventListener("click", addLap);

function time() {
    a++;

    if (a >= 100) {
        a = 0;
        b++;
    }

    if (b >= 60) {
        b = 0;
        c++;
    }

    if (c >= 60) {
        c = 0;
        d++;
    }

    mili.innerHTML = a.toString().padStart(2, "0");
    seconds.innerHTML = b.toString().padStart(2, "0");
    minutes.innerHTML = c.toString().padStart(2, "0");
    hour.innerHTML = d.toString().padStart(2, "0");
}

function resetTimer() {
    clearInterval(interval);
    a = 0;
    b = 0;
    c = 0;
    d = 0;

    mili.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hour.innerHTML = "00";
}

function addLap() {
    let lapTime = `${d.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${b.toString().padStart(2, "0")}:${a.toString().padStart(2, "0")}`;

    let lapElement = document.createElement("div");
    lapElement.classList.add("lap-item");
    lapElement.innerHTML = `<strong>Lap ${lapCount}:</strong> ${lapTime}`;
    lapContainer.appendChild(lapElement);

    lapCount++;
}