// DOM do Tempo
const secondsContainer = document.querySelector('#seconds'); // Obter e armazenar os id's
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
// DOM do próximo ano
const nextYearContainer = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const countdownContainer = document.querySelector('#countdown');

const nextYear = new Date().getFullYear() + 1; // ano dinâmico atualizando para mais 1 ano
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`); // "template string" recebendo o ano novo

nextYearContainer.textContent = nextYear;

const insertCountdownValues = ({ days, hours, minutes, seconds}) => {
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds;
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours;
    daysContainer.textContent = days < 10 ? '0' + days : days;
}

const updateCountdown = () => {
    const currentTime = new Date(); // nova data
    const difference = newYearTime - currentTime; 
    const days = Math.floor(difference / 1000 / 60 / 60 / 24); // número arredondado sem milésimos
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertCountdownValues({ days, hours, minutes, seconds});
}

const handleCountdownDisplay = () => {
    spinnerLoading.remove();
    countdownContainer.style.display = 'flex';
}

setTimeout(handleCountdownDisplay, 1000);

setInterval(updateCountdown, 1000);