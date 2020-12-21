/*
  slice() : 문자열의 시작 인덱스와 끝 인덱스 사이의 범위에 있는 문자열을 반환
            인덱스는 0부터 시작, 끝 인덱스 위치 문자는 제외
            => (시작 인덱스)부터  (끝 인덱스전)까지의 문자열 반환.
*/
    const str1 = 'This is the only one story';
    console.log(str1.slice(8,11)); 

    // 시작 인덱스가 음수인 경우 빈 문자열 반환.
   	console.log(str1.slice(-8, 11)); 
    
    // 시작 인덱스가 끝 인덱스보다 크거나 같은 경우 빈 문자열을 반환.
    // (끝 인덱스가 반드시 커야 함.)
    console.log(str1.slice(10, 4));
    
    // 파라메터가 1개만 있을 경우 시작 인덱스 값이 됨.
    // 끝 인덱스가 생략된 것이므로 끝 인덱스는 문자열 길이값이 사용됨.
    console.log(str1.slice(10));
    console.log(str1.slice(30));
    
    // 끝 인덱스는 마이너스 값 사용가능
    // 마이너스 값일 경우 (문자열 길이 + 마이너스값)이 끝 인덱스 값이 됨.
    console.log(str1.length);
    console.log(str1.slice(0, -10));
    
    // 마지막 인덱스+1(문자열 길이값) 보다 큰 값은 마지막 인덱스+1로 대체.
    console.log(str1.slice(8, 100));
    
    // 파라메터가 없을 경우 전체 문자열을 반환
    console.log(str1.slice());

    