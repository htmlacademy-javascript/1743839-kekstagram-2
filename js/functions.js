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

// Делу — время: функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах
// и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.
let showMitting = function (a, b, c, d) {
  // проверка корректности времени
    let correctedTime = function () {
    let times = [a,b,c];
    let correctTimes = [];
    for(let i=0; i<times.length; i++) {
      let t = times[i];
      if (t.length === 5) {
        t = t;
      } else if(t.length === 4) {
        if (t[1] === ':') {
          t = '0' + t;
        } else if (t[2] === ':') {
          t = t[0] + t[1] + t[2] +'0' + t[3];
        }
      } else if(a.length === 3) {
        t = '0' + t[0] + t[1] + '0' + t[2];
      }
      correctTimes.push(t);
    };
    return correctTimes;
  };

  let correctTimes = correctedTime();
  a = correctTimes[0];
  b = correctTimes[1];
  c = correctTimes[2];

  // расчет продолжительности встречи
  let calculateMeetingTime = function(d){
    let hour;
    let minute;
    let timeMeeting = '01:00';
    if (d<60) {
      hour = 0;
      minute = d;
      if (d < 10) {
        timeMeeting = '00:0' + minute;
      }
        timeMeeting = '00:' + minute;
      } else if (d>60) {
        hour = Math.floor(d/60);
        minute = d - hour*60;
        if (minute < 10) {
          minute = '0' + minute;
        }
        if (hour>=10) {
          timeMeeting = hour + ':'+ minute;
        }  else {
        timeMeeting = '0'+ hour + ':'+ minute;  }
      }
    return timeMeeting;
  }

  //расчет времени окончания встречи
  let calculateTimeEndingMeeting = function (c) {
    let startHour = Number(c.slice(0,2));
    let startMinute = Number(c.slice(3,5));
    let timeMeeting = calculateMeetingTime(d);
    let hourMeeting = Number(timeMeeting.slice(0,2));
    let minuteMeeting = Number(timeMeeting.slice(3,5));
    let endHour = startHour + hourMeeting;
    let endMinute = startMinute + minuteMeeting;
    if(endMinute === 0) {
      endMinute = '00'
    }
    if (endMinute > 60 || endMinute === 60) {
      endHour = endHour + Math.floor(endMinute/60);
      endMinute = endMinute - 60;
      if(endMinute === 0) {
        endMinute = '00'
      }
    }
    let timeMeetingEnd = endHour + ':' + endMinute;
    return timeMeetingEnd;
  };


  //сравнение времени окончания встречи со временем окончания раб.дня
  let compareTime = function () {
    if (Number(a.slice(0,2)) > Number(c.slice(0,2))) {
      return false;
    } else if (d/60 > 24) {
      return false;
    } else {
      let timeMeetingEnd = calculateTimeEndingMeeting(c);
      if (Number(timeMeetingEnd.slice(0,2)) < Number(b.slice(0,2))) {
        return true;
      } else if (Number(timeMeetingEnd.slice(0,2)) > Number(b.slice(0,2))) {
        return false;
      } else if (Number(timeMeetingEnd.slice(0,2)) === Number(b.slice(0,2))) {
        if(Number(timeMeetingEnd.slice(3,5)) < Number(b.slice(3,5)) ||
          Number(timeMeetingEnd.slice(3,5)) === Number(b.slice(3,5))) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  return compareTime();
};

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

console.log('Делу — время');
console.log('1. Ожидаю "true", получаю - ', showMitting('08:00', '17:30', '14:00', 90));
console.log('2. Ожидаю "true", получаю - ', showMitting('8:0', '10:0', '8:0', 120));
console.log('3. Ожидаю "false", получаю - ', showMitting('08:00', '14:30', '14:00', 90));
console.log('4. Ожидаю "false", получаю - ', showMitting('14:00', '17:30', '08:0', 90));
console.log('5. Ожидаю "false", получаю - ', showMitting('8:00', '17:30', '08:00', 900));
