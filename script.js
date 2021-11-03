
const header = document.querySelector(".header")
var elems = document.querySelector(".spider2");
var elemspid = document.querySelector(".spider1");


function elemsSpider () {
    elems.style.display = "block";
    elemspid.style.display = "block";
}

setTimeout(elemsSpider, 3000);
clearTimeout(elemsSpider);

function noElemsSpider () {
    elems.style.display = "none";
    elemspid.style.display = "none";
}

setTimeout(noElemsSpider, 6000);
clearTimeout(noElemsSpider);

function soundHaloween () {
    const audio = new Audio('Sound.mp3');
    audio.play();
    
}
//window.onload = soundHaloween();

header.onclick = soundHaloween;

