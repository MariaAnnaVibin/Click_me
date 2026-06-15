let box = document.getElementsByTagName("button");
let prediction = document.getElementById("prediction");

let timerStarted = false;

box[0].addEventListener("mouseover", function () {
    box[0].style.marginLeft = Math.floor(Math.random() * 30) + "rem";
    box[0].style.marginTop = Math.floor(Math.random() * 20) + "rem";

    if (!timerStarted) {
        timerStarted = true;

        setTimeout(function () {
            prediction.innerHTML = "Focus on the Present. The future is unpredictable.";
            box[0].style.display = "none";
        }, 10000);
    }
});