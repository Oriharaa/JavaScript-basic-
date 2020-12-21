/*
  search() : 
*/

const str1 = 'good morning, good afternoon, GOOD evening, and good night';

console.log(str1.search('GOOD'));

// 정규표현식을 이용해  대소문자 구분없이 찾음 
// => /찾느문자열/i
console.log(str1.search(/GOOD/i));