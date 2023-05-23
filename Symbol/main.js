// 아래처럼 사용하면 person object안에 weight키 값을 쉽게 조회할 수 있음.
// 민감한 자료에 부적합
// let person = { name: 'Kim' };
// person.weight = 100;

// 그래서 symbol 사용
let weight = Symbol('My secret bodyweight');
//person[weight] = 100;
let height = Symbol('How tall I am');
// person[height] = 173;

let person = { name: 'Park', [weight]: 100, [height]: 173 };

// 위처럼 한 뒤에 person을 검색해보면
// {name: 'Kim', Symbol(my secret bodyweight): 100} 라고 나옴.

// Symbol값은 반복문에서 출력되지 않음.
for (let key in person) {
    console.log(person[key]);
}

// let a = Symbol('description1');
// let b = Symbol('description1');
// (a === b) => false

// 전역 Symbol
let a = Symbol.for('description');
let b = Symbol.for('description');
// (a === b) => true

// Array에 내장된 기본 Symbol
let arr = [2, 3, 4];
arr[Symbol.iterator];