/*
  table() : 표 모양으로 배열을 이쁘게 표시해줌.
*/
let dollss = [['라이언', 5], ['어피치', 3], ['콘', 2]];
console.table([['라이언', 5], ['어피치', 3], ['콘', 2]]); 

/*
  중첩 배열의 요소 추가
*/
    let array1 = [['라이언', 5], ['어피치', 3], ['콘', 2]];
    array1.push(['브라운', 3]);
    array1.unshift(['펭수', 1]);
    array1.splice(3, 0, ['네오', 3]);
    console.log(array1);
    console.table(array1);

/*
  중첩 배열의 요소 삭제
*/
  let array2 = [['라이언', 5], ['어피치', 3], ['콘', 2], ['프로도', 2]];
  array2.pop();
  array2.shift();
  array2.splice(0, 1);
  console.log(array2);
  console.table(array2);

/*
  중첩 배열의 순환
*/
  let dolls = [['라이언', 5], ['어피치', 3], ['콘', 2], ['무지', 3], ['프로도', 3]];
  dolls.forEach(doll=>{
    doll[2] = doll[0] == '어피치' ? 'female' : 'male'; 
  });
  console.table(dolls);
  dolls.forEach(function(doll, idx){
    doll.pop(); //추가한 성별 다시 제거
  });
  console.table(dolls);
  