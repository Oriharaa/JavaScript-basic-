/*
  1. 클래스 추가

       엘리먼트노드.classList.add('클래스1', '클래스2', ...클래스파라메터);
  
  2. 클래스 삭제
  
       엘리먼트노드.classList.add('클래스1', '클래스2', ...클래스파라메터);

  3. 클래스 토글(온오프)
     toggle() : 클래스가 있으면 삭제하고 없으면 추가하는 스위치 메서드.
                대화상자 보이기/감추기 등 사용 빈도가 높음.

       엘리먼트노드.classList.toggle.('클래스1');
       
  4. 클래스 존재여부 확인 
     contains() : 있으면 "true", 없으면 "false"를 반환한다.

       엘리먼트노드.contains('클래스명');
       
  5. 클래스 대체(교환) 
     replace() : 클래스를 다른 클래스로 변경한다. 삭제 후 추가하는 과정을
                 한번에 처리해줌. 클래스 1개씩만 적용가능하다.
       엘리먼트노드.classList.replace('기존클래스', '새클래스');       
*/
  //classList로 클래스 관리 예
  document.getElementById('title').classList.add('bold', 'padding10');
  document.querySelectorAll('div').forEach(function(el){
    if(el.classList.contains('padding10')){
      el.classList.remove('padding10');
    }
    el.classList.add('paddinng0', 'red');
  });

  document.getElementById('title').classList.toggle('red');
  const footer = document.getElementById('footer');
  if(footer.classList.contains('padding10')){
    footer.classList.replace('padding10', 'margin10');
  }

  const arrCommonClass = ['copyright', 'inline'];
  const infos = document.querySelectorAll('#footer ul li');
  infos.forEach(function(el){
    el.classList.add(...arrCommonClass);
  });