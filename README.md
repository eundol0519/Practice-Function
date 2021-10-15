# <body>
    <h1>할 일 목록</h1>
    <!-- 입력 창 -->
    <input id="todo">
    <!-- 지우기 버튼 -->
    <button id="clear-button">지우기</button>
    <!-- 추가 버튼 -->
    <button id="add-button">추가하기</button>
    <!-- 할 일 목록 -->
    <div id="todo-list"></div>
    <!-- 마지막으로 친 input 값 띄우기 -->
    <p></p>
</body>
<script>
    document.addEventListener("DOMContentLoaded", ()=>{

        // 문서 객체를 가져옵니다.
        const input = document.querySelector("#todo");
        const addButton = document.querySelector("#add-button");
        const clearButton = document.querySelector("#clear-button");
        const todoList = document.querySelector("#todo-list");
        const p = document.querySelector("p");

        // 변수를 선언합니다.
        let keyCount = 0; // 이후에 removeTodo() 함수에서 문서 객체를 쉽게 제거하기 위한 용도
        // ★ keyCount를 ketCount로 써서 식별 오류 남.

        // 함수를 선언합니다.
        const addTodo = () => {
            // 입력 양식에 내용이 없으면 추가하지 않습니다.
            if(input.value.trim() === ""){ 
            // trim을 사용해서 앞뒤 공백이나 줄바꿈을 바꿔보고 값이 공백이면(없으면)
            alert("할 일을 입력 해주세요.");
            // 경고창을 띄운다.
            return;
            // 조기 리턴한다.(프로그램을 종료한다.)
            }

        // 입력한 값을 웹에 저장한다.
        input.addEventListener("keyup", (event)=>{
            const value = event.currentTarget.value;
            localStorage.setItem("input", value);
            // localStrorage.setItem(키, 값) : 값을 저장한다.
        })

        // 문서 객체(요소)를 설정합니다.
        // 추가 했을 때 띄워주는 역할
        const item = document.createElement("div");
        const checkbox = document.createElement("input");
        const text = document.createElement("span");
        const button = document.createElement("button");

        // 문서 객체를 식별할 키를 생성합니다.
        const key = keyCount;
        keyCount += 1;
        // 이후에 removeTodo() 함수에서 문서 객체를 쉽게 제거하기 위한 용도

        // item 객체를 조작하고 추가합니다.
        item.setAttribute('data-key', key);
        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        todoList.appendChild(item);

        // checkbox 객체를 조작합니다.
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", (event) => {
            item.style.textDecoration = event.target.checked ? 'line-through' : ""
            // ★ 오타남.
        })

        // text 객체를 조작합니다
        text.textContent = input.value;
        // <span>글자<span> 형태를 구성합니다.

        // button 객체를 조작합니다.
        button.textContent = "제거하기";
        button.addEventListener('click', () => {
            removeTodo(key);
        })

        // 입력 양식의 내용을 비웁니다.
        input.value = '';
        }

        const removeTodo = (key) => {
            // 식별 키로 문서 객체를 제거합니다.
            const item = document.querySelector(`[data-key = "${key}"`);
            // ★ [data-key] = ${key}라고 써서 오류 남.
            todoList.removeChild(item);
        }

        // 이벤트 연결
        addButton.addEventListener("click", addTodo);
        input.addEventListener("keyup", (event) => {
            const ENTER = 13;
            if(event.keyCode === ENTER){
                addTodo();
            }
        })

        // F5를 눌렀을 때 저장한 값을 출력하는 부분
        // 값을 저장
        const savedValue = localStorage.getItem("input");
        // localStorage.getItem(키) : 값을 가져온다.
        if(savedValue){
            input.value = savedValue;
        }

        // 지우기 버튼
        clearButton.addEventListener("click", (event)=>{
            localStorage.clear();
            input.value = ""
        })
    })
</</script각본을 뜨다>>
