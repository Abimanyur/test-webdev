const navbtn =document.getElementById('nav-btn');
const navlist= document.getElementById('nav-list');
const date=document.getElementById('date');


    date.innerHTML=new Date().getFullYear();


navbtn.addEventListener('click',function(){
    navlist.classList.toggle('show-nav')
})

const toplink=document.getElementById("toplink")
const navbar=document.getElementById("nav-bar")
const navHeight=navbar.getBoundingClientRect().height

window.addEventListener('scroll',function(){
 const scrollHeight = window.pageYOffset;
 if(navHeight<scrollHeight){
        navbar.classList.add('nav-fixed')
 }else{
    navbar.classList.remove('nav-fixed')
 }
 if(500<scrollHeight){
    toplink.classList.add('show-toplink')
    }else{
        toplink.classList.remove('show-toplink') 
    }
})

const scrollLink =document.querySelectorAll("#ScrollLink");

scrollLink.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const id=e.currentTarget.getAttribute("href").slice(1);
        const element=document.getElementById(id);
        const position=element.offsetTop - navHeight;
        window.scrollTo({
            left:0,top:position
        })
        navlist.classList.toggle('show-nav')
    })
})