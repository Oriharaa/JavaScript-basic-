/* 
  1.
    [문자열 리터럴] let str = "문자열"
    [객체 리터럴] let obj = {item: '자동차'};

    [문자 리터럴]
      \n : 줄바꿈
      \r : 캐리지 리턴(커서 위치 시작 위치로 이동)
      \b : 백스페이스
      \t : 탭
      \f : 폼 피드
      \, \\ : 역슬래시를 문자열 안에 문자로 표현하려면 역슬래시 2개를 겹쳐서 사용
      \xnn : 16진수 코드 문자표시
      \uXXXX : 유니코드 표시
*/

/*
  2.
    [템플릿 리터럴]
*/
      let str1 = 'good';
      let template = `${str1} moring, ${str1} afternoon`;
      console.log(template);
 
      
/*
  3. 고급 템플릿 리터럴 - 태그드 템플릿
        중간 적용 함수를 작성해 입력 받은 변수 값을 조건에 따라 
        다른 값으로 변환해 템플릿에 적용할 수 있도록함.
*/
    let str1 = 'good';
    
    // 중간 함수 taggedFu nc 바로 뒤에 역따옴표로 감싼 템플릿 리터럴을 붙여서 파라메터로 넘김.
    let result = taggedFunc`${str1} morning, ${str1} afternoon`;
    console.log(result);

    function taggedFunc(strings, exp){
      // 반환값 저장 변수
      let ret = '';
      for(let idx = 1; idx < strings.length; idx++){
        // 루프를 도는 시작 인덱스와 개수에 주의
        if(idx < strings.length-1){
          ret += 'bad' + strings[idx]; // 마지막 표현식이 아닌 경우 'bad' 문자열로 대입
        }else{
          ret += 'moon' + strings[idx]; // 마지막 표현식인 경우 'moon' 문자열로 대입
        }
      }
      return ret;
    }