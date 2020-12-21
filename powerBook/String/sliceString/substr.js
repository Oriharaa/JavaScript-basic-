/*
  substr() : slice(), substr()과 두번째 파라메터의 용도가 다름.
             두번째 인덱스는 가져올 문자열의 길이임. 
             +길이에 음수를 사용할경우 0으로 변경 따라서 빈문자열
*/
    const str1 = 'This is the only one story';

    console.log(str1.substr(8, 11));
    console.log(str1.substr(11, 8));
    console.log(str1.substr(11, -8));

    //시작 인덱스가 음수이므로 문자열 끝에서 10만큼 왼쪽으로 이동한 위치부터 8개의 문자열 반환.
    console.log(str1.substr(-10, 8));

    //파라메터가 하나만있을경우 시작 인덱스가 되며 두번째인덱스는 전체 문자열길이의 값
    console.log(str1.substr(10));

    console.log(str1.substr(0, -10));
    console.log(str1.substr(8, 100));
    console.log(str1.substr());

