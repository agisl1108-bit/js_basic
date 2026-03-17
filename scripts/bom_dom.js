// bom_dom.js
// 함수기초연습
function calc(num2){
    let num1 = 2;
    let total = num1 + num2;
    console.log(`total=>${total}`)
}
calc(1000);
calc(5);
calc('1');

// 1400px / 4 - 20px
// 1024px / 3 - 20px
// 420px / 2 - 20px

function px(width, num){
    let calc = (width - 20) / num;
    let total = `width: ${calc.toFixed(1)}px`
    console.log(total)
}
px(1400, 4)
px(1024, 3)
px(420, 2)

// BOM 내장함수 종류
// window.함수(); // window 최상위객체라 생략가능
// let bom1 = alert('경고 메세지');

// document.write('메세지')
// document.write('메세지<br>2')
// document.write('<h2>메세지3</h2>')

// DOM(document object model)
// 변수생성 -> 변수활용 연산자 또는 함수 진행
// DOM변수생성 -> 나머지 순서 동일
const h1Tag = document.getElementsByTagName('h1')
console.log(h1Tag)
// js에 의해 동적으로 변경되는 결과에 따라 스타일변동을 위해 자바스크립트 안에서도 css를 작성할 수 있다.
// DOM객체.style.속성 = '값';
// DOM객체.style = '속성:값';
h1Tag[0].style.backgroundColor = '#ff0';
// h1Tag[0].style = 'backgroundColor:#ff0';
// h1Tag[0].style = 'border:1px solid red';
h1Tag[0].style.border = '1px solid red';

// 클래스 DOM 선택
const titleCls = document.getElementsByClassName('title');
console.log(titleCls)
titleCls[0].style.backgroundColor = '#b3dcd3'
titleCls[1].style.borderBottom = '1px solid #f00'

// 아이디DOM
const txtId = document.getElementsByClassName('#txt');
console.log(txtId);
// txtId.style.backgroundColor = '#b3dcd3';

// ES6ver DOM
// title 클래스 잡기
const titleClsQ = document.querySelector('.title');
console.log(titleClsQ);

//h1 태그 잡기
const h1TagQ = document.querySelector('h1');
console.log(h1TagQ);

// 아이디 잡기
// 변수 생성 -> 스타일 적용
const txtIdQ = document.querySelector('#txt');
console.log(txtIdQ);
txtIdQ.style.fontWeight = '900';

// All 키워드 활용 클래스 여러개 잡기
const titleAll = document.querySelectorAll('.box .title');
console.log(titleAll);
// titleAll.style.backgroundColor = 'red'

// 스타벅스 카테고리/테마 메뉴 js 만들기
// 특정 목표 달성을 위한 절차적 순서 흐음 계획
// 초기모습 -> 사용자의 동적 움직임에 따라 변화되는 모습
// HTML, CSS 준비된걸 기준으로 작성
//1. 테마 내용 숨기기
//2. 테마 제목 클릭
//3. 카테고리 내용 숨기기, 테마 내용 보이기
//4. 카테고리 제목 클릭
//5. 카테고리 내용 보이기, 테마 내용 숨기기

//1. 테마 내용 숨기기
// 숨기기(동작) 실행하려면 테마내용(요소) 필요
// 변수
const theme = document.querySelector('.theme');
const themeTitle = document.querySelector('.tab_title a:nth-child(2)');
const category = document.querySelector('.category');
const categoryTitle = document.querySelector('.tab_title a:first-child')
// 변수 테스트(에러 조기 확인)
console.log(theme, themeTitle, category, categoryTitle);
// 실행
theme.style.display = 'none';
//2. 테마 제목 클릭
themeTitle.addEventListener('click',themeShow);
//3. 카테고리 내용 숨기기, 테마 내용 보이기
function themeShow(){
    category.style.display = 'none';
    theme.style.display = 'block';
}
//4. 카테고리 제목 클릭
categoryTitle.addEventListener('click',categoryShow);
//5. 카테고리 내용 보이기, 테마 내용 숨기기
function categoryShow(){
    theme.style.display = 'none';
    category.style.display = 'block';
}