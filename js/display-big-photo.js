import { photos } from './display-photos';
import './view-big-photo.js';

const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCommentTotalCount = document.querySelector('.social__comment-total-count');
const socialCaption = document.querySelector('.social__caption');
const socialComments = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const bigPicture = document.querySelector('.big-picture');
const bodyModalOpen = document.querySelector('body');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const displayComments = function (item) {
  socialComments.innerHTML = '';
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  for (let i = 0; i < item.comments.length; i++) {
    const elementCom = socialCommentTemplate.cloneNode(true);
    const socialPicture = elementCom.querySelector('.social__picture');
    const socialText = elementCom.querySelector('.social__text');
    socialPicture.src = item.comments[i].avatar;
    socialPicture.alt = item.comments[i].name;
    socialText.textContent = item.comments[i].message;
    socialComments.appendChild(elementCom);
  }
};

const displayImage = function (item) {
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].id === Number(item)) {
      const currentElement = photos[i];
      bigPictureImg.src = currentElement.url;
      bigPictureImg.alt = currentElement.description;
      likesCount.textContent = currentElement.likes;
      socialCommentTotalCount.textContent = currentElement.comments.length;
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
