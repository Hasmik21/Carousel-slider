const slider = document.querySelector('.slider');
const carousel = document.querySelector('.slider .carousel');
let x = 0;


slider.onmousewheel = (event) => {
    let l = event.deltaY;
        x += l / 10;
        carousel.style.transform = `rotateY(${x}deg)`;
};







































