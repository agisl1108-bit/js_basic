// index.js
const heroBnr = document.querySelector('.viewport');
console.log(heroBnr);
const heroSlide = new Swiper (heroBnr,{
    // 옵션:값,
    // 옵션:{옵션:값, 옵션:값,},
    loop:true, /* 슬라이드 끝 -> 시작 반복 true , false */
    direction:'horizontal', /* 슬라이드 방향 : 수평(기본값 horizontal) 수직(vertical) */
    // 제자리 나타나기/사라지기 할 때는 direction 적용해제
    // mousewheel:true, //마우스 휠 기능 옵션
    /* effect:'fade', */ // ★포폴 히어로배너(fade) 디자인 중요! 
    // 종류 : fade , cube , flip
    autoplay:{
        delay:3000, // 1000 = 1초
        /* pauseOnMouseEnter:true,  */// 마우스가 올라오면 일시정지
        /* disableOnInteraction:true, */ // 마우스 상호작용 후에 멈출건지 , 움직일건지(false) 결정 옵션
    },
    // 자동재생

});