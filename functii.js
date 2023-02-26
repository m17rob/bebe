// Count-up-Clienti

const box = document.getElementById('count-up');

let count = 0;

const countUp = setInterval(() => {
  let boxCount = box.dataset.count;
  if (count == boxCount) clearInterval(countUp);
  box.innerHTML = count + box.dataset.unit;
  count = count + Math.floor(boxCount / 110);
  if (count > boxCount) count = boxCount;
}, 50);

// Count-up-Ani

const boxAni = document.getElementById('count-up-ani');

let countAni = 0;

const countUpAni = setInterval(() => {
  let boxCountAni = boxAni.dataset.count;
  if (countAni == boxCountAni) clearInterval(countUpAni);
  boxAni.innerHTML = countAni + boxAni.dataset.unit;
  countAni = countAni + Math.floor(boxCountAni / 4);
  if (countAni > boxCountAni) countAni = boxCountAni;
}, 500);

// // Count-up-Animale

const boxAnimale = document.getElementById('count-up-animale');

let countAnimale = 0;

const countUpAnimale = setInterval(() => {
  let boxCountAnimale = boxAnimale.dataset.count;
  if (countAnimale == boxCountAnimale) clearInterval(countUpAnimale);
  boxAnimale.innerHTML = countAnimale + boxAnimale.dataset.unit;
  countAnimale = countAnimale + Math.floor(boxCountAnimale / 110);
  if (countAnimale > boxCountAnimale) countAnimale = boxCountAnimale;
}, 20);

// produse

const pisiciBtn = document.querySelector('#pisicibtn');
const cainiBtn = document.querySelector('#cainibtn');
const deratizareBtn = document.querySelector('#deratizarebtn');
const pasariBtn = document.querySelector('#pasaribtn');

const cainiBox = document.querySelector('#caini');
const pisiciBox = document.querySelector('#pisici');
const deratizareBox = document.querySelector('#deratizare');
const pasariBox = document.querySelector('#pasari');

const cainiPrev = document.querySelector('.prev');
const cainiNext = document.querySelector('.next');

const pisiciPrev = document.querySelector('.prev2');
const pisiciNext = document.querySelector('.next2');

const deratizarePrev = document.querySelector('.prev3');
const deratizareNext = document.querySelector('.next3');

const pasariPrev = document.querySelector('.prev4');
const pasariNext = document.querySelector('.next4');

pisiciBtn.addEventListener('click', function () {
  caini.classList.add('productsNone');
  pisici.classList.remove('productsNone');
  deratizare.classList.add('productsNone');
  pasari.classList.add('productsNone');

  cainiBtn.classList.remove('active');
  cainiBtn.classList.remove('activeAnimation');
  cainiBtn.classList.add('innAnimation');
  pisiciBox.classList.add('animate__animated', 'animate__zoomIn');
  cainiPrev.classList.add('productsNone');
  cainiNext.classList.add('productsNone');

  pisiciBtn.classList.add('active');
  pisiciBtn.classList.remove('innAnimation');
  pisiciBtn.classList.add('activeAnimation');
  pisiciPrev.classList.remove('productsNone');
  pisiciNext.classList.remove('productsNone');

  deratizareBtn.classList.remove('active');
  deratizareBtn.classList.remove('activeAnimation');
  deratizareBtn.classList.add('innAnimation');
  deratizarePrev.classList.add('productsNone');
  deratizareNext.classList.add('productsNone');

  pasariBtn.classList.remove('active');
  pasariBtn.classList.remove('activeAnimation');
  pasariBtn.classList.add('innAnimation');
  pasariPrev.classList.add('productsNone');
  pasariNext.classList.add('productsNone');
});

cainiBtn.addEventListener('click', function () {
  pisici.classList.add('productsNone');
  caini.classList.remove('productsNone');
  deratizare.classList.add('productsNone');
  pasari.classList.add('productsNone');

  pisiciBtn.classList.remove('active');
  pisiciBtn.classList.remove('activeAnimation');
  pisiciBtn.classList.add('innAnimation');
  pisiciPrev.classList.add('productsNone');
  pisiciNext.classList.add('productsNone');

  cainiBtn.classList.add('active');
  cainiBtn.classList.remove('innAnimation');
  cainiBtn.classList.add('activeAnimation');
  cainiBox.classList.add('animate__animated', 'animate__zoomIn');
  cainiPrev.classList.remove('productsNone');
  cainiNext.classList.remove('productsNone');

  deratizareBtn.classList.remove('active');
  deratizareBtn.classList.add('innAnimation');
  deratizareBtn.classList.remove('activeAnimation');
  deratizarePrev.classList.add('productsNone');
  deratizareNext.classList.add('productsNone');

  pasariBtn.classList.remove('active');
  pasariBtn.classList.add('innAnimation');
  pasariBtn.classList.remove('activeAnimation');
  pasariPrev.classList.add('productsNone');
  pasariNext.classList.add('productsNone');
});

