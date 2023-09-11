const hexColor=[1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"]
const Body=document.getElementById("abi")
const But1=document.getElementById("but1")
const words=document.getElementById("words")

But1.addEventListener("click", changeHexColor)

function changeHexColor(){
    let Hcolor="#";
    for(let i = 0; i < 6; i++){
            Hcolor+=hexColor[Rand(hexColor)]
           
    }
    words.textContent=Hcolor
    Body.style.backgroundColor =Hcolor
}

function Rand(colorsRand) {
    return Math.floor(Math.random() * colorsRand.length);
}
