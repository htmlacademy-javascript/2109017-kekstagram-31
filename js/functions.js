// Функция для проверки длины строки.

const checkLength = (string = '', maxLine = 1) => (string.length <= maxLine);
checkLength('проверяемая строка', 20);

// console.log(checkLength('проверяемая строка', 20));


// Функция для проверки является ли строка палиндромом.

const checkPalindrome = (string) => {
  const compareString = string.replaceAll(' ', '').toLowerCase();
  const reverseString = compareString.split('').reverse().join('');
  return compareString === reverseString;
};
checkPalindrome('Лёша на полке клопа нашёл ');

// способ №2
// const checkPalindrome = (string = '') => {
//   string = string.replaceAll(' ', '').toLowerCase();
//   let controlString = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     controlString += string[i];
//   }
//   return string === controlString;
// };
// checkPalindrome('Лёша на полке клопа нашёл ');
// // console.log(checkPalindrome('Лёша на полке клопа нашёл '));

