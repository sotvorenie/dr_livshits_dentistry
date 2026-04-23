document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu')
    const header = document.querySelector('.header')

    const headerMenu = document.querySelector('.header-menu')
    const headerMenuBtnOpen = document.querySelector('.header__link--has-submenu')
    const headerMenuBtnClose = document.querySelector('.header-menu__close')

    if (!header) return

    const classes = {
        isActive: 'is-active',
        isOpen: 'is-open',
        isLock: 'is-lock',
    }

    const setTopToBurgerMenu = () => {
        const height = header.offsetHeight
        burgerMenu.style.setProperty('--top', `${height / 16}rem`)
        headerMenu.style.setProperty('--top', `${height / 16}rem`)
    }
    setTopToBurgerMenu()

    const debounce = (func, delay) => {
        let timeoutId
        return (...args) => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => func.apply(this, args), delay)
        }
    }

    const debouncedSetTop = debounce(setTopToBurgerMenu, 250)
    window.addEventListener('resize', debouncedSetTop)

    headerMenuBtnOpen.addEventListener('click', () => {
        headerMenu.classList.toggle(classes.isActive)

        if (headerMenu.classList.contains(classes.isActive)) {
            headerMenuBtnOpen.parentElement.classList.add(classes.isOpen)
        } else {
            headerMenuBtnOpen.parentElement.classList.remove(classes.isOpen)
        }
    })
    headerMenuBtnClose.addEventListener('click', () => {
        headerMenu.classList.remove(classes.isActive)

        headerMenuBtnOpen.parentElement.classList.remove(classes.isActive)
    })
})