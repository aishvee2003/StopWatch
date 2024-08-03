let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const lapList = document.getElementById('lapList');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');

function updateDisplay() {
    displayMinutes.textContent = minutes.toString().padStart(2, '0');
    displaySeconds.textContent = seconds.toString().padStart(2, '0');
    displayMilliseconds.textContent = milliseconds.toString().padStart(2, '0');
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            milliseconds += 1;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds += 1;
                if (seconds >= 60) {
                    seconds = 0;
                    minutes += 1;
                }
            }
            updateDisplay();
        }, 10);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapList.innerHTML = ''; // Clear laps
    isRunning = false;
}

function addLap() {
    if (isRunning) {
        const lapTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapItem.classList.add('lap-item');
        lapList.appendChild(lapItem);
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', addLap);
