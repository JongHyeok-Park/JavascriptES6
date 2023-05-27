// document.querySelector('#custom').attachShadow({ mode: 'open' });
// document.querySelector('#custom').shadowRoot.innerHTML =
//   `<p>This is Shadow Dom</p>`;

// Web Components와 Shadow DOM기술을 합치면 HTML모듈화에 효과적

class mycustom extends HTMLElement {
    connectedCallback() {
        // this.innerHTML = `<label>이메일</label> <input>  // 그냥 이렇게 사용하면 style이 다른 label태그에도 오염됨
        // <style>label { color: red }</style>`;            // 그래서 Shadow DOM쓰면 좋음 (Shadow DOM은 외부에 영향 X)
        this.attachShadow({ mode: 'open' });
        // this.shadowRoot.innerHTML =
        // `<label>이메일</label> <input>
        // <style>label { color: red }</style>`;   // 이렇게 ShadowDOM응용하면 다른 모듈이나 외부에 영향을 주지 않는다.
        this.shadowRoot.append(myTemplate.content.cloneNode(true));  // HTML파일에 만든 Template을 자바스크립트에서 사용

        // 이벤트리스너도 사용 가능
        this.shadowRoot.querySelector('label').addEventListener('click', function () {
            console.log(this.innerHTML);
        })
    }
}
customElements.define('custom-input', mycustom);

// Web Components 만들어 주는 라이브러리 쓰는게 더 나음.