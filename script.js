const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav__links');

/////////////////////////////////////////////////
// const activeHandler = (currentSectionId) => {
//     navLinks.forEach(link => {
//         console.log(link);
//        if(link.dataset.section === currentSectionId){
//         link.classList.add('active');
//        }
//     })
// }

const sectionWatcherCallback = (section, sectionWatcher)=>{
    section.forEach(section => {
        if(!section.isIntersecting){return};
    })
}

const sectionWatcherOptions = {
    threshold: .6
}

const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions)

sections.forEach(section => {
    sectionWatcher.observe(section);
})

// ////////////////////////////////////////
// HAMBURGER
