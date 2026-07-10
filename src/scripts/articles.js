import {Swiper} from "swiper";
import {Navigation} from "swiper/modules";

import 'swiper/css'

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.articles__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,

        navigation: {
            nextEl: '.articles__btn.next',
            prevEl: '.articles__btn.prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    })
    const secondSwiper = new Swiper('.articles .other-services__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,

        navigation: {
            nextEl: '.articles .other-services__btn.next',
            prevEl: '.articles .other-services__btn.prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    })
})

function equalizeArticleTitles() {
    const titles = document.querySelectorAll('.articles__name');

    titles.forEach(title => {
        title.style.height = 'auto';
    });

    if (window.innerWidth < 768) return;

    let maxHeight = 0;
    titles.forEach(title => {
        maxHeight = Math.max(maxHeight, title.offsetHeight);
    });

    titles.forEach(title => {
        title.style.height = `${maxHeight}px`;
    });
}
window.addEventListener('load', equalizeArticleTitles);
window.addEventListener('resize', equalizeArticleTitles);