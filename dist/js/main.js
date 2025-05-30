"use strict";
const videoTrigger = document.querySelector('.gallery__video');
const modal = document.querySelector('.modal');
const videoContainer = document.getElementById('video-container');
const closeButton = modal.querySelector('.modal__close');
const overlay = modal.querySelector('.modal__overlay');
const YOUTUBE_URL = 'https://www.youtube.com/embed/x6iyz1AQhuU?autoplay=1&rel=0';
function openModal() {
    modal.removeAttribute('hidden');
    closeButton.focus();
    videoContainer.innerHTML = `
    <iframe src="${YOUTUBE_URL}"
            title="Introduction to SmartRecruiters"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>`;
}
function closeModal() {
    modal.setAttribute('hidden', 'true');
    videoContainer.innerHTML = '';
    videoTrigger.focus();
}
videoTrigger.addEventListener('click', (event) => {
    event.preventDefault();
    openModal();
});
closeButton.addEventListener('click', () => {
    closeModal();
});
overlay.addEventListener('click', () => {
    closeModal();
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hasAttribute('hidden')) {
        closeModal();
    }
});
modal.addEventListener('click', (event) => {
    const target = event.target;
    const isOutsideContent = !target.closest('.modal__content');
    if (isOutsideContent) {
        closeModal();
    }
});
