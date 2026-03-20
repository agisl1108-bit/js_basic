// swiper_1.js
const wrap = document.querySelector('#wrap');
const wrapSwiper = new Swiper(wrap,{
    // 옵션:값, 옵션:{옵션:값,},
    mousewheel:true,
    speed:1000,
    direction:'horizontal',
});
console.log(wrap);

const web = document.querySelector('.web');
const webSwiper = new Swiper(web,{
    // effect:'fade',
    autoplay:{delay:2000,},
    loop:true,
    pagination:{
        /* 페이지대상HTML연결, 모양, 동적옵션 */
        el:'.web + .web_page', // 부모선택자 1~2개는 작성해서 구분해주기
        type:'fraction', // bullets(기본값), fraction
        // dynamicBullers:true, // type이 bullets(기본값)일때만 가능
    },
});
const web1 = document.querySelector('.web1');
const web1Swiper = new Swiper(web1,{
    autoplay:{delay:2000,},
    loop:true,
    pagination:{
        el:'.project2 .group .page',
        clickable:'true',
    }
})