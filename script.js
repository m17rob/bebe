/////////////////////////////////////////////////
// const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('nav__links');
// const activeHandler = (currentSectionId) => {
//     navLinks.forEach(link => {
//         console.log(link);
//        if(link.dataset.section === currentSectionId){
//         link.classList.add('active');
//        }
//     })
// }

// const sectionWatcherCallback = (section, sectionWatcher)=>{
//     section.forEach(section => {
//         if(!section.isIntersecting){return};
//     })
// }

// const sectionWatcherOptions = {
//     threshold: .6
// }

// const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions)

// sections.forEach(section => {
//     sectionWatcher.observe(section);
// })

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