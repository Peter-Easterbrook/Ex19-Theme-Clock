const HOURHAND = document.querySelector('#hours-hand');
const MINUTEHAND = document.querySelector('#minutes-hand');
const SECONDHAND = document.querySelector('#seconds-hand');

const now = new Date();
console.log(now);
let hr = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
console.log('Hour: ' + hr + ' Minute: ' + min + ' Second: ' + sec);

let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
let secPosition = (sec * 360) / 60;

function runTheClock() {
  hrPosition = hrPosition + 3 / 360;
  minPosition = minPosition + 6 / 60;
  secPosition = secPosition + 6;

  HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
  MINUTEHAND.style.transform = 'rotate(' + minPosition + 'deg)';
  SECONDHAND.style.transform = 'rotate(' + secPosition + 'deg)';
}

setInterval(runTheClock, 1000);

const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const time = new Date();
const month = time.getMonth();
const day = time.getDay();
const date = time.getDate();
const hours = time.getHours();
const hoursForClock = hours >= 13 ? hours % 12 : hours;
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const ampm = hours >= 12 ? 'PM' : 'AM';
const year = time.getFullYear();

timeEl.innerHTML = `${hoursForClock}:${
  minutes < 10 ? `0${minutes}` : minutes
} ${ampm}`;
dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>${year}`;

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
});
