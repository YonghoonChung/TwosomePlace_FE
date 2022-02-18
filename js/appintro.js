import '../swiper/js/swiper.esm.js';
import "../swiper/js/swiper.js"

const swipercontainer = document.getElementsByClassName("swiper-container");

var swiper = new Swiper(swipercontainer, {speed:500, pagination: {el: 'pagination', type:'bullets',clickable:'true',}, on: {slideChange: function(){console.log("슬라이드가 변경되었습니다.");}}});