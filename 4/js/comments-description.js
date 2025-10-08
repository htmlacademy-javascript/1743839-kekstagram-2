import { getInitialData } from './data.js';
import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './utils.js';

const [INITIAL_DATA, ,NAMES_USERS, MESSAGES_USERS] = getInitialData();
const generateCommentId = createIdGenerator();

const generateCommentDescription = function () {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(INITIAL_DATA.MIN_VALUE_FOR_AVATAR, INITIAL_DATA.MAX_VALUE_FOR_AVATAR)}.svg`,
    message: (getRandomInteger(0,1) === 0 ? getRandomArrayElement(MESSAGES_USERS) : `${getRandomArrayElement(MESSAGES_USERS) } ${ getRandomArrayElement(MESSAGES_USERS)}`),
    name: getRandomArrayElement(NAMES_USERS)
  };
};

const getCommentDescription = function () {
  return Array.from({length: getRandomInteger(INITIAL_DATA.MIN_COMMENTS, INITIAL_DATA.MAX_COMMENTS)}, generateCommentDescription);
};

export { getCommentDescription };
