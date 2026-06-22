'use strict';

let imgId = 1;
const MAX_IMG_ID = 6;

const carousel = document.querySelector(".carousel");
const arrows = document.querySelectorAll(".carousel__arrow");
const circles = document.querySelectorAll(".carousel__circle");

let transitionHappening = false;

const sleep = ms => new Promise((res, rej) => setTimeout(res, ms));

const moveLeft = async () => {
    if (transitionHappening || imgId === 1) return;
    transitionHappening = true;
    carousel.classList.add("carousel_transition");
    --imgId;
    await sleep(250);
    circles[imgId].classList.remove("carousel__circle_active");
    carousel.classList.remove(`carousel_${imgId + 1}`);
    carousel.classList.add(`carousel_${imgId}`);
    circles[imgId - 1].classList.add("carousel__circle_active");
    await sleep(250);
    carousel.classList.remove("carousel_transition");
    transitionHappening = false;
};

const moveRight = async () => {
    if (transitionHappening || imgId === MAX_IMG_ID) return;
    transitionHappening = true;
    carousel.classList.add("carousel_transition");
    ++imgId;
    await sleep(250);
    circles[imgId - 2].classList.remove("carousel__circle_active");
    carousel.classList.remove(`carousel_${imgId - 1}`);
    carousel.classList.add(`carousel_${imgId}`);
    circles[imgId - 1].classList.add("carousel__circle_active");
    await sleep(250);
    carousel.classList.remove("carousel_transition");
    transitionHappening = false;
};

arrows[0].addEventListener('click', moveLeft);
arrows[1].addEventListener('click', moveRight);