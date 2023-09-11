const colors=["red","yellow","green","blue"]
const But=document.getElementById("but")
const Body1=document.getElementById("abi")
const words=document.getElementById("words")

But.addEventListener("click" ,changeColor)

function changeColor(){
    let ChangeC=colors[Rand(colors)]
    Body1.style.backgroundColor = ChangeC
    words.textContent= ChangeC
}

function Rand(colorsRand) {
    return Math.floor(Math.random() * colorsRand.length);
}
