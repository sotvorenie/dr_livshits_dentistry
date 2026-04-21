document.addEventListener('DOMContentLoaded', () => {
    const moreButtons = document.querySelectorAll('.person__review-more');

    moreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Берем предыдущий элемент (наш контейнер .person__review-expandable)
            const content = this.previousElementSibling;
            if (content) {
                content.classList.add('is-expanded');
            }
        });
    });
});