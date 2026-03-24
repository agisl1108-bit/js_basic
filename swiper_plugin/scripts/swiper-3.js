const ssf = document.querySelector('.ssf_hero');
console.log(ssf);

const ssfSwiper = new Swiper(ssf,{
    slidesPerView:3, // 한번에 보이는 슬라이드 개수
    spaceBetween:0,
    // pagination:{el:'',},
    navigation:{
        nextEl:'.ssf_hero .next',
        prevEl:'.ssf_hero .prev',
    }
})

const brand = document.querySelector('.ssf_brand');
console.log(brand);

const brandSwiper = new Swiper(brand,{
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
    },
})