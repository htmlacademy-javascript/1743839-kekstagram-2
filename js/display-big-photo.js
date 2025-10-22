import { photos } from './display-photos';
import './view-big-photo.js';
import {displayComments} from './shown-comments.js';

const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const bigPicture = document.querySelector('.big-picture');
const bodyModalOpen = document.querySelector('body');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const displayImage = function (item) {
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].id === Number(item)) {
      const currentElement = photos[i];
      bigPictureImg.src = currentElement.url;
      bigPictureImg.alt = currentElement.description;
      likesCount.textContent = currentElement.likes;
      socialCaption.textContent = currentElement.description;
      displayComments(currentElement);
    }
  }
};

const onBigPhotoClickClose = () => {
  closeBigPhoto();
};

const onKeydownEsc = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function closeBigPhoto () {
  bigPicture.classList.add('hidden');
  bodyModalOpen.classList.remove('.modal-open');
  bigPictureCancel.removeEventListener('click', onBigPhotoClickClose);
  document.removeEventListener('keydown', onKeydownEsc);
}

export {displayImage, onBigPhotoClickClose, onKeydownEsc};
