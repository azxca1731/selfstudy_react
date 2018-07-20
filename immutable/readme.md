immutable 쓸때 주의점
1. 객체는 Map
2. 배열은 List
3. 설정할땐 set
4. 읽을땐 get
5. 읽은다음에 설정 할 땐 update
6. 내부에 있는걸 ~ 할땐 뒤에 In 을 붙인다: setIn, getIn, updateIn
7. 일반 자바스크립트 객체로 변환 할 땐 toJS
8. List 엔 배열 내장함수와 비슷한 함수들이 있다 – push, slice, filter, sort, concat… 전부 불변함을 유지함
9. 특정 key 를 지울때 (혹은 List 에서 원소를 지울 때) delete 사용