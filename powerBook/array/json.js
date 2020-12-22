
/*
  1.
    JSON 값만 배열로 추출하기 
*/
  json1 = {value1:13, value2:10, value3:5, value4:40};
  let value_arr = Object.values(json1);
  console.log(value_arr);

/*
  2.
    순환문으로 JSON 값 배열로 얻기
*/
    json2 = {data:[{value: 1}, {value: 2}, {value: 3}]};
    let result2 = [];
    json2.data.forEach((item, idx)=>{
      result2.push(parseInt(item.value));
    });
    console.log(result2);

/*
  3.
    JSON 키:값을 중첩 배열로 얻기
*/
    json3 = {data:[{name:'라이언', value:15}, {name:'어피치', value:12}, {name:'무지', value:100}]};
    let result3 = [];
    json3.data.forEach(item=>{
      result3.push([item.name, parseInt(item.value)]);
    });
    console.log(result3);