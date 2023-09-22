const modal=document.querySelector(".modal-overlay");
const openBut=document.getElementById("open-but");
const closeBut=document.getElementById("close-but");

openBut.addEventListener('click',function(){
    modal.classList.add("show-modal");
} )

closeBut.addEventListener("click", function(){
    modal.classList.remove("show-modal");
})
