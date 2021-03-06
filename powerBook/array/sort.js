/*
  sort() : 배열 요소 값이 순차적으로 되어있지 않은 경우 비교함수를 인자로 넣어
           오름차순, 또는 내림차순으로 정렬이 가능하며 별도의 반환값은 없음.
           
           Array.sort(function(a, b){
             return 비교값;
           });

            비교 값에 따른 정렬기준
            비교값 > 0          a가 b보다 앞(작은 인덱스)에 위치
            비교값 = 0          a와 b의 위치를 변경하지 않음
            비교값 < 0          b가 a보다 앞(작은 인덱스)에 위치 
*/

            const arr1 = [3, 2, 6, 1, 4, 1, 6, 9, 8];
            console.log(arr1.sort((a, b)=> a - b));

            const arr2 = ['가', '나', '다', '라', '마', '미'];
            console.log(arr2.sort((a, b)=> a > b ? 1 : -1));

 