document.getElementById("h1").innerHTML = "Ehi ciao";

var btn = document.createElement("button");

var body = document.getElementsByTagName("body")[0];
body.append(btn);
btn.innerHTML = "Cliccami!";
btn.addEventListener("click", function(){
    document.getElementById("h1").innerHTML = "COME STAI?"
})