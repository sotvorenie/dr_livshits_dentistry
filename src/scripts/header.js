window.addEventListener('load', () => {
    const headerMenu = document.querySelector('.header-menu')
    if (!headerMenu) return

    const rect = headerMenu.getBoundingClientRect()
    headerMenu.style.setProperty('--top', `${rect.top / 16}rem`)
})