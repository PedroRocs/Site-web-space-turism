const abrirNavBar = document.querySelector('.hamburguer svg')
const navBar = document.querySelector('.list-menu');
const closeNavBar  = document.querySelector('.close-hamburguer');

abrirNavBar.addEventListener('click', () =>{
    navBar.classList.add('active');

    
})

closeNavBar.addEventListener('click', () =>{
    navBar.classList.remove('active');
    
})
