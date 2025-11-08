const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Defina a data final da contagem regressiva
// Formato: 'Mês Dia Ano HH:MM:SS'
const endDate = new Date('Apr 13 2027 00:00:00');

function countdown() {
    const now = new Date();
    const diffInSeconds = (endDate - now) / 1000;

    if (diffInSeconds < 0) {
        // A contagem regressiva terminou
        clearInterval(interval);
        document.querySelector('h1').innerText = "É o Grande Dia!";
        document.getElementById('countdown').style.display = 'none';
        return;
    }

    // Calcula dias, horas, minutos e segundos
    const days = Math.floor(diffInSeconds / 3600 / 24);
    const hours = Math.floor(diffInSeconds / 3600) % 24;
    const minutes = Math.floor(diffInSeconds / 60) % 60;
    const seconds = Math.floor(diffInSeconds) % 60;

    // Atualiza o HTML com os novos valores
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

// Adiciona um zero à esquerda se o número for menor que 10
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Chama a função countdown imediatamente para não esperar 1 segundo para iniciar
countdown();

// Atualiza a contagem a cada segundo
const interval = setInterval(countdown, 1000);