deratizareBtn.addEventListener('click', function () {
  deratizare.classList.remove('productsNone');
  caini.classList.add('productsNone');
  pisici.classList.add('productsNone');
  pasari.classList.add('productsNone');

  pisiciBtn.classList.remove('active');
  pisiciBtn.classList.add('innAnimation');
  pisiciBtn.classList.remove('activeAnimation');
  pisiciPrev.classList.add('productsNone');
  pisiciNext.classList.add('productsNone');

  cainiBtn.classList.remove('active');
  cainiBtn.classList.add('innAnimation');
  cainiBtn.classList.remove('activeAnimation');
  cainiPrev.classList.add('productsNone');
  cainiNext.classList.add('productsNone');

  deratizareBtn.classList.add('active');
  deratizareBtn.classList.add('activeAnimation');
  deratizareBtn.classList.remove('innAnimation');
  deratizareBox.classList.add('animate__animated', 'animate__zoomIn');
  deratizarePrev.classList.remove('productsNone');
  deratizareNext.classList.remove('productsNone');

  pasariBtn.classList.remove('active');
  pasariBtn.classList.add('innAnimation');
  pasariBtn.classList.remove('activeAnimation');
  pasariPrev.classList.add('productsNone');
  pasariNext.classList.add('productsNone');
});

pasariBtn.addEventListener('click', function () {
  pasari.classList.remove('productsNone');
  caini.classList.add('productsNone');
  pisici.classList.add('productsNone');
  deratizare.classList.add('productsNone');

  pisiciBtn.classList.remove('active');
  pisiciBtn.classList.add('innAnimation');
  pisiciBtn.classList.remove('activeAnimation');
  pisiciPrev.classList.add('productsNone');
  pisiciNext.classList.add('productsNone');

  cainiBtn.classList.remove('active');
  cainiBtn.classList.add('innAnimation');
  cainiBtn.classList.remove('activeAnimation');
  cainiPrev.classList.add('productsNone');
  cainiNext.classList.add('productsNone');

  pasariBtn.classList.add('active');
  pasariBtn.classList.remove('innAnimation');
  pasariBtn.classList.add('activeAnimation');
  pasariBox.classList.add('animate__animated', 'animate__zoomIn');
  pasariPrev.classList.remove('productsNone');
  pasariNext.classList.remove('productsNone');

  deratizareBtn.classList.remove('active');
  deratizareBtn.classList.add('innAnimation');
  deratizareBtn.classList.remove('activeAnimation');
  deratizarePrev.classList.add('productsNone');
  deratizareNext.classList.add('productsNone');
});

//  slide produse
let slideIndex = 1;
let slide2Index = 1;
let slide3Index = 1;
let slide4Index = 1;
let numSlides = document.getElementsByClassName('slide').length;
let numSlides2 = document.getElementsByClassName('slide2').length;
let numSlides3 = document.getElementsByClassName('slide3').length;
let numSlides4 = document.getElementsByClassName('slide3').length;
let translateValue = (numSlides - 1) * -100;
let translateValue2 = (numSlides2 - 1) * -100;
let translateValue3 = (numSlides3 - 1) * -100;
let translateValue4 = (numSlides3 - 1) * -100;
showSlides(slideIndex);
showSlides2(slide2Index);
showSlides3(slide3Index);
showSlides4(slide4Index);

// Next/previous controls
function changeSlide(n) {
  showSlides((slideIndex += n));
}
function changeSlide2(n) {
  showSlides2((slide2Index += n));
}
function changeSlide3(n) {
  showSlides3((slide3Index += n));
}
function changeSlide4(n) {
  showSlides4((slide4Index += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  translateValue = (slideIndex - 1) * -100;

  slides[slideIndex - 1].style.display = 'grid';
  slides[slideIndex - 1].classList.add('animate__animated', 'animate__fadeIn');
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName('slide2');
  if (n > slides2.length) {
    slide2Index = 1;
  }
  if (n < 1) {
    slide2Index = slides2.length;
  }

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = 'none';
  }

  translateValue = (slide2Index - 1) * -100;

  slides2[slide2Index - 1].style.display = 'grid';
  slides2[slide2Index - 1].classList.add(
    'animate__animated',
    'animate__fadeIn'
  );
}

function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName('slide3');
  if (n > slides3.length) {
    slide3Index = 1;
  }
  if (n < 1) {
    slide3Index = slides3.length;
  }

  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = 'none';
  }

  translateValue = (slide3Index - 1) * -100;

  slides3[slide3Index - 1].style.display = 'grid';
  slides3[slide3Index - 1].classList.add(
    'animate__animated',
    'animate__fadeIn'
  );
}

