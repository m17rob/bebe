// Count-up-Clienti

const box = document.getElementById('count-up');

let count = 0;

const countUp = setInterval(() => {
  let boxCount = box.dataset.count;
  if (count == boxCount) clearInterval(countUp);
  box.innerHTML = count + box.dataset.unit;
  count = count + Math.floor(boxCount / 23);
  if (count > boxCount) count = boxCount;
}, 150);

// Count-up-Ani

const boxAni = document.getElementById('count-up-ani');

let countAni = 0;

const countUpAni = setInterval(() => {
  let boxCountAni = boxAni.dataset.count;
  if (countAni == boxCountAni) clearInterval(countUpAni);
  boxAni.innerHTML = countAni + boxAni.dataset.unit;
  countAni = countAni + Math.floor(boxCountAni / 4);
  if (countAni > boxCountAni) countAni = boxCountAni;
}, 100);

// Count-up-Animale

const boxAnimale = document.getElementById('count-up-animale');

let countAnimale = 0;

const countUpAnimale = setInterval(() => {
  let boxCountAnimale = boxAnimale.dataset.count;
  if (countAnimale == boxCountAnimale) clearInterval(countUpAnimale);
  boxAnimale.innerHTML = countAnimale + boxAnimale.dataset.unit;
  countAnimale = countAnimale + Math.floor(boxCountAnimale / 210);
  if (countAnimale > boxCountAnimale) countAnimale = boxCountAnimale;
}, 40);

// produse

const cainiBtn = document.querySelector('#cainibtn');
cainiBtn.addEventListener('click', function () {
alert('click')  
});
