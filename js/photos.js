import { getInitialData } from './data.js';
import { getCommentDescription } from './comments-description.js';
import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './utils.js';

const [INITIAL_DATA, DESCRIPTIONS_PHOTOS] = getInitialData();
const generatePhotoId = createIdGenerator();
const generatePhotoNumber = createIdGenerator();

const generatePhotoDescription = function () {
  return {
    id: generatePhotoId(),
    url: `photos/${generatePhotoNumber()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS_PHOTOS),
    likes: getRandomInteger(INITIAL_DATA.MIN_LIKES, INITIAL_DATA.MAX_LIKES),
    comments: getCommentDescription()
  };
};

const getPhotos = function () {
  return Array.from({length: INITIAL_DATA.COUNT_GENERATED_OBJECTS}, generatePhotoDescription);
};

export { getPhotos };
