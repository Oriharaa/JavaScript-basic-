/*
  some() : 콜백 함수의 조건을 만족하는 요소가 1개라도 있으면 "true",
           없으면 false를 반환함. 즉, 
           조건을 만족하는 요소가 있으면 남은 요소들을 더 확인하지 않고 "true"를 반환하고 종료함.
*/
    const arr1 = [{name: '프로도', age: 1}, {name: '어피치', age: 2}, {name: '프로도', age: 3},
                  {name: '브라움', age: 4}];
    const bool_some = arr1.some(el=>el.age>3);
    console.log(bool_some);

/*
  every() : some과 다르게 모든 배열요소가 조건을 만족해야 "true"
            아니면 "false"를 반환함. 즉,
            조건을 만족하지 않는 요소가 있으면 남은 요소들을 
            더 확인하지 않고 "false"를 반환하고 종료함.
*/
    const arr2 = [{name: '프로도', age: 1}, {name: '어피치', age: 2}, {name: '프로도', age: 3},
                  {name: '브라움', age: 4}];
    const bool_some2 = arr2.every(el=>el.age>2);
    console.log(bool_some2);