var stopwatchInterval;
var startTime;
var elapsedTime = 0;
var lapCount = 1;
var isRunning = false;

function formatTime(time) {
    var minutes = Math.floor(time / 60000);
    var seconds = Math.floor((time % 60000) / 1000);
    var milliseconds = Math.floor((time % 1000) / 10);

    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    milliseconds = (milliseconds < 10 ? "0" : "") + milliseconds;

    return minutes + ":" + seconds + "." + milliseconds;
}

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(function() {
            var currentTime = Date.now();
            elapsedTime = currentTime - startTime;
            document.getElementById("stopwatch").innerText = formatTime(elapsedTime);
        }, 10);
        isRunning = true;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(stopwatchInterval);
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    document.getElementById("stopwatch").innerText = formatTime(elapsedTime);
    clearLaps();
    isRunning = false;
}

function lapStopwatch() {
    if (isRunning) {
        var lapItem = document.createElement("div");
        lapItem.classList.add("lap-item");
        lapItem.innerText = "Lap " + lapCount + ": " + formatTime(elapsedTime);
        lapCount++;

        var lapContainer = document.getElementById("lap-container");
        lapContainer.appendChild(lapItem);
    }
}

function clearLaps() {
    var lapContainer = document.getElementById("lap-container");
    lapContainer.innerHTML = "";
    lapCount = 1;
}