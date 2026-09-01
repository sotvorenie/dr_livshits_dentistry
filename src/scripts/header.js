document.addEventListener('DOMContentLoaded', () => {
    const headerMenu = document.querySelector('.header-menu')

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
})