function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName('slide4');
  if (n > slides4.length) {
    slide4Index = 1;
  }
  if (n < 1) {
    slide4Index = slides4.length;
  }

  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = 'none';
  }

  translateValue = (slide4Index - 1) * -100;

  slides4[slide4Index - 1].style.display = 'grid';
  slides4[slide4Index - 1].classList.add(
    'animate__animated',
    'animate__fadeIn'
  );
}

var vw1 = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

if (vw1 > 733) {
  const cainiCard = document.querySelectorAll('#cainicard');
  const pisiciCard = document.querySelectorAll('#pisicicard');
  const deratizareCard = document.querySelectorAll('#deratizarecard');
  const pasariCard = document.querySelectorAll('#pasaricard');
  let slidesNone = document.querySelectorAll('.slide');
  let slidesNone2 = document.querySelectorAll('.slide2');
  let slidesNone3 = document.querySelectorAll('.slide3');
  let slidesNone4 = document.querySelectorAll('.slide4');

  cainiCard.forEach(el => {
    el.classList.remove('slide');
    // el.classList.add('animate__animated', 'animate__fadeIn');
  });
  pisiciCard.forEach(el => {
    el.classList.remove('slide2');
    // el.classList.add('animate__animated', 'animate__fadeIn');
  });
  deratizareCard.forEach(el => {
    el.classList.remove('slide3');
    // el.classList.add('animate__animated', 'animate__fadeIn');
  });
  pasariCard.forEach(el => {
    el.classList.remove('slide4');
    // el.classList.add('animate__animated', 'animate__fadeIn');
  });

  for (i = 0; i < slidesNone.length; i++) {
    slidesNone[i].style.display = '';
  }
  for (i = 0; i < slidesNone2.length; i++) {
    slidesNone2[i].style.display = '';
  }

  for (i = 0; i < slidesNone3.length; i++) {
    slidesNone3[i].style.display = '';
  }
  for (i = 0; i < slidesNone4.length; i++) {
    slidesNone4[i].style.display = '';
  }
}

var vwMap = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

if (vw1 < 781) {
  const pinMap = document.querySelectorAll('#bglocale');

  pinMap.forEach(el => {
    el.innerHTML =
      '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1419.854765274795!2d23.189407568478902!3d44.623413454855815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1677363910997!5m2!1sro!2sro" width="430" height="350" style="border:0; border-radius: 20px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  });
}

if (vw1 < 501) {
  const pinMap = document.querySelectorAll('#bglocale');

  pinMap.forEach(el => {
    el.innerHTML =
      '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1419.854765274795!2d23.189407568478902!3d44.623413454855815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1677363910997!5m2!1sro!2sro" width="340" height="250" style="border:0; border-radius: 20px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  });
}

if (vw1 < 401) {
  const pinMap = document.querySelectorAll('#bglocale');

  pinMap.forEach(el => {
    el.innerHTML =
      '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1419.854765274795!2d23.189407568478902!3d44.623413454855815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1677363910997!5m2!1sro!2sro" width="290" height="260" style="border:0; border-radius: 20px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  });
}

/* begin begin Back to Top button  */
(function () {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back-to-top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back-to-top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -1500);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
// /* end begin Back to Top button  */

const bubbleBtn = document.querySelector('#bubble');
const playVideo = document.querySelector('#play-video');

playVideo.addEventListener('click', function () {
  bubbleBtn.classList.add('animate__animated', 'animate__bounceIn');
  bubbleBtn.style.display ="block"
  setTimeout(function(){
    if(bubbleBtn.classList.contains('animate__animated')) {
      bubbleBtn.classList.add('animate__animated', 'animate__fadeOut');
      bubbleBtn.classList.remove('animate__animated', 'animate__fadeOut', 'animate__bounceIn');
      bubbleBtn.style.display ="none"

    } else {
      return;
    }
  }, 5000);
});
