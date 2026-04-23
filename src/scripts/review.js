document.addEventListener('DOMContentLoaded', () => {
    const moreButtons = document.querySelectorAll('.review__more')

    moreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.previousElementSibling
            if (content) {
                content.classList.add('is-expanded')
            }
        })
    })
})