const GENERATED_COUNT = 25;
const DESCRIPTIONS_PHOTOS = ["Вся красота мира в одной картинке", "Моменты, которые запечатлены навсегда", "Счастье в каждом кадре, Когда слова не нужны, достаточно фотографии",
"История, рассказанная через объектив", "Остановить время в одном кадре", "Фотография — это способ улыбнуться в будущем", "Сегодня — самый лучший день"];
const NAMES_USERS = ["София", "Ева", "Анна", "Варвара", "Мария", "Михаил", "Александр", "Артем", "Матвей", "Тимофей"];
const MESSAGES_USERS = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.", "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.", "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
"Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"];



const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

let getNumber = function (count) {
  let arrayNumber = [];
  for (let i=0; i<count; i++) {
    arrayNumber.push(i + 1);
  }
  return arrayNumber;
}

let getPhotoDescription = function (array) {
  let object = {};
  object.id = array;
  object.url = 'photos/' + array + '.jpg';
  object.description = getRandomArrayElement(DESCRIPTIONS_PHOTOS);
  object.likes = getRandomInteger(15, 200);
  object.comments = getArrayComments(getRandomInteger(0, 30));
  return object;
};

let getCommentDescription = function (array) {
  let object = {};
    object.id = array;
    object.avatar = 'img/avatar-'+ getRandomInteger(1, 6) +'.svg';
    object.message = (getRandomInteger(0,1) === 0 ?
        getRandomArrayElement(MESSAGES_USERS) :
        getRandomArrayElement(MESSAGES_USERS) + ' ' + getRandomArrayElement(MESSAGES_USERS));;
    object.name = getRandomArrayElement(NAMES_USERS);
  return object;
};

let getArrayComments = function (count) {
  let comments = [];
  let arrayIdComments = getNumber(count);
  //console.log(key);
  for (let i=0; i<count; i++) {
    getCommentDescription().id = arrayIdComments[i];
    comments.push(getCommentDescription(arrayIdComments[i]));
  }
  return comments;
}

let generationData = function () {
  let arrayGeneratedObjects = [];
  let numbers = getNumber(GENERATED_COUNT);
  for (let i = 0; i < GENERATED_COUNT; i++) {
    arrayGeneratedObjects.push(getPhotoDescription(numbers[i]));
  };
  return arrayGeneratedObjects;
};

generationData();
console.log(generationData());
