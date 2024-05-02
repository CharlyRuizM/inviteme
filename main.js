document.addEventListener('DOMContentLoaded', function() {
    loadLottieAnimation('full-width-lottie-loader', './json/proximamente.json');
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

function loadLottieAnimation(containerId, path) {
    var animationContainer = document.getElementById(containerId);
    var animData = {
        container: animationContainer, // ID del contenedor donde se reproducirá la animación
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path // La ruta al archivo JSON de tu animación
    };
    var anim = lottie.loadAnimation(animData);
}

document.addEventListener('DOMContentLoaded', function() {
    var loader = document.getElementById('full-width-lottie-loader');
    var intro = document.getElementById('full-width-lottie-intro');
    var mainContent = document.getElementById('main-content');

    // Función para ocultar el loader y mostrar el intro
    function hideLoader() {
        loader.style.opacity = 0;
        setTimeout(function() {
            loader.style.display = 'none';
            intro.style.display = 'block';
            setTimeout(function() {
                intro.style.opacity = 1;
            }, 10);
        }, 500); // Coincide con la duración de la transición de opacidad
    }

    // Simular carga y ocultar loader después de un tiempo fijo o puedes ajustarlo para cuando realmente termine de cargar todo
    window.onload = function() {
        hideLoader();
    };

    intro.addEventListener('click', function() {
        // Ocultar el intro y mostrar el contenido principal
        intro.style.opacity = 0;
        setTimeout(function() {
            intro.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(function() {
                mainContent.style.opacity = 1;
            }, 10);
        }, 500);
    });
});
