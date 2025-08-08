let display = document.getElementById("display");
let timeBtn = document.getElementById("timeBtn");
//variable is a memory space eg var let const
var name = "Gift";
var number = 200;
var number = 500;

timeBtn.addEventListener("click", ()=>{
    display.innerHTML = Date();
})
 //change content using java
let greeting = document.getElementById("greeting");

greeting.innerHTML = "Greetinsg with java script";
//end

//interwitch effect


let bird = document.getElementById("bird");
let image = document.getElementById("image");
let polar= document.getElementById("polar");

bird.addEventListener("click", ()=>{
    image.src = "./images/polar (1).jpg";
})

polar.addEventListener("click", ()=>{
    image.src = "./images/bird.jpg";
})

//end