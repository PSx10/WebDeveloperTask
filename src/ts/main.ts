const videoTrigger = document.querySelector('.gallery__video') as HTMLAnchorElement;
const modal = document.querySelector('.modal') as HTMLElement;
const videoContainer = document.getElementById('video-container') as HTMLElement;
const closeButton = modal.querySelector('.modal__close') as HTMLButtonElement;
const overlay = modal.querySelector('.modal__overlay') as HTMLDivElement;
const YOUTUBE_URL: string = 'https://www.youtube.com/embed/x6iyz1AQhuU?autoplay=1&rel=0';

function openModal(): void {
  modal.removeAttribute('hidden');
  closeButton.focus();

  videoContainer.innerHTML = `
    <iframe src="${YOUTUBE_URL}"
            title="Introduction to SmartRecruiters"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>`;
}

function closeModal(): void {
  modal.setAttribute('hidden', 'true');
  videoContainer.innerHTML = ''; 
  videoTrigger.focus(); 
}

videoTrigger.addEventListener('click', (event: MouseEvent): void => {
  event.preventDefault();
  openModal();
});

closeButton.addEventListener('click', (): void => {
  closeModal();
});

overlay.addEventListener('click', (): void => {
  closeModal();
});

document.addEventListener('keydown', (event: KeyboardEvent): void => {
  if (event.key === 'Escape' && !modal.hasAttribute('hidden')) {
    closeModal();
  }
});

modal.addEventListener('click', (event: MouseEvent): void => {
  const target = event.target as HTMLElement;
  const isOutsideContent = !target.closest('.modal__content');

  if (isOutsideContent) {
    closeModal();
  }
});