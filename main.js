// script.js
let progressBar = document.getElementById('progress-bar');
let targetWidth = 90; // Queremos llegar al 50%
let duration = 3000; // Duración deseada de la animación hasta el 50%: 5 segundos
let interval = 190; // Intervalo de actualización en milisegundos
let increment = (targetWidth / duration) * interval; // Calculamos el incremento por intervalo
let width = 0;

function updateProgressBar() {
    width += increment;
    if (width >= targetWidth) {
        width = increment; // Reinicia justo después de alcanzar el 50%, manteniendo el flujo continuo
        progressBar.style.width = '0%'; // Reinicia visualmente la barra
    }
    progressBar.style.width = width + '%';
}

setInterval(updateProgressBar, interval);
