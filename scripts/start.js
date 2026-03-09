// start.js
//객체 사용 전 반드시 변수(저장소) 등록하기
// 변수생성키워드 생성변수형;
var box; // 변수 생성
var box2; // undefined(값이 정의되지 않음)
box = 1; // 값1을 box변수에 대입한다.
box = 2; // 2 변수는 한번에 한가지 값만 인식
box2 = 5; // undefined -> 5 값 변경
box = box2; // 2 제거 -> 5 qusrud
box2 = 10; // 5 -> 10 변경