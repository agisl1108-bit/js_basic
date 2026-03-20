# Swiper javascript Plugin
* 플러그인을 통해 쉽게 만드는 슬라이드 자바스크립트 동작
## Swiper 작성 준비
0. `head`태그 안 `title` 아래 Swiper사용을 위한 CDN 연결
    `</title> **CDN연결파일들** reset, scc, 개별js 등 연결마무리`
    <!--swiper 필수 css cdn 연결-->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <!--swiper 필수 JS cdn 연결-->
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
1. `html` 파일내에서 슬라이드삽입위치에 다음과 같이 태그작성
    `div.swiper>div.swiper-wrapper>div.swiper-slide`
    `div.swiper` : swiper플러그인 시작 위치(js 연결지점)
    `div.swiper-wrapper` : 슬라이드들 부모역할(flex 내장)
    `div.swiper-slide` : 개별슬라이드들 `*숫자` 개수생성
2. 1번에서 생성한 태그에 대상구분용의 별도 클래스 따로 생성
    `div.swiper.개별글래스명`
    -> `<div class="swiper 개별클래스명">`
    `div.swiper-slide.slide번호`
    -> `<div class="swiper-slide slidel">`
3. 프로젝트 디자인에 따라 필요한 추가 태그들을 작성
    `div.swiper-slide`안에 `a, h, p, table, form, div 등...`
4. CSS 선택자 준비(개별, 공통용 모두)
    * **주의사항**
    * `swiper-wrapper, swiper-slide`
        `display, width, height, position` 적용하지 않기
    * `swiper` 제일 바깥쪽 swiper시작태그한테만 크기 적용
    * `swiper-slide` 안 3번 목적으로 만든 태그들은 속성 자유
5. JS DOM 변수 준비 -> swiper 연결
    * `const 변수명 = Idocument.querySelector(대상);`
    * `const 변수명 = new Swiper(스와이프적용변수명, {옵션:값, 옵션:값,});`
## Swiper {option:value,} 종류와 뜻
1. 기본 옵션
    **옵션	                       설명	                    예시**
        `direction`	           슬라이드 방향	  `'horizontal'`, `'vertical'`
        `loop`	               무한 반복 여부	            `true`
        `speed`	            슬라이드 전환 속도(ms)	         `500`
        `slidesPerView`    한 화면에 보이는 슬라이드 수	  `1`, `3`, `'auto'`
        `spaceBetween`	    슬라이드 간 간격(px)	         `20`
2. Autoplay (자동 재생)
    **옵션	                               설명**
        `delay`                      자동 재생 간격(ms)
        `disableOnInteraction`	  사용자 조작 후 autoplay 유지 여부
3. Navigation (이전/다음 버튼)
    **옵션	          설명**
        `nextEl`	다음 버튼 선택자
        `prevEl`	이전 버튼 선택자
4. Pagination (페이지 표시)
    **옵션	설명**
        `el`	페이지네이션 요소
        `clickable`	클릭 가능 여부
5. Effect (전환 효과)
    **값	       설명**
        `slide`	기본 슬라이드
        `fade`	페이드 효과
        `cube`	3D 큐브
        `coverflow`	커버플로우
        `flip`	뒤집기 효과
6. Interaction (사용자 인터랙션)
    **옵션	                  설명**
        `grabCursor`	마우스 커서 변경
        `allowTouchMove`	드래그 가능 여부
7. Breakpoints (반응형)
breakpoints: {
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    }
    }
👉 화면 크기에 따라 설정 변경
8. 기타 옵션
    **옵션	                       설명**
        `centeredSlides`	슬라이드 중앙 정렬
        `initialSlide`	시작 슬라이드 index
        `slidesPerGroup`	슬라이드 이동 단위
