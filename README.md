# 📌 할 일 관리(Todo) 과제

## 🛠 과제 결과물
### • Git 제출 3차 과제 결과물 : [사이트 바로가기](https://vocal-clafoutis-16187b.netlify.app/)

</br>

### ❗ 필수

- [x] 할 일 목록(List)이 출력돼야 합니다.
- [x] 할 일 항목(Item)을 새롭게 추가할 수 있어야 합니다.
- [x] 할 일 항목을 수정할 수 있어야 합니다.
- [x] 할 일 항목을 삭제할 수 있어야 합니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### ❔ 선택

- [x] 할 일 항목의 순서를 바꿀 수 있도록 만들어보세요. (추천 라이브러리 - [SortableJS](http://sortablejs.github.io/Sortable/))
- [ ] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해보세요.
- [ ] 할 일을 완료한 항목을 한 번에 삭제할 수 있도록 만들어보세요.
- [ ] 할 일 항목의 최신 수정일을 표시해보세요.
- [ ] 할 일 목록이 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 기타 동작이 완료되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 할 일과 관련된 기타 기능도 고려해보세요.

</br>

## 📝 작업일지

### 1️⃣ 주요 작업 파일 구조
- pages
  - _app.js : Todo 화면 출력 영역
- component
  - TodoTemplate : Todo의 전체 레이아웃 컴포넌트
  - TodoList : Todo의 아이템 리스트 목록 컴포넌트
  - TodoItem : Todo의 체크, 할 일 내용, 편집, 삭제, 영역 컴포넌트
  - TodoHead : 오늘 날짜가 표시되어 있는 컴포넌트
  - TodoCreate : Todo의 할 일 추가 컴포넌트

### 2️⃣ 작업 설명
  - 이번에는 `넥스트JS`를 설치하여 사용하여 여러가지로 추가 설치 없이 편리하게 작업하였습니다. 구조 작업은 블로그를 통해 다른 개발자분들의 작업 상황을 참고하였지만 생각보다 기능들을 활용하는데 어려움도 많았습니다. 중간에 Todo 관련 강의 영상을 참고하여 작동방식을 확인하여 작업해 나갔습니다. 디자인 작업은 2~3시간 정도 진행되었지만 API에 데이터를 전송하는 부분에서 숙련이 되지 않아 어려웠던거 같습니다. 그래도 이번 기회에 API 작동 원리를 이해하게 된거 같습니다.

### 3️⃣ 어렵거나 아쉬웠던 부분
1. styled-components를 사용하여 placeholder 폰트 색상을 변경을 못했습니다.
2. API로 '삭제' 요청이 잘 진행되지 않았습니다. `fetch`의 `header`와 `body: JSON.stringify()` 부분 값에서 헤맸습니다.
3. TodoHead에 남은 할일을 표시걸 구현하지 못하였습니다. TodoList에서 목록 API에서 데이터를 가져오려 했는데 잘되지 않았습니다.
4. 수정 기능에서 기존의 input를 활용하여 수정할 내용을 넣고 API에 전송하고 싶었지만 기존 할일 내용 위에 창을 띄워 가리는 방법을 사용하였습니다.
5. 체크, 편집, 삭제 버튼을으로 API에 데이터를 전송한 후 랜더링을 다시하도록 하고 싶었지만 구현하지 못하여 현재 계속 TodoList의 API 조회 부분이 랜더링 되고 있습니다.
6. 학습 시간상 추가 기능을 구현하지 못하여 아쉬웠습니다. 추후 작업하도록 하겠습니다.
7. 시간상 설명 주석과 코드 정리를 진행하지 못하여 아쉬웠습니다.
8. 클로벌 스타일과 컬러를 제대로 사용하지 못하였습니다.
9. 넥스트JS의 유용한 기능을 사용하지 못한거 같습니다.

### 4️⃣ 작업을 통해 배운 부분
1. API 통신을 통해 데이터를 표시하거나 주고받고 수정하는 방법을 배웠습니다.
2. Todo리스트의 작동 구조를 파악하였습니다.
3. 코드를 읽으면서 기능을 이해하는 부분이 늘었습니다.
4. usestate, useeffect의 사용에 익숙해졌습니다.

### 5️⃣ 작업물 스샷
![1](https://github.com/DICEPT/todo_app_nextjs/assets/106785596/e240c2be-2ca7-491b-880b-fa430e8ef33e)
![2](https://github.com/DICEPT/todo_app_nextjs/assets/106785596/e6e0c31b-ee83-449b-aab0-92a91e720b0e)
![3](https://github.com/DICEPT/todo_app_nextjs/assets/106785596/2621e08f-6edf-4d6c-b64b-b28c7ae74bed)
![4](https://github.com/DICEPT/todo_app_nextjs/assets/106785596/055fd265-5cea-49db-9a01-c84be028e270)