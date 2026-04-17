document.addEventListener('DOMContentLoaded', () => {
    const toUpBtn = document.querySelector('.footer__up')

    if (!toUpBtn) return

    toUpBtn.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })
})