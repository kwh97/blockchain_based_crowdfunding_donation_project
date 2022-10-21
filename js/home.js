const target = document.querySelector("#dynamic");
let stringArr = ['블록체인을 통해 투명한 기부를 시작하세요.',''];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split('');

function randomString() {
	const target = document.querySelector("#dynamic");
	let stringArr = ['블록체인을 통해 투명한 기부 활동을 시작하세요.','블록체인과 크라우드 펀딩의 만남, 새로운 기부 문화.'];
	let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
	let selectStringArr = selectString.split('');

	return selectStringArr;
}

function resetTyping() {
	target.textContent="";
	dynamic(randomString()); 
}

function dynamic(randomArr) {
	if(randomArr.length > 0) {
			target.textContent += randomArr.shift(); 
			setTimeout(function() {
					dynamic(randomArr);
			}, 80);
	} else {
			setTimeout(resetTyping, 3000);
	}
}

dynamic(randomString());

function blink() {
	target.classList.toggle("active");
}

setInterval(blink, 500);