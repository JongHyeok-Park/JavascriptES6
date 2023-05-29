let user = {
    name: 'Kim',
    // age: { value: 20 }
};

let park;

// user객체가 존재하지 않으면(undefined) 실행되지 않음
console.log(user.age?.value);
console.log(user?.age); // 이건 의미없음 원래 undefined를 줌
// undefined.age같은 참조에서 문제가 되는거임

// 왜 필요할까?
// 에러가 발생하면 에러가 발생한 지점에서 코드가 멈추기 때문에
// 에러를 방지하기 위해서 사용 (예외처리랑 비슷한 느낌)

document.getElementById('a')?.innerHTML; // 이런식으로도 사용 가능.

// but, 에러를 피해가는 것일 뿐이고 에러를 해결해주진 않는다.

console.log(undefined ?? 'Hi'); // 왼쪽 변수가 undefined면 오른쪽 변수로 실행.
// 데이터가 서버에서 늦게 받아와 졌을 때 쓰는 식으로 사용 가능.