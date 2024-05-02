document.addEventListener('DOMContentLoaded', function() {
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
