import { getPhotos } from './photos.js';

const photos = getPhotos();
const picturesContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content;
const elementPicture = templatePicture.querySelector('.picture');

const displayPhoto = function (element) {
  const picture = elementPicture.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');
  pictureImg.src = element.url;
  pictureImg.alt = element.description;
  pictureLikes.textContent = element.likes;
  pictureComments.textContent = element.comments.length;
  picturesContainer.append(picture);
};

photos.forEach((photo) => {
  displayPhoto(photo);
});
