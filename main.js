document.addEventListener('DOMContentLoaded', function() {
    loadLottieAnimation('full-width-lottie-loader', './json/proximamente.json', function() {
        // Una vez que la animación de próximamente complete, ocultar el loader y mostrar intro
        hideLoader();
    });

    loadLottieAnimation('full-width-lottie-intro', './json/Intro.json');
    loadLottieAnimation('full-width-lottie', './json/pt1.json');
    loadLottieAnimation('lottie1', './json/pt2.json');
    loadLottieAnimation('lottie2', './json/pt3.json');
    loadLottieAnimation('lottie3', './json/pt4.json');
    loadLottieAnimation('lottie4', './json/pt5.json');
    loadLottieAnimation('lottie5', './json/pt6.json');
    loadLottieAnimation('lottie6', './json/pt7.json');
    loadLottieAnimation('lottie7', './json/pt8.json');
    loadLottieAnimation('lottie8', './json/pt9.json');
    loadLottieAnimation('lottie9', './json/pt10.json');
});

function loadLottieAnimation(containerId, path, onComplete) {
    var animationContainer = document.getElementById(containerId);
    var animData = {
        container: animationContainer, // ID del contenedor donde se reproducirá la animación
        renderer: 'svg',
        loop: false,  // Ajustado para no repetir y disparar onComplete al finalizar
        autoplay: true,
        path: path // La ruta al archivo JSON de tu animación
    };
    var anim = lottie.loadAnimation(animData);
    if (onComplete) {
        anim.addEventListener('complete', onComplete);
    }
}

function hideLoader() {
    var loader = document.getElementById('full-width-lottie-loader');
    var intro = document.getElementById('full-width-lottie-intro');

    loader.style.opacity = 0;
    setTimeout(function() {
        loader.style.display = 'none';
        intro.style.display = 'block';
        setTimeout(function() {
            intro.style.opacity = 1;
        }, 10);
    }, 500);
}

document.getElementById('full-width-lottie-intro').addEventListener('click', function() {
    var intro = document.getElementById('full-width-lottie-intro');
    var mainContent = document.getElementById('main-content');

    intro.style.opacity = 0;
    setTimeout(function() {
        intro.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(function() {
            mainContent.style.opacity = 1;
        }, 10);
    }, 500);
});
