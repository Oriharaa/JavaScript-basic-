/*
  substring() : 인덱스 값을 음수로 입력 시 0으로 대체되는 특징을 제외하면
                slice()랑 사용법은 동일.
                +시작 인덱스가 끝 인덱스보다 큰 경우 파라메터 순서를 바꿈.
*/
    const str1 = 'This is the only one story';
    console.log(str1.substring(8, 11));
    console.log(str1.substring(11,8));
    console.log(str1.substring(11, -8));
    console.log(str1.substring(10, 4));
    console.log(str1.substring(30));
    console.log(str1.substring(0, -10));
    console.log(str1.substring(8, 100));
    console.log(str1.substring());