document.addEventListener('DOMContentLoaded', function() {
    // Pre-carga de todas las animaciones Lottie
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

    var loader = document.getElementById('full-width-lottie-loader');
    var intro = document.getElementById('full-width-lottie-intro');
    var mainContent = document.getElementById('main-content');

    if (!loader || !intro || !mainContent) {
        console.error('Some DOM elements are missing.');
        return; // No continue si algunos elementos no están presentes
    }

    // Ocultar loader y mostrar intro cuando todo esté cargado
    window.onload = function() {
        hideLoader();
    };

    // Evento de clic para cambiar de intro a contenido principal
    intro.addEventListener('click', function() {
        hideIntroShowContent();
    });

    function hideLoader() {
        loader.style.opacity = 0;
        setTimeout(function() {
            loader.style.display = 'none';
            intro.style.display = 'block';
            setTimeout(function() {
                intro.style.opacity = 1;
            }, 10);
        }, 500);
    }

    function hideIntroShowContent() {
        intro.style.opacity = 0;
        setTimeout(function() {
            intro.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(function() {
                mainContent.style.opacity = 1;
            }, 10);
        }, 500);
    }
});

function loadLottieAnimation(containerId, path) {
    var animationContainer = document.getElementById(containerId);
    if (!animationContainer) {
        console.error('Animation container not found:', containerId);
        return;
    }
    var animData = {
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path
    };
    lottie.loadAnimation(animData);
}
