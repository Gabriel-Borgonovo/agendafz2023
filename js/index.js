console.log('conectado');

const $btn = document.querySelector(".btn-burguer");
const $ulRealizadas = document.querySelector('.ul-realizadas');
console.log($ulRealizadas)

document.addEventListener('click', (e) => {
    if(e.target === $btn){
        $ulRealizadas.classList.toggle('mostrar');
    }
})