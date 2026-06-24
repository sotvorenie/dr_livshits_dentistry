function equalizeTitlesHeight() {
    const titles = document.querySelectorAll('.discounts__name');

    titles.forEach(title => {
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