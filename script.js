/////////////////////////////////////////////////
const animationCardsLeft = document.querySelectorAll('.animateEl--left');
const animationCardsRight = document.querySelectorAll('.animateEl--right');
const animationCards = [...animationCardsLeft, ...animationCardsRight];
const triggerElService = document.querySelector(".animation__trigger");


const observerService = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
		if (entry.isIntersecting) {
			animationCardsLeft.forEach(el => {
                el.classList.add('animate__bounceInLeft')
            });
            animationCardsRight.forEach(el => {
                el.classList.add('animate__bounceInRight')
            });	
            animationCards.forEach(card => {
                card.classList.remove('hide')
            })	
        } else {
            return;
        }
	})
}, {
	threshold: .1
});

observerService.observe(triggerElService);

const steto = document.querySelector('.animation-inital__steto');
const hug = document.querySelector('.animation-inital__hug');
const heart = document.querySelector('.animation-inital__heart');
const medal = document.querySelector('.animation-inital__medal');
const triggerElTeam = document.querySelector('.center');


const observerTeam = new IntersectionObserver((entries) => {
console.log(entries);
    entries.forEach((entry) => {
		if (entry.isIntersecting) {
                steto.style.transform = "none";
                hug.style.transform = "none";
                heart.style.transform = "none";
                medal.style.transform = "none";
        } else {
            return;
        }
	})
}, {
	threshold: .7
});

observerTeam.observe(triggerElTeam);
/////////////////////////////////////////////////////  

const menu = document.querySelector("#menu");
const button = document.querySelector('#nav-icon');
const menuLinks = document.querySelectorAll(".menu__container--link")


button.addEventListener('click', function(){
    this.classList.toggle('open');
    if(this.classList.contains('open')){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

menuLinks.forEach(link => {
    link.addEventListener("click", function(){
        menu.style.display = "none";
        button.classList.toggle('open');

    })
})

// /////////////////TRIGGER MENU SCROLL//////////////////


// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
// if(vw > 930){
//     window.addEventListener('scroll', ()=> {
//         const currentScroll = window.scrollY;
    
//         if(currentScroll <= 150){
//             button.style.display= "none"
//             menu.style.display = "none";
//             button.classList.remove('open');
//         } else {
//             button.style.display= "block"
           
//         }
//     })
// } else {
//     button.style.display= "block"  
// }