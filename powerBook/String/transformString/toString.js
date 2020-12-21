/*
  toString() : 숫자를 문자열로 변환하는 내장 메서드
*/

  const num1 = 123;
  const num2 = 123.45;
  const bool = true;
  const str = '문자열타입';
  const arr = [1,2,'a','b',3];
  const obj = {key: 'data', value: 15};
  
  console.log(num1);
  console.log(num2);
  console.log(bool);
  console.log(str);
  console.log(arr);

  //문자열이 아닌 객체를 반환 [object Object];
  console.log(obj); 
    
  //문자열 'data' 반환. 객체의 값을 반환하려면 객체의 키로 접근해야함.
  console.log(obj.key.toString());
  console.log(obj.value.toString());