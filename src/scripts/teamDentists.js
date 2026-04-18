import {Swiper} from "swiper";
import {Navigation} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.team-dentists__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,

        navigation: {
            nextEl: '.team-dentists__btn.next',
            prevEl: '.team-dentists__btn.prev',
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
                spaceBetween: 20
            }
        }
    })
})