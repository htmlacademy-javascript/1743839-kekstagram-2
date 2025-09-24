// Функция для проверки длины строки
const checkLengthString = function (string, length) {
  if(string.length <= length) {
    return true;
  }
  return false;
};
//checkLengthString('проверяемая строка', 10);


// Функция для проверки, является ли строка палиндромом
const isPalindrome = function (string) {
  string = string.replaceAll(' ','');
  string = string.toLowerCase();
  let stringNew = '';
  for (let i = string.length - 1; i >= 0; i--) {
    stringNew += string[i];
  }
  if(string === stringNew) {
    return true;
  }
  return false;
};
//isPalindrome('Лёша на полке клопа нашёл ');


const returnNumber = function (string) {
  string = string.toString();

  const arrayIndexs = [];
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      count = count + 1;
      arrayIndexs.push(i);
    }
  }
  arrayIndexs.push(string.length);

  const arrayValue = [];
  for (let j = 0; j < count; j++) {
    let elementString = '';
    let k;
    for (j === 0 ?  k = 0 : k = (arrayIndexs[j - 1]); k < arrayIndexs[j]; k++) {
      elementString = elementString + string[k];
    }
    arrayValue.push(elementString);
  }


  let message = '';
  for (let j = 0; j < arrayValue.length; j++) {
    const temp = (arrayValue[j].replaceAll(' ', ''));
    for (let i = 0; i < temp.length; i++) {
      if (!Number.isNaN(parseInt(temp[i]))) {
        message += temp[i];
      }
    }
  }


  if(message.length > 0) {
    return (Number(message));
  }
  return NaN;

};

//returnNumber(1000);
//returnNumber('2023 год');
//returnNumber('ECMAScript 2022');
//returnNumber('1 кефир, 0.5 батона');
//returnNumber('агент 007');
//returnNumber('а я томат');
/*
имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN
*/
