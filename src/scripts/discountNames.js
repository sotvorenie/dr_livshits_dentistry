function equalizeTitlesHeight() {
    const titles = Array.from(document.querySelectorAll('.discounts__name'));

    // 1. Сбрасываем высоту
    titles.forEach(title => title.style.height = 'auto');

    // 2. Группируем элементы по их позиции top (это значит, что они в одной строке)
    const rows = {};

    titles.forEach(title => {
        const top = title.getBoundingClientRect().top;
        if (!rows[top]) rows[top] = [];
        rows[top].push(title);
    });

    // 3. Для каждой строки находим свой максимум и применяем его
    Object.values(rows).forEach(rowTitles => {
        let maxHeight = 0;

        rowTitles.forEach(title => {
            maxHeight = Math.max(maxHeight, title.offsetHeight);
        });

        rowTitles.forEach(title => {
            title.style.height = `${maxHeight}px`;
        });
    });
}

window.addEventListener('load', equalizeTitlesHeight);
window.addEventListener('resize', equalizeTitlesHeight);