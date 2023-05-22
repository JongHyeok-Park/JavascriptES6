// Enumerable

// let obj = { name: 'Kim', age: 30 };

// 속성 확인 하는 법
// Object.getOwnPropertyDescriptor(obj, 'name');

// for (let key in obj) {
//     console.log(obj[key]);
// }

////////////////////////////////////////

// class Parent {

// }
// Parent.prototype.name = 'Park';
// let obj = new Parent();

// for (let key in obj) {
//     if (obj.hasOwnProperty(key))
//         console.log(obj[key]);
// }

////////////////////////////////////////

// Iterable
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}

for (let char of '가나다라마바사') {
    console.log(char);
}

// Iterable 확인
// arr[Symbol.iterator]()

// NodeList
// document.getElementsByClassName('html') -> [HTML1, HTML2]