let display = document.getElementById("display");
let button = document.getElementsByClassName("btn");
let clear = document.getElementById("clr");
let result = document.getElementById("result");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        let btnval = button[i].value;
        display.innerHTML = display.innerHTML + btnval;
    })
}
clear.addEventListener("click", function () {
    display.innerHTML = "";
})
result.addEventListener("click", function () {
    display.innerHTML = eval(display.innerHTML);
})

