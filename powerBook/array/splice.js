/*
  splice() : 배열요소(들)의 삭제 혹은
             배열요소(들)의 추가 혹은
             배열오소(들)의 변경이 가능함.

             [ex]
             Array.splice(시작 인덱스, 삭제할 요소 길이, 추가할 요소1, ...);
             Array.splice(0. 2);
             Array.splice(4, 2, "네온", "프로도");
*/
    //삭제하는 경우 
    const str1 = ['펭수', '라이언', '어피치', '콘', '브라운', '무지'];
    str1.splice(4, 1);
    str1.splice(0, 2);
    console.log(str1);

    //추가하는 경우
    const str2 = ['펭수', '라이언', '어피치'];
    str2.splice(1, 0, '프로도');
    str2.splice(0, 0, '네오', '튜브');
    console.log(str2);

    //변경하는 경우
    const str1 = ['펭수', '라이언', '어피치', '콘', '브라운', '무지'];
    str1.splice(3, 1, '프로도');
    str1.splice(0, 3, '네오', '튜브');
    console.log(str1);
  