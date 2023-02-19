// Count-up-Clienti

const box = document.getElementById('count-up');

let count = 0;

const countUp = setInterval(() => {
  let boxCount = box.dataset.count;
  if (count == boxCount) clearInterval(countUp);
  box.innerHTML = count + box.dataset.unit;
  count = count + Math.floor(boxCount / 210);
  if (count > boxCount) count = boxCount;
}, 50);

// Count-up-Ani

// const boxAni = document.getElementById('count-up-ani');

// let countAni = 0;

// const countUpAni = setInterval(() => {
//   let boxCountAni = boxAni.dataset.count;
//   if (countAni == boxCountAni) clearInterval(countUpAni);
//   boxAni.innerHTML = countAni + boxAni.dataset.unit;
//   countAni = countAni + Math.floor(boxCountAni / 4);
//   if (countAni > boxCountAni) countAni = boxCountAni;
// }, 100);

// // Count-up-Animale

// const boxAnimale = document.getElementById('count-up-animale');

// let countAnimale = 0;

// const countUpAnimale = setInterval(() => {
//   let boxCountAnimale = boxAnimale.dataset.count;
//   if (countAnimale == boxCountAnimale) clearInterval(countUpAnimale);
//   boxAnimale.innerHTML = countAnimale + boxAnimale.dataset.unit;
//   countAnimale = countAnimale + Math.floor(boxCountAnimale / 210);
//   if (countAnimale > boxCountAnimale) countAnimale = boxCountAnimale;
// }, 40);

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

  pasariBtn.classList.remove('active');
  pasariBtn.classList.remove('activeAnimation');
  pasariBtn.classList.add('innAnimation');
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

  pasariBtn.classList.remove('active');
  pasariBtn.classList.add('innAnimation');
  pasariBtn.classList.remove('activeAnimation');
});

deratizareBtn.addEventListener('click', function () {
  deratizare.classList.remove('productsNone');
  caini.classList.add('productsNone');
  pisici.classList.add('productsNone');
  pasari.classList.add('productsNone');

  pisiciBtn.classList.remove('active');
  pisiciBtn.classList.add('innAnimation');
  pisiciBtn.classList.remove('activeAnimation');
  cainiBtn.classList.remove('active');
  cainiBtn.classList.add('innAnimation');
  cainiBtn.classList.remove('activeAnimation');
  deratizareBtn.classList.add('active');
  deratizareBtn.classList.add('activeAnimation');
  deratizareBtn.classList.remove('innAnimation');
  deratizareBox.classList.add('animate__animated', 'animate__zoomIn');
  pasariBtn.classList.remove('active');
  pasariBtn.classList.add('innAnimation');
  pasariBtn.classList.remove('activeAnimation');
});

pasariBtn.addEventListener('click', function () {
  pasari.classList.remove('productsNone');
  caini.classList.add('productsNone');
  pisici.classList.add('productsNone');
  deratizare.classList.add('productsNone');

  pisiciBtn.classList.remove('active');
  pisiciBtn.classList.add('innAnimation');
  pisiciBtn.classList.remove('activeAnimation');

  cainiBtn.classList.remove('active');
  cainiBtn.classList.add('innAnimation');
  cainiBtn.classList.remove('activeAnimation');

  pasariBtn.classList.add('active');
  pasariBtn.classList.remove('innAnimation');
  pasariBtn.classList.add('activeAnimation');
  pasariBox.classList.add('animate__animated', 'animate__zoomIn');

  deratizareBtn.classList.remove('active');
  deratizareBtn.classList.add('innAnimation');
  deratizareBtn.classList.remove('activeAnimation');
});

//  slide produse
let slideIndex = 1;
let slide2Index = 1;
let numSlides = document.getElementsByClassName('slide').length;
let numSlides2 = document.getElementsByClassName('slide2').length;
let translateValue = (numSlides - 1) * -100;
let translateValue2 = (numSlides2 - 1) * -100;
showSlides(slideIndex);
showSlides2(slide2Index);

// Next/previous controls
function changeSlide(n) {
  showSlides((slideIndex += n));
}
function changeSlide2(n) {
  showSlides2((slide2Index += n));
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

var vw1 = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

if (vw1 > 733) {
  const cainiCard = document.querySelectorAll('#cainicard');
  let slidesNone = document.querySelectorAll('.slide');

  cainiCard.forEach(el => {
    el.classList.remove('slide');
    // el.classList.add('animate__animated', 'animate__fadeIn');
  });

  for (i = 0; i < slidesNone.length; i++) {
    slidesNone[i].style.display = '';
  }
}
