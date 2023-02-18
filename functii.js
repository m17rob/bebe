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

pisiciBtn.addEventListener('click', function () {
  caini.classList.add('productsNone');
  pisici.classList.remove('productsNone');
  deratizare.classList.add('productsNone');
  pasari.classList.add('productsNone');
  cainiBtn.classList.remove('active');
  pisiciBtn.classList.add('active');
  deratizareBtn.classList.remove('active');
  pasariBtn.classList.remove('active');
});

cainiBtn.addEventListener('click', function () {
  pisici.classList.add('productsNone');
  caini.classList.remove('productsNone');
  deratizare.classList.add('productsNone');
  pasari.classList.add('productsNone');
  pisiciBtn.classList.remove('active');
  cainiBtn.classList.add('active');
  deratizareBtn.classList.remove('active');
  pasariBtn.classList.remove('active');
});

deratizareBtn.addEventListener('click', function () {
  deratizare.classList.remove('productsNone');
  caini.classList.add('productsNone');
  pisici.classList.add('productsNone');
  pasari.classList.add('productsNone');
  pisiciBtn.classList.remove('active');
  cainiBtn.classList.remove('active');
  deratizareBtn.classList.add('active');
  pasariBtn.classList.remove('active');
});

pasariBtn.addEventListener('click', function () {
  pasari.classList.remove('productsNone');
  caini.classList.add('productsNone');
  pisici.classList.add('productsNone');
  deratizare.classList.add('productsNone');
  pisiciBtn.classList.remove('active');
  cainiBtn.classList.remove('active');
  pasariBtn.classList.add('active');
  deratizareBtn.classList.remove('active');
});
