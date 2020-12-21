/*
  find() : 배열을 순환하다 파라메터로 넘긴 함수의 조건을 만족하는 요소가 발견되면 
           요소를 반환하고 배열 순환을 종료함.
           +배열 긑까지 조건을 만족하는 요소가 없을 경우 "undefined"를 반환함.
*/
    // 조건을 만족하는 첫번째 요소를 얻기.
    const arr1 = [{name: '프로도', age: 1}, {name: '어피치', age: 2}, {name: '프로도', age: 3},
                  {name: '브라움', age: 4}];
    const result1 = arr1.find((el)=>el.age === 4);
    console.log(result1);

/*
  filter() : 파라메터를 넘긴 함수의 조건을 만족하는 요소만을 모아 배열로 반환.
*/
    // 조건을 만족하는 요소들을 가진 배열을 반환 받기.
    // 화살표 함수.ver
    const arr2 = [{name: '프로도', age: 1}, {name: '어피치', age: 2}, {name: '프로도', age: 3},
                  {name: '브라움', age: 4}];
    const filter1 = arr2.filter(el=>el.name === "프로도");
    console.log(filter1);

    // 익명 함수.ver
    const filter2 = arr2.filter(function(el){
      return el.name === "프로도" ? el : null;
    });

/*
    map() : 동일
*/  
      const arr3 = [{name: '프로도', age: 1}, {name: '어피치', age: 2}, {name: '프로도', age: 3},
                   {name: '브라움', age: 4}];
      const filter3 = arr3.map(function(el){
      return  el.age > 1 ? el : null;
       });