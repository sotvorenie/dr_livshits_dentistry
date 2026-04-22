import {Swiper} from "swiper";
import {Navigation} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.doctor-work__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,

        navigation: {
            nextEl: '.doctor-work__btn.next',
            prevEl: '.doctor-work__btn.prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    })
})