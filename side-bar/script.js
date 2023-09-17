const sidebar=document.getElementById("sidebar");
const closeBtr=document.getElementById("close-btr")
const bar=document.getElementById("togglebtr");

bar.addEventListener('click', function(){
    sidebar.classList.toggle("show-sidebar");
})

closeBtr.addEventListener('click',function(){
    sidebar.classList.remove("show-sidebar");
   
})