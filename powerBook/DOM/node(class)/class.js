/*
  1. 클래스 추가
       [클래스 1개를 추가]
         엘리먼트 노드.className = "클래스명";
         엘리먼트 노드.setAttribute('class', '클래스명');

       [2개 이상의 클래스를 추가]
         엘리먼트노드.className = '클래스명1 클래스명2';
         엘리먼트노드.setAttribute('class', '클래스명1 클래스명2');

       [기존 클래스에 추가 클래스를 적용할때]
         엘리먼트노드.className += ' 클래스명3';
         parent.setAttribute('class', parent.getAttribute('class')+' 클래스3');
*/
       //클래스 추가 예
       document.querySelectorAll('div').forEach(function(el){
         el.setAttribute('class', 'bold padding10');
       });
       document.getElementById('title').className += ' bigtext';

/*
  2. 클래스 변경
     classList에 대해 배우기 전에 
     태그에 적용되어 있는 여러 클래스 중 하나를 다른 클래스로 변경하려면
     정규 표현식을 사용해 문자열 대체를 해야함.
       => /클래스명/g

     예를 들어 "클래스1"을 "클래스2"로 바꾸는 경우
       => 엘리먼트노드.className = 엘리먼트노드.className.replace( /클래스1/g, '클래스2');  
*/
       //클래스 변경 예
       document.getElementById('title').className = 
       document.getElementById('title').className.replace(/bigtext/g, 'smalltext' );
       
       document.querySelectorAll('div').forEach(function(el){
         if(el.className.match( /bold/g )){
           el.setAttribute('class', el.getAttribute('class').replace(/padding10/g, 'padding0')
           +' red');
         }
       });

/*
  3. 클래스 삭제
       [속성 자체를 삭제 할 경우]
         엘리먼트노드.removeAttribute('class');

       [클래스만 삭제하고 속성(class="")은 남겨두고 싶을 때]
         엘리먼트노드.className = '';
         엘리먼트노드.setAttribute('class', '');
*/  
       document.querySelectorAll('div').forEach(function(el){
         el.removeAttribute('class');
       });