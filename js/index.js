console.log('conectado');

const mostrar = () => {
    const $btn = document.querySelector(".btn-burguer");
    const $ulRealizadas = document.querySelector('.ul-realizadas');

    document.addEventListener('click', (e) => {
        if(e.target === $btn){
            $ulRealizadas.classList.toggle('mostrar');
        }
    });
}

document.addEventListener('DOMContentLoaded', (e) => {
    mostrar();
})

