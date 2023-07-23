// const navbar = document.querySelector(".navbar");
// const btnBurger = document.querySelector(".btn-burger");
// const btnBurgerIcon = document.querySelector("#burgerbtnicon");

// btnBurger.addEventListener("click", e => {
//     navbar.classList.toggle("collapse");
//     setTimeout(() => {
//         if (navbar.classList.contains("collapse")) {
//             btnBurgerIcon.classList.add("bi-chevron-double-right");
//             btnBurgerIcon.classList.remove("bi-chevron-double-left");
//         } else {
//             btnBurgerIcon.classList.remove("bi-chevron-double-right");
//             btnBurgerIcon.classList.add("bi-chevron-double-left");
//         }
//     }, 250);
// });
const enterToResume = document.querySelector("#enterToResume");
const containerTemplete = document.querySelector(".container-templete");
const homePage = document.querySelector(".home-page");
const mylogo = document.querySelector(".mylogo");

enterToResume.addEventListener('click', () => {
    containerTemplete.classList.remove("d-none");
    homePage.classList.add("move-up");
    // homePage.classList.add("d-none");
});

mylogo.addEventListener('click', () => {
    containerTemplete.classList.add("d-none");
    homePage.classList.remove("move-up");
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