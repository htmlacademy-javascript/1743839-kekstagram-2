// Функция для проверки длины строки
const checkLengthString = function (string, length) {
  if(string.length <= length) {
    return true;
  }
  return false;
};

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

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
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
    for (j === 0 ? k = 0 : k = (arrayIndexs[j - 1]); k < arrayIndexs[j]; k++) {
      elementString = elementString + string[k];
    }
    arrayValue.push(elementString);
  }

  let message = '';
  for (let j = 0; j < arrayValue.length; j++) {
    const temp = (arrayValue[j].replaceAll(' ', ''));
    for (let i = 0; i < temp.length; i++) {
      if (!Number.isNaN(parseInt(temp[i], 10))) {
        message += temp[i];
      }
    }
  }

  if(message.length > 0) {
    return (Number(message));
  }
  return NaN;
};

/*
//Тесты
console.log('Функция для проверки длины строки');
// Строка короче 20 символов
console.log('1. Ожидаю "true", получаю - ', checkLengthString('проверяемая строка', 20));
// Длина строки ровно 18 символов
console.log('2. Ожидаю "true", получаю - ', checkLengthString('проверяемая строка', 18));
// Строка длиннее 10 символов
console.log('3. Ожидаю "false", получаю - ', checkLengthString('проверяемая строка', 10));

console.log('Функция для проверки, является ли строка палиндромом');
// Строка является палиндромом
console.log('1. Ожидаю "true", получаю - ', isPalindrome('топот'));
// Длина строки ровно 18 символов
console.log('2. Ожидаю "true", получаю - ', isPalindrome('ДовОд'));
// Строка длиннее 10 символов
console.log('3. Ожидаю "false", получаю - ', isPalindrome('Кекс'));
// Это палиндром
console.log('4. Ожидаю "true", получаю - ', isPalindrome('Лёша на полке клопа нашёл '));

console.log('Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа');
// Строка '2023 год'
console.log('1. Ожидаю "2023", получаю - ', returnNumber('2023 год'));
// Строка 'ECMAScript 2022'
console.log('2. Ожидаю "2022", получаю - ', returnNumber('ECMAScript 2022'));
// Строка '1 кефир, 0.5 батона'
console.log('3. Ожидаю "105", получаю - ', returnNumber('1 кефир, 0.5 батона'));
// Строка 'а я томат'
console.log('4. Ожидаю "NaN", получаю - ', returnNumber('а я томат'));
// Строка 'агент 007'
console.log('5. Ожидаю "7", получаю - ', returnNumber('агент 007'));
// Число 2023
console.log('6. Ожидаю "2023", получаю - ', returnNumber(2023));
// Число -1
console.log('7. Ожидаю "1", получаю - ', returnNumber(-1));
// Число 1.5
console.log('8. Ожидаю "15", получаю - ', returnNumber(1.5));
*/
