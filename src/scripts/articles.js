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
})