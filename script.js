/////////////////////////////////////////////////
const animationCardsLeft = document.querySelectorAll('.animateEl--left');
const animationCardsRight = document.querySelectorAll('.animateEl--right');
const animationCards = [...animationCardsLeft, ...animationCardsRight];
const triggerEl = document.querySelector(".animation__trigger");


const observer = new IntersectionObserver((entries) => {

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
	threshold: 0.3
});

observer.observe(triggerEl);


// ////////////////////////////////////////

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


const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
if(vw > 930){
    window.addEventListener('scroll', ()=> {
        const currentScroll = window.scrollY;
    
        if(currentScroll <= 150){
            button.style.display= "none"
            menu.style.display = "none";
            button.classList.remove('open');
        } else {
            button.style.display= "block"
           
        }
    })
} else {
    button.style.display= "block"  
}