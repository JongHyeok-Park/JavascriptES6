const person = new Map();
// person.set('name', 'Kim');
// person.set('age', 20);

// Map 자료형은 자료간의 연관성을 표현하기 위해 사용.
// Key값을 아무 자료형이나 넣을 수 있다. (Object는 불가능)
person.set(100, 'Kim');
person.set([1, 2, 3], 20);

// 자료를 불러올 때 다음과 같이 사용.
person.get(100);

// 자료를 삭제 하는 법
// person.delete(100);

// 자료의 갯수 확인
// person.size;

// Map Iterator
for (let key of person.keys()) {
    console.log(person.get(key));
}

// Map에 직접 자료 집어넣을 때
// let person = new Map([
//     ['name', 'Kim'],
//     ['age', 20]
// ])


// 일반 Array
let 출석부 = ['John', 'Tom', 'Hyunthai', 'Tom'];

// Set 자료형
// 중복 자료를 허용하지 않는다.
const 출석부2 = new Set(['John', 'Tom', 'Hyunthai', 'Tom']);
출석부2.add('David');     // 추가
출석부2.delete('Tom');    // 삭제
출석부2.has('Hyunthai');  // 존재하는가? true or false
출석부2.size;             // 크기

// spread문법을 써서 배열에 넣을 수 있음.
출석부 = [...출석부2];

// Set자료형 반복문 돌리기
출석부2.forEach((a) => { console.log(a) });