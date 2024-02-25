// Функция для проверки длины строки.

const checkLength = (string = '', maxLine = 1) => (string.length <= maxLine);
checkLength('проверяемая строка', 20);
// console.log(checkLength('проверяемая строка', 20));


// Функция для проверки является ли строка палиндромом.

const checkPalindrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();

  let controlString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    controlString += string[i];
  }

  return string === controlString;
};
checkPalindrome('Лёша на полке клопа нашёл ');
// console.log(checkPalindrome('Лёша на полке клопа нашёл '));

// доп задание
const getNumber = (string) => {
  if (string === Math.round(string)) {
    return Math.abs(string);
  }

  let numberString = '';

  if (typeof string !== 'string') {
    string = String(string);
  }

  for (let char = 0; char < string.length; char++) {
    const charString = parseInt(string[char], 10);

    if (!(Number.isNaN(charString))) {
      numberString += string[char];
    }
  }

  if (numberString === '') {
    numberString = NaN;
  }

  return Number(numberString);
};

getNumber();
