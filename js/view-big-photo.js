import {displayImage, onBigPhotoClickClose, onKeydownEsc} from'./display-big-photo.js';

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bodyModalOpen = document.querySelector('body');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

picturesContainer.addEventListener('click', (evt) => {
  if(evt.target.closest('.picture')) {
    evt.preventDefault();
    const elementId = evt.target.parentNode.dataset.photoId;
    displayImage(elementId);
    bigPicture.classList.remove('hidden');
    bodyModalOpen.classList.add('.modal-open');
    bigPictureCancel.addEventListener('click', onBigPhotoClickClose);
    document.addEventListener('keydown', onKeydownEsc);
  }
});
