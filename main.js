class Start {
	constructor(options) {
		this.hourTime = options.hourTime;
		this.minuteTime = options.minuteTime;
		this.secondsTime = options.secondsTime;
		this.dateTime = options.dateTime;
	}

	#checkTime(numberConcatenation) {
		if (numberConcatenation < 10) {
			numberConcatenation = "0" + numberConcatenation;
		}
		return numberConcatenation;
	}

	renderTime() {
		document.getElementById("hours").innerHTML = this.#checkTime(this.hourTime);
		document.getElementById("minutes").innerHTML = this.#checkTime(this.minuteTime);
		document.getElementById("seconds").innerHTML = this.#checkTime(this.secondsTime);
		document.getElementById("days").innerHTML = this.dateTime;
	}
}

let time1;
let clock;

setInterval(() => {
	time1 = new Date();
	clock = new Start({
		hourTime: time1.getHours(),
		minuteTime: time1.getMinutes(),
		secondsTime: time1.getSeconds(),
		dateTime: time1.toDateString()
	});
	clock.renderTime();
}, 1000);
