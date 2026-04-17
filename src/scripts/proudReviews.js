import {Swiper} from "swiper";
import {Navigation} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.proud-reviews__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,
        loop: true,

        navigation: {
            nextEl: '.proud-reviews__btn.next',
            prevEl: '.proud-reviews__btn.prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            1023: {
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