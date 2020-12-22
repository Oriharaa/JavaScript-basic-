/*
  forEach() : 배열을 순환해 요소를 탐색한다.
              ++주의사항 : forEach()메서드는 리턴 값으로 undefined를 반환함.
                          즉, 리턴 값을 사용할 수 없음.
                          +새 배열을 만드는 방법은 map()메서드를 사용하는 것을 더 추천.
*/

    //1. 배열을 순환해 배열 요소 탐색하기.
    //객체 배열에서 "age" 속성 값이 19 이상인 객체 배열 요소에는 "adult" 속성 값을 
    //true로 추가하고 아니면 "false"로 속성 값을 추가해보자.
    const arr1 = [{name:'라이언', age:5}, {name:'어피치', age:20}, {name:'무지', age:21},
                  {name:'콘', age:10}];
    arr1.forEach((el,idx)=>{
      if(el.age >= 19){
        el.adult = true;
      }else {
        el.adult = false;
      }
    });
    console.log(arr1);

    //2. 배열을 순환해 새 배열을 만들기.
    //"adult"가 "true"인 배열 요소의 인덱스 값만 새 배열에 담아보자.
    const arr2 = [];
    arr1.forEach((el, idx)=>{
      if(el.adult){
        arr2.push(el);
      }
    });
    console.log(arr2);

/*
  map() : 배열을 순환해서 요소를 탐색 (새 배열로 반환하기 좋음.)
          기존의 배열을 변경 없이 그대로 남겨두어야 하는 경우에 활용도가 높다.
         
          ++주의사항: map()메서드로 배열을 재 가공해서 새 배열을 반환 받을 경우,
                     원 배열의 요소가 객체, 또는 참조 주소를 가진 요소인 경우 원 배열의
                     참조 주소를 그대로 사용함.
*/
    //1. map()으로 배열을 순환해 가공된 새 배열 받기
    const arr3 = ['라이언', '어피치', '애플'];
    const arr4 = arr3.map((el, idx)=> {
      el = '카카오 ' + el;
      return el;
    });
    console.log(arr4);

    //2. 객체를 요소로 가진 배열에서 얻을 떄의 문제 예
    const arr5 = [{name: '라이언', age: 5}, {name: '어피치', age:4}];
    const arr_mapped1 = arr5.map(function(el, idx){
      if(el.age >= 19){
        el.adult = true;
      }else {
        el.adult = false;
      }
      return el; //값이 변경된 원 배열 요소 참조를 반환.
    });
    arr_mapped1.push({name: '프로도', age:4}); //새 배열에 요소를 추가함.
    arr_mapped1[0].name = '브라운'; //원 배열 요소 객체의 속석 변경
    console.log(arr1);
    console.log(arr_mapped1);


    //3. 객체 요소를 가진 배열을 순환해 가공된 새 배열을 얻는 방법.
    const arr6 = [{name: '라이언', age: 5}, {name: '어피치', age:4}];
    const arr_mapped2 = arr6.map(function(el, idx){
      let check_adult = false;
      if(el.age >= 19){
        check_adult = true;
      }
      return {name: el.name, age: el.age*2, adult: check_adult}; //객체 리터럴로 새 객체 반환.
    });
    arr_mapped2.push({name:'프로도', age:4}); //새 배열에 요소를 추가함.
    arr_mapped2[0].name = '브라운'; // 원 배열 요소 객체의 속성 변경
    console.log(arr6);
    console.log(arr_mapped2);





