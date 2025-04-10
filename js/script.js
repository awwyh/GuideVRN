const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
});




const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');
    
    $next.addEventListener(
        'click',
        () => {
            const items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        },
    )
    $prev.addEventListener(
        'click',
        () => {
            const items = document.querySelectorAll('.item');
            document.querySelector('.slide').prepend(items[items.length-1]);
        },
    )




    const slidesSmall = document.querySelector('.slides-small');
const slideSmall = document.querySelectorAll('.slide-small');
const prevSmall = document.querySelector('.prev-small');
const nextSmall = document.querySelector('.next-small');

let indexSmall = 0;

function showSlideSmall(i) {
    indexSmall += i;
    if (indexSmall < 0) {
        indexSmall = slideSmall.length - 1;
    } else if (indexSmall >= slideSmall.length) {
        indexSmall = 0;
    }
    slidesSmall.style.transform = `translateX(${-indexSmall * 100}%)`;
}

prevSmall.addEventListener('click', () => showSlideSmall(-1));
nextSmall.addEventListener('click', () => showSlideSmall(1));



const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}



document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
});