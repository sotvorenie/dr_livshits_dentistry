document.addEventListener('DOMContentLoaded', () => {
    const moreButtons = document.querySelectorAll('.review__expandable + .review__more, .person_review-more');

    const expandables = document.querySelectorAll('.review__expandable');
    expandables.forEach(expandable => {
        const messages = expandable.querySelectorAll('.review__message');
        let moreBtn = expandable.nextElementSibling;
        if (!moreBtn || !moreBtn.classList.contains('review__more')) {
            moreBtn = expandable.parentElement.querySelector('.review__more');
        }

        if (!moreBtn) return;
        setTimeout(() => {
            let hasOverflow = false;
            messages.forEach(msg => {
                if (msg.scrollHeight > msg.clientHeight) {
                    hasOverflow = true;
                }
            });

            if (!hasOverflow) {
                moreBtn.style.display = 'none';
            }
        }, 50);
    });
    moreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            let content = this.previousElementSibling;
            if (!content?.classList.contains('review__expandable')) {
                content = this.parentElement.querySelector('.review__expandable');
            }

            if (content) {
                content.classList.add('is-expanded');
            }
        });
    });
});