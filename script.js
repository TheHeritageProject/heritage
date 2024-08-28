const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let index = 0;

nextBtn.addEventListener('click', () => {
    if (index < 3) {
        index++;
        carousel.style.transform = `translateX(-${index * 200}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        carousel.style.transform = `translateX(-${index * 200}px)`;
    }
});
