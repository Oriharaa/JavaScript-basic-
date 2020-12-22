/*
  from() : 문자열 안의 문자 1개를 하나의 배열요소로 변환함.
           +반환하는 배열은 중간 처리 함수를 이용해 재가공을 할 수 있어
           다양한 형태로 변경해 활용 가능.
*/
    //1. 문자열을 문자 배열로 변환 예.
    const str1 = '1234567890';
    const str2 = 'abcdefghijkl';
    const str3 = 'ABCDEFG';
    const arr_str1 = Array.from(str1);
		const arr_str2 = Array.from(str2, function(el){return el + ','});
    const arr_str3 = Array.from(str3, el=>el + ',');
    
    console.log(arr_str1);
    console.log(arr_str2);
    console.log(arr_str3);

    //2.문자열을 문자 배열로 변환 예.
    const str4 = 'abcdefghi';
    const str5 = Array.from(str4, (el, idx)=> el + (idx<str2.length-1?',':'')).join('');
    console.log(str4);

/*
  split() : 하나의 문자열을 구분자를 사용해 문자열 배열로 나눔.
            +from() 메서드와 달리 나누어진 각 배열 요소는 문자열이 된다.
            주로 파일에서 읽은 데이터를 줄단위로 나누거나, 구분자 단위로 나누어서
            정형화 된 데이터를 만들 때 주로 사용된다고함.
*/
    //1. 구분자로 문자열을 배열로 반환
    const fruits = '석류, 자몽, 딸기, 블루베리';
    const city = `도쿄
    베이징
    서울
    뉴욕
    파리`
    const arr_fruits = fruits.split(',');
    const arr_city = city.split('\n');

    const city_trim = arr_city.map(city => {
  		return  city = city.trim();
		});
    arr_city.forEach( (x,idx,arr) => {
      arr[idx] = x.trim();
    })

    console.log(arr_fruits);
    console.log(arr_city);
    console.log(city_trim);

    //2. 문자열 일부만 배열로 가져오기
    const david1 = '이  자식들  전부 매장시키고 싶어 한국 힙합 안에 내이름을 빼버리고 싶어';
    const david2 = david1.split('  ', 2);
    console.log(david2);

    //3. 정규 표현식 구분자로 배열 생성
    const regular = '이, 자식들, 전부, 매장, 시키고, 싶어, 한국, 힙합, 안에, 내이름을, 빼버리고, 싶어';
    console.log(regular.split(/\s*[\,|\.]\s*/));

    //4. 문자열 뒤집기
    const abc = 'abcdefghi';
    const num = '1 2 3 4 5 6 7 8 9 0';
    console.log(abc.split('').reverse().join(''));
    console.log(num.split(' ').reverse().join(''));

