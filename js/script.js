const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');


let countSec = 0;
let countMin = 0;

function updateText() {
    minutes.innerHTML = (0 + String(countMin)).slice(-2);
    seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

function countDown() {
    let total = countSec + countMin * 60;
    const timeinterval = setTimeout(countDown, 1000);
    if (total <= 0) {
        clearInterval(timeinterval);
        timer.style.display = 'none';
        message.innerHTML = '<p>I am done...</p>'
    }
    if (countSec > 0) countSec--;
    else {
        countSec = 59;
        countMin--;
    }
    updateText();

}
plus.onclick = function() {
    if (countSec < 59) ++countSec;
    else {
        countSec = 0;
        ++countMin;
    }

    updateText()
}
minus.onclick = function() {
    if (countMin <= 0 && countSec === 0) {
        countSec = 0;
        countMin = 0;
        return;
    }
    if (countSec > 0) --countSec;
    else {
        countSec = 59;
        --countMin;
    }
    updateText();
}

start.onclick = function() {
    countDown();
}