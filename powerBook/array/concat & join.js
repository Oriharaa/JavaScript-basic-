/*
  concat() : array에서의 concat은 2개 이상의 배열을 합쳐 하나의 배열로 만드는 것. 
*/
    const arr_str01 = ['딸기', '바나나', '수박'];
    const arr_str02 = ['포도', '키위', '자몽'];
   
    // 2개의 배열을 1개로 합치기.
    const arr_new = arr_str01.concat(arr_str02);
    console.log(arr_new);

    // 인라인으로 배열 합치기
    const arr_inline = ['사과', '배'].concat(arr_str2);
    console.log(arr_inline);

    // 배열 요소(들)을 파라메터로 넘겨 배열을 합치기
    const arr_new2 = arr_str1.concat('사과', '배');
    console.log(arr_new2);


/*
  join() : 인자를 하나 받으며, 배열 요소를 하나로 합칠 때 배열 요소 사이에 
           넣을 구분자로 사용할 수 있음. 인자가 없을경우 기본값 (',')
           즉, 자동으로 구분자가 쉼표로 배열 요소 사이에 붙음. 
           =>(배열 요소를 합쳐 문자열로 만드는 것.)
*/
    const arr_str1 = ['아주', '오래전', '바닷가', '어느 왕국에', '당신이', '알지도 모를'];
    const str1 = arr_str1.join(' ');
    console.log(str1);

    const arr_str2 = ['석류', '자몽', '샤인머스켓', '블루베리', '딸기'];
    const str2 = arr.str2.join(); // 인자가 없을경우 기본값으로 쉼표가 들어감.

    const str3 = arr_str2.join('\n');
    console.log(str3);