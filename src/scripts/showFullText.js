document.addEventListener("DOMContentLoaded", () => {
    const allOfferLink = document.querySelectorAll('.not-offer__link')

    allOfferLink?.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const text = e.target.parentElement.querySelector('.not-offer__text')
            if (text) {
                text.classList.toggle('is-active')
                link.textContent = text.classList.contains('is-active') ? 'Скрыть' : 'Подробнее'
            }
        })
    })

    const allProcessLink = document.querySelectorAll('.process__link')
    allProcessLink?.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const block = link.parentElement.querySelector('.process__bottom')
            const text = block?.querySelector('.process__text')
            if (text) {
                text.classList.toggle('is-active')
                link.textContent = text.classList.contains('is-active') ? 'Скрыть' : 'Подробнее'
            }
        })
    })
})