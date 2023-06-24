function updateClock() {
    var currentTime = new Date(); // 현재 시간 가져오기
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // 시, 분, 초가 10보다 작으면 앞에 0 추가
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // 시간 출력
    var clockDiv = document.getElementById("clock");
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
}

// 1초마다 시간 업데이트
setInterval(updateClock, 1000);
