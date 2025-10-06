import {INITIAL_DATA} from './data.js';
import {getNumber} from './util.js';
import {getPhotoDescription} from './photo-description.js';

const generationData = function () {
  const arrayGeneratedObjects = [];
  const numbers = getNumber(INITIAL_DATA.generatedCount);
  for (let i = 0; i < INITIAL_DATA.generatedCount; i++) {
    arrayGeneratedObjects.push(getPhotoDescription(numbers[i]));
  }
  return arrayGeneratedObjects;
};

//generationData();

export {generationData};
