const menu = document.getElementById('menu')
const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        menu.classList.remove('transition-all')
        nav.classList.remove('transition-all duration-300')

    } else {
        menu.classList.add('hidden')
        menu.classList.add('transition-all')
        nav.classList.add('transition-all duration-300')
    }
})