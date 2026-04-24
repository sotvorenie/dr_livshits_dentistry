import {Swiper} from "swiper";
import {Navigation} from "swiper/modules";

import 'swiper/css'

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.works__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,

        navigation: {
            nextEl: '.works__btn.next',
            prevEl: '.works__btn.prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    })
})