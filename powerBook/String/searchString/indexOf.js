/*
  indexOf('찾을 문자열'), 
  lastIndexOf('찾을 문자열') : 찾는 문자열의 시작 위치를 가리키는 정수 숫자를 반환함.
                              찾는 문자열이 없을 경우 -1을 반환.
                              + 2번째 인자를 가질 수 있음. 두번째 인자는 
                              검색을 시작하는 위치를 지정하는 정수 인덱스 값
*/
  const str1 = 'good morning, good afternoon, good evening, and good night';
  console.log(str1.indexOf('even')); //35
  console.log(str1.lastIndexOf('good')); //48 문자열 뒤에서부터 'good'이 처음 나오는 시작위치

  console.log(str1.indexOf('good', 15)); //30

/*

*/