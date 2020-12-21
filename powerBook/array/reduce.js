/*
  reduce() : 누적합을 구하는 메서드
  
    Array.reduce(누적용결변수, 현재요소변수, 현재인덱스(생략가능), 원본배열(생략가능))=>{
        return 누적반환값(누적계산식);
    }, 누적결과용 변수 초기값);
*/

//reduce를 이용하여 누적합 구하기.
const arr1 = [1, 2, 3, 4, 5];
const sum = arr1.reduce((arr, cur) => {
  return arr + cur;
},0);
console.log(sum);

//번외로 forEach를 이용하여 누적합 구하기.
const sum1= 0;
  arr1.forEach((arr)=>sum1+=arr));
  console.log(sum1);
let sum2= 0;
  arr1.forEach((arr)=>{sum2+=arr;});
  console.log(sum2);

//reduce를 이용하여 중첩 배열을 단순화하기 
const arr2 = [1, [2, 3], 4, [5, 6, 7, 8]];
const arr2_concat = arr2.reduce((arr, cur)=>{     
  return arr.concat(cur);
},[]);
console.log(arr2_concat);

//중첩배열을 단순화하는 더 쉬운방법 - join()이용
console.log(arr2.join().split(','));
