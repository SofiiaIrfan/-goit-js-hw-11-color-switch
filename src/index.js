
import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  bodyRef: document.querySelector('body'),
  startBtnRef: document.querySelector('button[data-action="start"]'),
  stopBtnRef: document.querySelector('button[data-action="stop"]'),
};

let timerId = null;

refs.startBtnRef.addEventListener('click', changeBackgroundColor);
refs.stopBtnRef.addEventListener('click', stopChangingBackgroundColor);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

function randomIntegerFromInterval() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBackgroundColor() {
  timerId = setInterval(() => {
    refs.startBtnRef.setAttribute('disabled', 'disabled');
    refs.bodyRef.style.backgroundColor = randomIntegerFromInterval();
    //   colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
}

function stopChangingBackgroundColor() {
  refs.startBtnRef.removeAttribute('disabled');
  clearInterval(timerId);
}