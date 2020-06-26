
const slideOptions = {
    threshold: 0.5
    // rootMargin: '100px'
}
const slideObserver = new IntersectionObserver(handleSlide, slideOptions);

function handleSlide(entries, slideObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.toggle('slide-in');
            slideObserver.unobserve(entry.target);
        }
    });
}

let fromLeft  = document.querySelectorAll('.from-left');
let fromRight = document.querySelectorAll('.from-right');
fromLeft.forEach(e => slideObserver.observe(e));
fromRight.forEach(e => slideObserver.observe(e));


const fadeOptions = {
    threshold: .75
}

const fadeObserver = new IntersectionObserver(handleFade, fadeOptions);



function handleFade(entries, fadeObserver) {
    entries.forEach(entry => {
        console.log(entry.target + " " + entry.isIntersecting);
        if(entry.isIntersecting) {
            entry.target.classList.toggle('fade-in');
            fadeObserver.unobserve(entry.target);
        }
    });
}

let fadeElements = document.querySelectorAll('.fade-out');
fadeElements.forEach(e => {
    fadeObserver.observe(e);
});