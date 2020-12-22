let elem = document.getElementById('menu');

console.log(elem.outerHTML); //HTML 출력

//info 어트리뷰트와 프로퍼티 출력
console.log('elem.getAttribute("Info"): ' + elem.getAttribute("Info")); //null
console.log('elem.info: ' + elem.info); //undefined

//attr 어트리뷰트 추가
elem.setAttribute('Attr', 123);
console.log('elem.attr: ' +elem.attr); // undefined
console.log(elem.getAttribute('attr'));

//클래스 속성 wide 추가
elem.setAttribute('class', 'wide');
console.log('elem.className: ' +elem.className); //wide

//클래스 속성 narrow 로 변경
elem.className = 'narrow';
console.log('elem.getAttribute("class"): ' +elem.getAttribute('class')); //narrow

// DOM 프로퍼티 newproperty 추가
elem.newproperty = 'New Property';
console.log('elem.newproperty: ' + elem.newproperty); // New Property
console.log(elem.getAttribute('newproperty')); //null

//태그 HTML 출력
console.log(elem.outerHTML);

//어트리뷰트 출력
for (let attr of elem.attributes) {
  console.log(`${attr.name} = ${attr.value}`);
}