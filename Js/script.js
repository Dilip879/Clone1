var menu_bar = document.querySelector(".nav_bar");
var bars = document.querySelector(".fa-bars");
var xmark = document.querySelector(".fa-xmark");

function showmenu(){
    menu_bar.style.right = "0";
    bars.style.display = "none";
    xmark.style.display = "block";
}

function hidemenu(){
    menu_bar.style.right = "-250%";
    bars.style.display = "block";
    xmark.style.display = "";
}

// --------------image slider javascript --------

const slider = document.querySelector(".sliders");
const slides = document.querySelectorAll(".slide");
const left_btn = document.querySelector(".left");
const right_btn = document.querySelector(".right");

let slide_index = 0;
slides[slide_index].classList.add('active');

left_btn.addEventListener('click', Pre_slide);
right_btn.addEventListener('click', next_slide);

function next_slide() {
    slides[slide_index].classList.remove('active');

    slide_index = (slide_index === slides.length - 1) ? 0 : slide_index + 1;

    slides[slide_index].classList.add('active');
    slider.style.transform = `translateX(-${slide_index * 100}%)`;
}

function Pre_slide() {
    slides[slide_index].classList.remove('active');
    slide_index = (slide_index === 0) ? slides.length - 1 : slide_index - 1;

    slides[slide_index].classList.add('active');
    slider.style.transform = `translateX(-${slide_index * 100}%)`;
}