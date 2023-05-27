// Js문법으로 구현할 수 있는 브라우저 기본 기능
class mycustom extends HTMLElement {
    connectedCallback() {
        // let label = document.createElement('label')      // 방법1 이게 조금 더 빠름.
        // this.appendChild(label);                         // 방법1
        let name = this.getAttribute('name');
        this.innerHTML = `<label>${name}</label> <input>`;  // 방법2
    }
    static get observedAttributes() {
        return ['name'];                                    // name 속성이 바뀌는지 감지
    }
    attributeChangedCallback() {                            // 바뀌면 실행
        let name = this.getAttribute('name');               // react의 재렌더링 기능과 같음
        this.innerHTML = `<label>${name}</label> <input>`;
    }
}
customElements.define('custom-input', mycustom);

// html 중복제거, 다른 페이지에서 재활용이 가능한 장점이 있다. (함수랑 비슷한 느낌)
