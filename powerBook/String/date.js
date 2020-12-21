/*
  1.
    날짜 객체 생성
*/

  let today = new Date();
  let date1 = new Date('2020-12-21T19:27:15');
  let date2 = new Date('2020-12-21 19:28:10');
  let date3 = new Date('May 10, 2020-05-10');
  let date4 = new Date('20,12,21');
  let date5 = new Date('20,05,21,09,00,00');

	console.log(today.toISOString());
  console.log(today.toString());

/*
  2.
    날짜 부분 정보를 얻기

      getFullYear() : 4자리 년도 숫자를 반환

      getMonth()    : 월 숫자 반환.
                      (0부터 시작하기 때문에 실제 월이 되려면 1을 더해야 함.)

      getDate()     : 날짜(일) 숫자 반환

      getDay()      : 0 ~ 6까지의 요일 인덱스를 반환
                      (0은 일요일. 순차적으로 월화수목금토가 됨.)

      getHours()    : 24시간 표시 시간값 반환

      getMinutes()  : 60분 표시 시간값 반환(0~59)

      getSeconds()  : 60초 표시 시간값 반환(0~59)
*/

/*
  3. 
    코드 실행 시간을 밀리세컨드로 얻기  
*/
  let strat = Date.now(); //시작시간
  let end = Date.now(); //종료시간

  //1초 지연 후 경과 시간 얻기
  setTimeout(function(){
    end = Date.now();
    let elapsedTime = end - strat; // 경과한 밀리세컨드.
    console.log(elapsedTime+"ms 경과.");
  }, 1000);





