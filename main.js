document.addEventListener('DOMContentLoaded', function() {
    var animationContainer = document.getElementById('lottie-animation');
    var animData = {
        container: animationContainer, // ID del contenedor donde se reproducirá la animación
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './json/proximamente.json' // La ruta al archivo JSON de tu animación
    };
    var anim = lottie.loadAnimation(animData);
});
