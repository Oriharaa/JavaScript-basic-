/*
  replace() : 문자열에서 찾는 문자열을 대상 문자열로 바꿈.
              단, 처음 나오는 찾는 문자열 1개만 바꿔주며 
              모든 문자열을 바꾸려면 정규표현식을 조합해야함.
              +대,소문자 구분에 유의
*/

    const str1 = 'GOOD MORNING, GOOD AFTERNOON, good evening, and good night';

    console.log(str1.replace('good', 'bad'));

    //문자열을 모두 소문자로 변환한 후 문자열 찾아 바꾸기
    console.log(str1.toLowerCase().replace('good', 'bad'));

    //정규 표현식으로 대소문자 구분없이 문자를 1개 바꾸기
    console.log(str1.replace(/good/i, 'bad'));

    //대소문자 구분없이 나오는 모든 찾는 문자열들을 대상 문자로 변경.
    console.log(str1.replace(/good/gi, 'bad'));

    /*
      +++
      toLowerCase() : 소문자 변환
      toUpperCase() : 대문자 변환
    */
        const str2 = 'hEllo';

        console.log(str2.toLowerCase());
        console.log(str2.toUpperCase());