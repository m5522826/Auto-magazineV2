const menuBtn = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu');
const logo = document.querySelector('.logo');
const menuElement = document.querySelector('.header__menu-button-span');

menuBtn.addEventListener ('click', function() {
	menu.classList.toggle('header__menu_active');
  logo.classList.toggle('logo_hidden');
})


const urlBtnFirst = document.getElementById('DriveBtn');
const urlBtnSecond = document.getElementById('EngadgetBtn');
const picBtnFirst = document.getElementById('firstRadio');
const picBtnSecond = document.getElementById('secondRadio');
const textPress = document.querySelector('.press__paragraph');
const readBtn = document.querySelector('.press__button');
const pressBox = document.querySelector('.press__box');

urlBtnFirst.addEventListener ('click', function() {
	textPress.textContent = 'Drive.ru: Вэн Volkswagen e-Bulli скрестил классику с современной техникой.';
  readBtn.innerHTML = '<a class="press__button" href="https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html">Читать</a>';
  picBtnSecond.innerHTML = '<img src="./images/radio-active.svg">';
  picBtnFirst.innerHTML = '<img src="./images/radio-d.svg">';
})

urlBtnSecond.addEventListener ('click', function() {
	textPress.textContent = 'Engadget: VWs e-BULLI concept shows how your classic van can become an EV.';
  readBtn.innerHTML = '<a class="press__button" href="https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html">Читать</a>';
  picBtnSecond.innerHTML = '<img src="./images/radio-d.svg"></img>';
  picBtnFirst.innerHTML = '<img src="./images/radio-active.svg">';
})




/////*На вторую проверку отправить у меня не будет возможности, полноценно разобраться с JS в этой работе не хватило времени. Буду благодарна за вариант реализации слайдера.*/////






/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("gallery__pic");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

