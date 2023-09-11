let count = 0;

const value=document.querySelector("#Value");
const buts= document.querySelectorAll(".buts");

buts.forEach(function(but){
    but.addEventListener("click",function(bu){
        const style=bu.currentTarget.classList;
        if(style.contains("DECREASE")){
            count--;
        }else if(style.contains("INCREASE")){
            count++;
        }else{
            count=0;
        }
        if(count>0){
            value.style.color="green";
        }else if (count<0){
            value.style.color="red";
        }else {
            value.style.color="#222";
        }
        value.textContent=count;
    })
});