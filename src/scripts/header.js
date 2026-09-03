document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header')
    const headerMenu = document.querySelector('.header-menu')
    const headerDropdownMenus = document.querySelectorAll('.header-dropdown')

    const setTopToBurgerMenu = () => {
        const rect = headerMenu.getBoundingClientRect()
        const rectHeader = header.getBoundingClientRect()

        headerMenu.style.setProperty('--top', `${rect.top / 16}rem`)
        headerDropdownMenus.forEach(menu => {
            menu.style.setProperty('--top', `${rectHeader.bottom / 16}rem`)
        })
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