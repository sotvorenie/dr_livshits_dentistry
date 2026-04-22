import {Swiper} from "swiper";
import {Navigation} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.certificates__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,

        navigation: {
            nextEl: '.certificates__btn.next',
            prevEl: '.certificates__btn.prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 24
            }
        }
    })
})