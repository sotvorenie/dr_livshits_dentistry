document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu')
    const header = document.querySelector('.header')

    if (!burgerMenu || !header) return

    const setTopToBurgerMenu = () => {
        const height = header.offsetHeight
        burgerMenu.style.setProperty('--top', `${height / 16}rem`)
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
})