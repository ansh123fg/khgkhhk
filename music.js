let song1 = document.getElementById("songs1");
let song2 = document.getElementById("songs2");
let song3 = document.getElementById("songs3");
let song4 = document.getElementById("songs4");
let song5 = document.getElementById("songs5");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

btn1.addEventListener("click", function () {
    if (song1.play()) {
        song1.pause();
        song2.play();
    }
});
btn2.addEventListener("click", function () {
    if (song2.play()) {
        song2.pause();
        song1.pause();
        song3.play();
    }
})
btn3.addEventListener("click", function () {
    if (song3.play()) {
        song3.pause();
        song1.pause();
        song2.pause();
        song4.play();
    }
})
btn4.addEventListener("click", function () {
    if (song4.play()) {
        song4.pause();
        song3.pause();
        song1.pause();
        song2.pause();
        song5.play();
    }
})
btn5.addEventListener("click", function () {
    if (song5.play()) {
        song5.pause();
        song1.play();
    }
})