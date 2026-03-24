const heroBnr = document.querySelector('.hero_bnr');
const barBg = document.querySelector('.bar_bg');
const bestBnr = document.querySelector('.best_swiper');
const newBnr = document.querySelector('.new_swiper');
console.log(heroBnr,barBg,bestBnr,newBnr);

const heroSwiper = new Swiper(heroBnr,{
    autoplay:{delay:3000,},
    loop:true,
    //슬라이드 변경 실행 함수
    on:{
        //처음 시작할 때 실행 함수
        init:function(){
            //부모요소에 active 클래스 적용하는 법
            barBg.classList.add('active');
        }, // 스와이프 안이라 콤마써야함.
        slideChangeTransitionStart:function(){
            barBg.classList.remove('active');
        }, //슬라이드 전환 시 시작함수
        slideChangeTransitionEnd:function(){
            barBg.classList.add('active');
        }, // 슬라이드 전환 종료 후 시작함수
    },
    //페이지번호 사용자 함수
    pagination:{
        el:'.hero_bnr .pg',
        type:'fraction',
        // swiper-pagination-current
        // swiper-pagination-total
        //위 고유 클래스명 활용 custom javascript - renderFraction
        //swiper 고유옵션 : function(매개변수){return}
        renderFraction:function(current,total){
            console.log(current,total)
            let customPg =`<span class=${current}></span>`;
            /*customPg = `<span>//</span>`; */
            customPg +=`<span class=${total}></span>`;
            return customPg;
        }
    },
});

const bestSwiper = new Swiper(bestBnr,{
    // 한 화면 기준 보이는 슬라이드 개수 (총 슬라이드 개수보단 반드시 작아야함.)
    slidesPerView:3.5, // 뷰포트에 보이는 갯수 설정
    spaceBetween:20, // 이미지 사이 여백 
    slidesPerGroup:2,// 슬라이드 한번에 전환되는 개수 설정
/*     centerSlides:true, 슬라이드 가운데 정렬 양 사이드에 이미지 살짝 보임 */
    loop:true,
    speed:800,
    autoplay:{delay:3000,},
});

const newSwiper = new Swiper(newBnr,{
    slidesPerView:7,
    spaceBetween:20,
    centeredSlides:true,
});