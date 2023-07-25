const navbar = document.querySelector(".navbar");
const enterToResume = document.querySelector("#enterToResume");
const containerTemplete = document.querySelector(".container-templete");
const homePage = document.querySelector(".home-page");
const mylogo = document.querySelector(".mylogo");
// const shapes = document.querySelectorAll(".shape");
const cursor = document.querySelector("#cursor");
const cursor2 = document.querySelector("#cursor-2");

enterToResume.addEventListener('click', () => {
    containerTemplete.classList.remove("d-none");
    homePage.classList.add("move-up");
    navbar.classList.add("z-index-200");
    // homePage.classList.add("d-none");
});

mylogo.addEventListener('click', () => {
    containerTemplete.classList.add("d-none");
    homePage.classList.remove("move-up");
    navbar.classList.remove("z-index-200");
});

// Store initial positions
// const initialPositions = [...shapes].map(shape => {
//     const { top, left } = shape.getBoundingClientRect();
//     return { top, left };
// });

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY) + 'px;left:' + (e.pageX) + 'px;');
    cursor2.setAttribute('style', 'top:' + (e.pageY) + 'px;left:' + (e.pageX) + 'px;');
    // shapes.forEach((shape, index) => {
    //     const { top, left } = initialPositions[index];
    //     const topoff = (e.clientY - top) / 50; // Adjust the divisor to control the movement sensitivity.
    //     const leftoff = (e.clientX - left) / 50; // Adjust the divisor to control the movement sensitivity.
    //     shape.style.top = `${top + topoff}px`;
    //     shape.style.left = `${left + leftoff}px`;
    // });
});

const bannerText = document.querySelector('.banner-text');
setTimeout(() => {
    bannerText.classList.remove('flicker-animation-3s');
}, 4000);

function restartFlickerAnimation() {
    bannerText.classList.remove('flicker-animation');
    setTimeout(() => {
        bannerText.classList.add('flicker-animation');
    }, 150);
}

document.addEventListener('click', () => {
    cursor.classList.remove('shape-50');
    cursor2.classList.remove('shape-25');

    cursor.classList.add('shape-25');
    cursor2.classList.add('shape-0');
    setTimeout(() => {
        cursor.classList.remove('shape-25');
        cursor2.classList.remove('shape-0');

        cursor.classList.add('shape-50');
        cursor2.classList.add('shape-25');
    }, 150);
    restartFlickerAnimation();
});

// name animation
const matrixText = document.querySelector('.myname');
let text = '';
const targetText = "ANKIT";
let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


let iter = 1, skips = 15, from = 0;
const intervalId = setInterval((e) => {
    let temptext;
    text = '';
    if (iter >= targetText.length * skips) {
        clearInterval(intervalId);
    }
    if (iter % skips == 0) {
        from++;
    }
    for (k = 0; k < from; k++) {
        text += targetText[k];
    }
    for (i = from; i < targetText.length; i++) {
        let randomIndex = Math.floor(Math.random() * 26);
        temptext = alphabets[randomIndex];
        text += temptext;
    }
    matrixText.innerHTML = text;
    iter++;
}, 30);