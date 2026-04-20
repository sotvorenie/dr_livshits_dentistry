document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu')
    const openBtn = document.querySelector('.burger-menu__open')
    const closeBtn = document.querySelector('.burger-menu__close')

    const classes = {
        isOpen: 'is-open',
        isLock: 'is-lock',
    }

    openBtn.addEventListener('click', () => {
        burgerMenu.classList.add(classes.isOpen)
        document.documentElement.classList.add(classes.isLock)
    })
    closeBtn.addEventListener('click', () => {
        burgerMenu.classList.remove(classes.isOpen)
        document.documentElement.classList.remove(classes.isLock)
    })
})