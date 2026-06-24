import {Swiper} from "swiper";
import {Navigation} from "swiper/modules";

import 'swiper/css'

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.doctor-reviews__list', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,

        navigation: {
            nextEl: '.doctor-reviews__btn.next',
            prevEl: '.doctor-reviews__btn.prev',
        },

        breakpoints: {
            1023: {
                slidesPerView: 2,
                spaceBetween: 24
            }
        }
    })
})