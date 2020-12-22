/*
  1. 엘리먼트 선택 
       HTML 엘리먼트 선택은 querySelector(), querySelecotrAll() 두개의 메서드를 사용함.
       
       querySelector()는 엘리먼트 1개를 반환 
       반환할 엘리먼트가 없으면 "null"반환

       querySelectorAll()는 엘리먼트(노드) 리스트를 반환함
       반환할 엘리먼트가 없으면 길이가 0인 엘리먼트 리스트를 반환
*/
        Element.querySelector('id');
        Element.querySelectorAll('.class');

/*
  2. 엘리먼트 생성
       노드 생성은 HTML 엘리먼트를 생성하는 createElement()와 
       텍스트 노드를 만드는 createTextNode()메서드 2개를 사용할 수 있음.
*/
       let div = document.createElement('div');
       let span = document.createElement('span');
       span.innerText = 'HTML 문서 샘플';
       div.appendChild(span);
       document.body.appendChild(div);
       
       //혹은
       document.body.innerHTML = '<div><span>HTML 문서 샘플</span></div>';

/*
  3. 엘리먼트 삭제
       remove(), 또는 removeChild() 메서드를 이용해 태그 엘리먼트를 삭제할 수 있음.
       remove()는 엘리먼트 자신을 삭제하며,
       removeChild()는 부모요소의 자식요소를 삭제 한다.
       => 부모요소.removeChild(자식요소) 형식...
*/
       document.getElementById('delid').remove();
       let parent = document.getElementById('parentdiv');
       let child = document.getElementById('childspan');
       parent.removeChild(child);

/*
  4. 엘리먼트 삽입, 이동
*/
       // 새 <li> 엘리먼트 생성
       let li = document.createElement('li');
       let litext = document.createTextNode('무지');
       li.appendChild(litext);
    
       //새 <li> 엘리먼트를 붙일 대상 부모 선택
       let targetul = document.getElementById('friends');
       targetul.appendChild(li); //friends ID를 가진 ul자식들 맨끝에 새로 만든 <li>태그를 붙임
       

       //이동할 엘리먼트 선택
       let sourceli = document.querySelector('ul#friends li:first-child');
       //삽입할 위치 기준 엘리먼트 선택
       let targetli = document.querySelector('ul#friends li:last-child');
       //붙여넣는 위치에 주의해야 함
       //1뎁스 ul 마지막 요소가 아니라 중첩된 내부 ul 끝에 붙게됨.
       targetli.after(sourceli);
       console.log("확인");