console.log("hello world");

let celsius = document.getElementById("cel");
let fahrenheit = document.getElementById("fah");

celsius.addEventListener("input", function(){
    let celvalue = celsius.value;
    let fahvalue = (celvalue * 9/5) + 32;
    fahrenheit.value = fahvalue;
    if(!Number.isInteger(fahvalue)){
        fahvalue = fahvalue.toFixed(4);
}})

fahrenheit.addEventListener("input",function(){
    let fahvalue = fahrenheit.value;
    let celvalue = (fahvalue - 32) * 5/9;
    celsius.value = celvalue;
    if(!Number.isInteger(celvalue)){
        celvalue = celsius.toFixed(4);
    }})
