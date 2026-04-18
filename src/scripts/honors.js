import {Swiper} from "swiper";
import {Navigation} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.honors__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,

        navigation: {
            nextEl: '.honors__btn.next',
            prevEl: '.honors__btn.prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    })
})