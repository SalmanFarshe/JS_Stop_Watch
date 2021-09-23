var startButton = document.querySelector(".Start-button");
var pauseButton = document.querySelector(".pause-button");
var resetButton = document.querySelector(".reset-button");
var timeMinute = document.querySelector(".time-minute");
var timeSecond = document.querySelector(".time-second");
var timeMilisecond = document.querySelector(".time-milisecond");
var minuteCount = 00;
var secondCount = 00;
var milisecondCount = 00;
var interval;
function startButtonEvent() {
	startButton.classList.add("start");
	pauseButton.classList.remove("pause");
	milisecondCount++;
	timeMilisecond.innerHTML = milisecondCount;
	if (timeMilisecond.innerHTML <= 9) {
		timeMilisecond.innerHTML = "0" + milisecondCount;
	}
	if (timeMilisecond.innerHTML > 99) {
		secondCount++;
		timeSecond.innerHTML = secondCount;
		milisecondCount = 00;
	}
	if (timeSecond.innerHTML <= 9) {
		timeSecond.innerHTML = "0" + secondCount + " :&nbsp;";
	}
	if (timeSecond.innerHTML > 9) {
		timeSecond.innerHTML = secondCount + " :&nbsp;";
	}
	if (secondCount == 60) {
		minuteCount++;
		timeMinute.innerHTML = minuteCount;
		secondCount = 00;
	}
	if (timeMinute.innerHTML <= 9) {
		timeMinute.innerHTML = "0" + minuteCount + " :&nbsp;";
	}
	if (timeMinute.innerHTML > 9) {
		timeMinute.innerHTML = minuteCount + " :&nbsp;";
	}
}
function startButtonInterval() {
	interval = setInterval(startButtonEvent, 10);
}
function pauseButtonClearInterval() {
	pauseButton.classList.add("pause");
	startButton.classList.remove("start");
	clearInterval(interval);
}
function resetButtonEvent() {
    pauseButton.classList.remove("pause")
    startButton.classList.remove("start")
	minuteCount = 00;
	secondCount = 00;
	milisecondCount = 00;
	timeMinute.innerHTML = '0' + milisecondCount + " :&nbsp;";
	timeSecond.innerHTML = '0' + milisecondCount + " :&nbsp;";
	timeMilisecond.innerHTML = '0' + milisecondCount;
    clearInterval(interval);
}
startButton.addEventListener("click", startButtonInterval);
pauseButton.addEventListener("click", pauseButtonClearInterval);
resetButton.addEventListener("click", resetButtonEvent);