const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur',function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function (){
    console.log('scroll!!')
    if (window.scrollY > 500) {
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        //버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    })
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index+1)*0.7,
        opacity: 1
    });
});


new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,        
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});




const promotionEl = document.querySelector('.promotion');
const promtionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promtionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        //숨김처리!
        promotionEl.classList.add('hide');
    } else {
        //숨김처리 해제!
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
    //gsap.to(요소, 시간, 옵션)
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), //에니메이션 동작 시간
        { //옵션
            y: 20,
            repeat: -1,  //무한반복:-1
            yoyo: true,
            ease: "power1.inOut",
            delay: random(0, delay)
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,  //보여질 여부를 감시할 요소를 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //현재 날짜