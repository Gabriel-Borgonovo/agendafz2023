console.log('conectado');

const mostrar = () => {
    const $btn = document.querySelector(".btn-burguer");
    const $ulRealizadas = document.querySelector('.ul-realizadas');

    $btn.addEventListener('click', () => {
        $ulRealizadas.classList.toggle('mostrar');
    });
}

window.addEventListener('load', (event) => {
    mostrar();
});