## Swiper 종류와 뜻 세부상세
### 기본 설정 (제일 많이 씀)
* new Swiper('.swiper', {
    direction: 'horizontal', <!-- 슬라이드 방향 -->
    loop: true,              <!-- // 무한 반복 -->
    speed: 500,              <!-- / 전환 속도(ms) -->
    slidesPerView: 1,        <!-- 한 화면에 보이는 슬라이드 수 -->
    spaceBetween: 20,        <!-- 슬라이드 간격(px) -->
});
* 👉 핵심
    `direction` → 가로 / 세로
    `loop` → 끝까지 가도 계속 이어짐
    `slidesPerView` → 몇 개 보일지
### 자동 재생 (autoplay)
* autoplay: {
    delay: 3000,            <!-- 3초마다 이동 -->
    disableOnInteraction: false  <!-- 터치해도 계속 재생 -->
}
* 👉 배너/메인 슬라이드에서 거의 필수
### 네비게이션 (좌우 버튼)
* navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}
* 👉 ">" "<" 버튼
### 페이지네이션 (동그라미)
* pagination: {
    el: '.swiper-pagination',
    clickable: true, <!-- 클릭 가능 -->
}
* 👉 아래 점(dot) UI
### 드래그 & 터치
* grabCursor: true,     <!-- 마우스 잡는 느낌 -->
* allowTouchMove: true  <!-- 드래그 가능 여부 -->
### 효과 (effect)
* effect: 'slide' <!-- 기본 -->
* effect: 'fade'  <!-- 페이드 -->
* effect: 'cube'  <!-- 3D 큐브 -->
* effect: 'coverflow'
* effect: 'flip'
* 👉 디자인 감성 살릴 때
### 반응형 (breakpoints) ★중요
* breakpoints: {
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    }
}
* 👉 화면 크기별로 다르게 설정
* 👉 실무에서 거의 무조건 씀
### 슬라이드 정렬/중앙
* centeredSlides: true
* 👉 가운데 기준으로 정렬됨
### 멈춤 관련
* autoplay: {
    pauseOnMouseEnter: true <!-- 마우스 올리면 멈춤 -->
}
### 기타 자주 쓰는 것
* initialSlide: 2     <!-- 시작 슬라이드 위치 -->
* slidesPerGroup: 1   <!-- 몇 개씩 이동할지 -->
* loopAdditionalSlides: 1 <!-- loop 보완 -->
## Swiper 선택요소(페이지번호, 이전다음버튼, 스크롤바) 주의사항
* 기본 작성 위치는 `swiper-wrapper`의 다음 형제 위치
    * `swiper`의 첫번째 자식(swiper-wrapper) 두번째자식(선택요소들)
    * **절대 `swiper-slide`와 형제, 자식, 자손위치에 배치하지 않기**
* 기본 순서 -> `html -> js swiper options세팅 -> (선택)css
* **아래 선택요소들 태그는 자식, 자손으로 다른 태그 삽입 금지**
    * `div.swiper-pagination`
    * `div.swiper-button-prev`
    * `div.swiper-button-next`
    * `div.swiper-scrollba`
    * `<div class="swiper-pagination">대응금지</div>`
## Swiper 선택요소(pagination, prev, next, scrollbar) 디자인 규칙&주의사항
### 기존 Swiper-slide 겹치는 디자인을 하고 싶을 때
* 태그 위치 `div.swiper` 두번째자식 위치로 생성
### 기존 Swiper-slide 외부 바깥쪽으로 안겹치는 디자인을 하고 싶을 때
* 태그 위치 `div.swoper` 다음 형제 위치로 생성
* `div.swiper`와 생성된 선택태그를 묶어주는 추가 태그 생성(디자인에 따라 다름)
### 교차 여부에 따라 위치를 다르게 해야하는 이유
* `div.swiper`에 기본 css로 `overflow:hidden` 있으므로 그 값을 `visible`로 바꾸면 선택요소 뿐 아닌 `swiper-slide`들도 모두 보이기 떄문에 원하는 레이아웃을 만들 수 있음.
## Swiper 안에 추가 Swiper 생성 시 안쪽 Swoper 마우스드래그안될때 해결방법
* 안쪽 Swiper js 옵션:값으로 아래와 같이 작성
    * `nestad:true,`
    * 부모 swiper와 겹쳐 있을 때 드래그 충돌방지 옵션:값