const review=[{
    name: "abimanyu",
    job :"web developer",
    img: 'img/1.png',
    text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
},{
    name:'sundra',
    job: 'intern',
    img:'img/2.png',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
},{
    name:'susan smith',
    job:'web designer',
    img:'img/3.jpg',
    text:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
},{
    name:'bill anderson',
    job:'the boss',
    img:'img/4.jpg',
    text:'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
}];

const name1=document.getElementById("name");
const work=document.getElementById("work");
const info=document.getElementById("info");
const img1=document.getElementById("person-img");

const next= document.getElementById("next");
const prev= document.getElementById("prev");
const random=document.getElementById("random")

let count =0;

function loadingContent(){
    const item = review[count];
    img1.src=item.img;
    name1.textContent= item.name;
    work.textContent= item.job;
    info.textContent=item.text;
}

window.addEventListener("DOMContentLoaded",function(){
  loadingContent();
})

next.addEventListener('click', function(){
    count++;
    if(count>= review.length){
        count=0;
    }
    loadingContent();
})

prev.addEventListener('click',function(){
    count--;
    if(count<0){
        count=(review.length-1);
    }
    loadingContent();
})

random.addEventListener('click',function(){
    count= Math.floor(Math.random()*review.length);
    loadingContent();
})

