document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu')
    const header = document.querySelector('.header')

    const headerMenu = document.querySelector('.header-menu')
    const headerMenuBtnOpen = document.querySelector('.header__link--has-submenu')

    if (!header) return

    const classes = {
        isActive: 'is-active',
        isOpen: 'is-open',
        isLock: 'is-lock',
    }

    const setTopToBurgerMenu = () => {
        const rect = headerMenu.getBoundingClientRect()
        headerMenu.style.setProperty('--top', `${rect.top / 16}rem`)
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

    window.addEventListener('click', (e) => {
        const headerMenuContent = headerMenu.querySelector('.header-menu__content')
        const isClickInsideMenu = headerMenuContent.contains(e.target)
        const isClickOnButton = headerMenuBtnOpen.contains(e.target)

        if (!isClickInsideMenu && !isClickOnButton && headerMenu.classList.contains(classes.isActive)) {
            headerMenuBtnOpen.click()
        }
    })

    headerMenuBtnOpen.addEventListener('click', () => {
        headerMenu.classList.toggle(classes.isActive)

        if (headerMenu.classList.contains(classes.isActive)) {
            headerMenuBtnOpen.parentElement.classList.add(classes.isOpen)
            document.documentElement.classList.add(classes.isLock)
        } else {
            headerMenuBtnOpen.parentElement.classList.remove(classes.isOpen)
            document.documentElement.classList.remove(classes.isLock)
        }
    })
})