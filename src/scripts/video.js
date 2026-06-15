document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.js-video-modal');
    const modalVideo = modal?.querySelector('.js-modal-video');
    const triggers = document.querySelectorAll('.js-video-modal-trigger');
    const closeButtons = document.querySelectorAll('.js-modal-close');

    if (!modal || !modalVideo) return

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            modalVideo.src = trigger.dataset.videoSrc
            modal.classList.add('is-active')

            document.documentElement.classList.add('is-lock')
        })
    })

    const closeModal = () => {
        modal.classList.remove('is-active')
        modalVideo.pause()
        modalVideo.src = ""
        document.documentElement.classList.remove('is-lock')
    }

    closeButtons.forEach(btn => btn.addEventListener('click', closeModal))

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-active')) closeModal()
    })
})