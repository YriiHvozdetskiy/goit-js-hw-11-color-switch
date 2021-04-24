const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomRgb = () => {
    const rgbNum = () => Math.floor(Math.random() * 256);
    const r = rgbNum();
    const g = rgbNum();
    const b = rgbNum();
    return `rgb(${r},${g},${b})`;
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onStart);
let bodyColorChangeId = null;
refs.stopBtn.disabled = true;

function onStart() {
    refs.startBtn.removeEventListener('click', onStart);
    refs.stopBtn.addEventListener('click', onStop);

    bodyColorChangeId = setInterval(() => {
        document.body.style.backgroundColor = randomRgb();
    }, 1000);

    isDisabled(false, true);

    // setInterval(() => {
    //     document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 6)];
    // }, 1000);
}

function onStop() {
    refs.startBtn.addEventListener('click', onStart);
    refs.stopBtn.removeEventListener('click', onStart);

    clearInterval(bodyColorChangeId);

    isDisabled(true, false);
}

function isDisabled(yes, no) {
    refs.stopBtn.disabled = yes;
    refs.startBtn.disabled = no;
}
