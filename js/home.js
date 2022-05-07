const abrirNavBar = document.querySelector('.hamburguer svg')
const navBar = document.querySelector('.list-menu');
const closeNavBar = document.querySelector('.close-hamburguer');

abrirNavBar.addEventListener('click', () => {
    navBar.classList.add('active');
})

closeNavBar.addEventListener('click', () => {
    navBar.classList.remove('active');
})

function link(parametro) {

    let items = document.querySelectorAll(".items-da-list");
    if (parametro == "/destination.html") {
        items[1].classList.add("ativado");
        if (items[1].classList.length == 2) {
            items[0].classList.add("disabled");
            items[2].classList.add("disabled");
            items[3].classList.add("disabled");
        }

    } else if (parametro == "/index.html") {
        console.log("teste")
        items[0].classList.add("ativado");
        if (items[0].classList.length == 2) {
            items[1].classList.add("disabled");
            items[2].classList.add("disabled");
            items[3].classList.add("disabled");
        }

    } else if (parametro == "/crew-commander.html") {
        items[2].classList.add("ativado");
        if (items[2].classList.length == 2) {
            items[1].classList.add("disabled");
            items[0].classList.add("disabled");
            items[3].classList.add("disabled");
        }

    } else if (parametro == "/technology-capsule.html") {
        items[3].classList.add("ativado");
        if (items[3].classList.length == 2) {
            items[2].classList.add("disabled");
            items[0].classList.add("disabled");
            items[1].classList.add("disabled");
        }
    }
}

link(window.location.pathname);