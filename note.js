'use Strict';

var str1 = '문자열';
var str2 = new String('문자열');
var str3 = new String('문자열데이터');
var str4 = str3.valueOf();
	
console.log('-- 변수타입');
console.log(typeof(str1));
console.log(typeof(str2));
console.log(typeof(str3));
console.log(typeof(str4));

console.log('-- 문자열 변수/객체 비교');
console.log(str1 == str2);
console.log(str1 === str2);
console.log(str2 == str3);
console.log(str2 === str3);
console.log(str2 == str3.valueOf());

console.log('== 문자열 객체 생성자와 비교');
console.log(new String('문자열') == str2);
console.log(new String('문자열') === str1);
console.log(new String('문자열') == '문자열');
console.log(new String('문자열') == str1);
console.log(new String('문자열') == new String('문자열'));
console.log(new String('문자열') === new String('문자열'));
console.log('문자열' == new String('문자열'));
console.log('문자열' === new String('문자열'));