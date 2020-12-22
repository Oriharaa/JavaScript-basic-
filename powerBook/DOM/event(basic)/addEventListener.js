/*
  1. 이벤트 등록
       모든 자바스크립트 이벤트 처리는 "addEventListener()" 함수로부터 출발합니다.
       "addEventListener()" 함수 구조는 다음과 같다.

       const ref = document.addEventListener('이벤트타입', function(e){
         //이벤트 콜백 처리
       });
       
       여기서 이벤트타입이란,
       사용자가 발생시킨 웹 페이지 안에서의 액션. 예를들어 마우스를 클릭했으면 "click"

       콜백함수란, 
       이벤트가 발생하면 실행하는 함수. 파라메터로 이벤트 객체를 전달하며 
       이벤트 객체에 이벤트를 발생시킨 HTML 요소와, 다양한 이벤트 정보가 들어있다고함.
       =>
       let btn = document.querySelector('#btnsave');
       btn.addEventListener('click', function(e){
         console.log(e.target.value+' clicked!');
       });
        또는 
       function callbackFunc(e){
         console.log(e.target.value+' clicked!');
       }
       btn.addEventListenter('click', callbackFunc);
        이렇게 버튼 엘리먼트에 클릭이 발생하면 콜백 함수가 실행되도록 할 수 있음.
*/

/*
  2. 등록 옵션 추가
       "addEventListener()" 함수는 파라메터로 옵션을 추가할 수 있음.
       (인터넷 익스플로러에서는 지원X...)

       -capture : 이벤트를 캡쳐링 방식으로 전파할지를 결정.
                  true/false 로 설정 기본 값 false. 

       -once    : 이벤트가 한번만 호출되고 등록한 이벤트 리스너가 삭제됨.

       -passive : 기본 값은 false 
                  "true"인 경우 "preventDefault()"(이벤트 취소 및 타겟의 기본 동작 차단)
                  메소드 사용 할 수 없음.
                  이벤트에 의해 스크롤이 블럭(Block) 되는 것을 막아주며, 
                  주로 모바일 브라우저의 스크롤 성능 향상을 위해 추가된 옵션임.
       =>
       btn.addEventListener('이벤트 종류', 콜백 함수, 이벤트 옵션 객체);
         예를 들어
       const options = {capture: false, once: true. passive: true}; //옵션 객체 생성
       //콜백 함수
       clickFunc = function (e){
         console.log(e.target.value+' clicked!');
       }
       btn.addEventListener('click', clickFunc, options); //이벤트 리스너 등록
       
*/

/*
  3. 이벤트 삭제
       이벤트를 등록할 떄 capture 옵션을 사용한 경우, 이벤트를 삭제 할 때 
       반드시 같은 옵션 값을 명시해야 한다.
       =>
       document.removeEventListener(이벤트타입, 등록된 콜백 함수, 옵션객체);
       와 같이 사용해야 하며, 예를 들어

       function callbackFunc(e){
         console.log(e.target.value+' clicked!');
       }
       document.addEventListener('click', callbackFunc, {capture: true}); //추가
       document.removeEventListener('click', callbackFunc, {capture: true})l //삭제

       ++이벤트 삭제 함수는 별도 반환 값이 없기 때문에 삭제 성공 여부를 알 수는 없다.
*/