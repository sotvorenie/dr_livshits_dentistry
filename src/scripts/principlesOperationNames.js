function equalizeTitlesHeight() {
    const titles = document.querySelectorAll('.principles-operation__name');

    titles?.forEach(title => {
        title.style.height = 'auto';
    });

    let maxHeight = 0

    titles.forEach(title => {
        maxHeight = Math.max(maxHeight, title.offsetHeight)
    });

    titles.forEach(title => {
        title.style.height = `${maxHeight}px`;
    });
}

window.addEventListener('load', equalizeTitlesHeight);
window.addEventListener('resize', equalizeTitlesHeight);

document.addEventListener('DOMContentLoaded', () => {
    const row5Titles = document.querySelectorAll('.principles-operation__list.row-5 .principles-operation__text');
});