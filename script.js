const sliderContainer = document.querySelector('.image-wrapper');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

leftButton.addEventListener('click', () => {
    sliderContainer.scrollBy({
        left: -300, // Прокрутка влево
        behavior: 'smooth'
    });
});

rightButton.addEventListener('click', () => {
    sliderContainer.scrollBy({
        left: 300, // Прокрутка вправо
        behavior: 'smooth'
    });
});

// Добавляем активный класс при клике на изображение
const images = document.querySelectorAll('.slider-image');
images.forEach((img) => {
    img.addEventListener('click', () => {
        images.forEach(image => image.classList.remove('active'));
        img.classList.add('active');
    });
});


const sliderContainer2 = document.querySelector('.image-wrapper-2');
const leftButton2 = document.querySelector('.left-button-2');
const rightButton2 = document.querySelector('.right-button-2');

leftButton2.addEventListener('click', () => {
    sliderContainer2.scrollBy({
        left: -300, // Прокрутка влево
        behavior: 'smooth'
    });
});

rightButton2.addEventListener('click', () => {
    sliderContainer2.scrollBy({
        left: 300, // Прокрутка вправо
        behavior: 'smooth'
    });
});

// Добавляем активный класс при клике на изображение
const image = document.querySelectorAll('.slider-image-2'); // Исправлено на images
images.forEach((img) => {
    img.addEventListener('click', () => {
        images.forEach(image => image.classList.remove('active'));
        img.classList.add('active');
    });
});

const sliderContainer3 = document.querySelector('.slider-general-3 .image-wrapper-3');
const leftButton3 = document.querySelector('.left-button-3');
const rightButton3 = document.querySelector('.right-button-3');

// Обработчик для прокрутки влево
leftButton3.addEventListener('click', () => {
    sliderContainer3.scrollBy({
        left: -300, // Прокрутка влево на 300 пикселей
        behavior: 'smooth'
    });
});

// Обработчик для прокрутки вправо
rightButton3.addEventListener('click', () => {
    sliderContainer3.scrollBy({
        left: 300, // Прокрутка вправо на 300 пикселей
        behavior: 'smooth'
    });
});

// Добавляем функционал для активного класса при клике на изображение
const images3 = document.querySelectorAll('.slider-image-3');
images3.forEach((img) => {
    img.addEventListener('click', () => {
        images3.forEach(image => image.classList.remove('active'));
        img.classList.add('active');
    });
});