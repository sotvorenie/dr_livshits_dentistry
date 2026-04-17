document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu')
    const btn = document.querySelector('.burger-menu__btn')
    const openIcon = btn.querySelector('.open')
    const closeIcon = btn.querySelector('.close')

    const classes = {
        isOpen: 'is-open',
        isLock: 'is-lock',
        visuallyHidden: 'visually-hidden',
    }

    btn.addEventListener('click', () => {
        burgerMenu.classList.toggle(classes.isOpen);
        document.documentElement.classList.toggle(classes.isLock);

        if (burgerMenu.classList.contains(classes.isOpen)) {
            openIcon.classList.add(classes.visuallyHidden);
            closeIcon.classList.remove(classes.visuallyHidden);
        } else {
            openIcon.classList.remove(classes.visuallyHidden);
            closeIcon.classList.add(classes.visuallyHidden);
        }
    });
})