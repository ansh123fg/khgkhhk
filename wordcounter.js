let textbox = document.getElementById("text-box");
let word = document.getElementById("word");
let char = document.getElementById("char");

textbox.addEventListener("input", function(){
    let txtval = this.value;
    let charval = txtval.length;
    char.innerHTML = charval;
    txtval = txtval.trim();
    let words = txtval.split(" ");
    let cleanList = words.filter(function(e){
        return e != "";
    })
    document.getElementById("word").innerHTML = cleanList.length;
})