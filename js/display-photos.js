import { getPhotos } from './photos.js';

const photos = getPhotos();

const displayPhotos = function () {
  const picturesContainer = document.querySelector('.pictures');
  const templatePicture = document.querySelector('#picture').content;
  const elementPicture = templatePicture.querySelector('.picture');
  const photosFragment = document.createDocumentFragment();

  const displayPhoto = function (element) {
    const picture = elementPicture.cloneNode(true);

    picture.dataset.photoId = element.id;
    picture.querySelector('.picture__img').src = element.url;
    picture.querySelector('.picture__img').alt = element.description;
    picture.querySelector('.picture__likes').textContent = element.likes;
    picture.querySelector('.picture__comments').textContent = element.comments.length;
    photosFragment.append(picture);
  };

  photos.forEach((photo) => {
    displayPhoto(photo);
  });

  picturesContainer.appendChild(photosFragment);
};

displayPhotos();

export {photos};
