import Inputmask from 'inputmask';

const Masker = Inputmask.default || Inputmask

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input-tel')
    inputs.forEach(input => {
        new Masker({
            mask: "+7 (999) 999-99-99",
            showMaskOnHover: false
        }).mask(input)
    })
})