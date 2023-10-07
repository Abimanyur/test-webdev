const bnt =document.querySelector(".container-bnt");
const video=document.querySelector(".bgvideo");

bnt.addEventListener('click',function(){
    if(!bnt.classList.contains("switch")){
        bnt.classList.add("switch")
        video.pause()
    }else{
        bnt.classList.remove("switch")
        video.play()
    }
    
})

const preloader=document.querySelector(".pre-loader");

window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
  });