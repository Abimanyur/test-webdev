const menu =[
{
    id:1,
    title:"Adai",
    category:"main",
    price:20,
    img:"img/Adai.jpg",
    desc:"Thick, savory pancakes made from a mixture of lentils and rice, usually served with coconut chutney."
},{
    id:2,
    title:"Avial",
    category:"side",
    price:25,
    img:"img/Avial.jpeg",
    desc:" A medley of mixed vegetables cooked in a coconut and yogurt sauce, a popular accompaniment to rice."

},{
    id:3,
    title:"Biryani",
    category:"main",
    price:120,
    img:"img/Biryani.jpg",
    desc:" Fragrant, flavorful rice dish with marinated meat or vegetables, often garnished with fried onions and served with raita."

},{
    id:4,
    title:"Chicken Chettinadu curry",
    category:"Kuzhambu",
    price:150,
    img:"img/Chicken-Chettinad-Curry.jpg",
    desc:"A spicy and aromatic chicken dish from Chettinad region known for its rich blend of South Indian spices."

},{
    id:5,
    title:"Elaneer Payasam",
    category:"drinks",
    price:110,
    img:"img/ElaneerPayasam.jpg",
    desc:"A delicious dessert made from tender coconut water and milk, sweetened with jaggery or sugar."

},{
    id:6,
    title:"Fish Curry",
    category:"Kuzhambu",
    price:150,
    img:"img/FishCurry.webp",
    desc:"A spicy and tangy curry made with fish, coconut milk, and a medley of spices, a coastal specialty."

},{
    id:7,
    title:"Idli",
    category:"main",
    price:15,
    img:"img/Idli.webp",
    desc:"Soft and fluffy steamed rice cakes, a popular South Indian breakfast item, often enjoyed with coconut chutney and sambar."

},{
    id:8,
    title:"KadalaCurry",
    category:"Kuzhambu",
    price:45,
    img:"img/KadalaCurry.jpg",
    desc:"Chickpea curry cooked with coconut, spices, and sometimes jaggery, served with puttu or appam."

 },{
    id:9,
    title:"Karuvattu Kuzhambu",
    category:"Kuzhambu",
    price:75,
    img:"img/KaruvattuKuzhambu.jpg",
    desc:" A tangy and spicy curry made with dried fish, tamarind, and aromatic spices, a coastal delicacy."

},{
    id:10,
    title:"Keerai Kootu",
    category:"side",
    price:35,
    img:"img/KeeraiKootu.webp",
    desc:" A nutritious dish made with mixed greens, lentils, and coconut, flavored with South Indian spices."

},{
    id:11,
    title:"Kothu Parotta",
    category:"main",
    price:110,
    img:"img/KothuParotta.webp",
    desc:" Shredded parotta (layered flatbread) stir-fried with spices, eggs, and vegetables, often served with raita."

},{
    id:12,
    title:"Kuzhi Paniyaram",
    category:"main",
    price:25,
    img:"img/KuzhiPaniyaram.webp",
    desc:"Round, fluffy dumplings made from fermented rice and lentil batter, typically served with coconut chutney."

},{
    id:13,
    title:"Masala Dosa",
    category:"main",
    price:35,
    img:"img/Masala-Dosa.jpg",
    desc:" A crispy, thin rice crepe stuffed with a flavorful potato and onion filling, typically served with coconut chutney and sambar."

},{
    id:14,
    title:"MeenKuzhambu",
    category:"Kuzhambu",
    price:65,
    img:"img/MeenKuzhambu.webp",
    desc:" A fiery fish curry made with tamarind, chili, and other spices, best enjoyed with steamed rice."

},{
    id:15,
    title:"MilaguRasam",
    category:"Kuzhambu",
    price:20,
    img:"img/MilaguRasam.jpeg",
    desc:"A peppery and spicy tamarind soup, known for its medicinal properties and served to soothe colds and coughs."

},{
    id:16,
    title:"Rasam",
    category:"Kuzhambu",
    price:20,
    img:"img/Rasam.webp",
    desc:"A peppery and tangy soup-like dish made with tamarind, tomatoes, and various spices, served as a soup or with rice."

},{
    id:17,
    title:"Thalassery Biryani",
    category:"main",
    price:150,
    img:"img/ThalasseryBiryani.jpg",
    desc:"A unique and aromatic biryani from Tamil Nadu's neighboring state, Kerala, featuring tender pieces of meat or vegetables."

},{
    id:18,
    title:"Vada",
    category:"side",
    price:8,
    img:"img/Vada.webp",
    desc:" Deep-fried, crispy lentil fritters with a soft interior, a popular snack in Tamil Nadu."

},{
    id:19,
    title:"sambar",
    category:"Kuzhambu",
    price:35,
    img:"img/vegetable-sambar.jpg",
    desc:" A tangy and spicy lentil stew made with vegetables, tamarind, and a blend of South Indian spices, often served with rice."

},{
    id:20,
    title:"ven pongal",
    category:"main",
    price:45,
    img:"img/ven-pongal.jpg",
    desc:" A comforting rice and lentil porridge seasoned with black pepper, cumin, and garnished with cashews, a staple during the harvest festival."

},
]

const menuBox=document.querySelector(".menu");
const btnList=document.querySelector("#btnsList")

window.addEventListener("DOMContentLoaded",function(){
    displayMenu(menu);
    displaybtn(menu);
    
})

function displaybtn(menu){const category=menu.reduce(function(value , item){
    if(!value.includes(item.category)){
        value.push(item.category)
    }
    return value;
},["All"])

let displaybtn=category.map(function(item){
    return `<li><button class="fil-btn" data-id="${item}">${item}</button></li>`
}).join("")
btnList.innerHTML=displaybtn;
const filBtn=document.querySelectorAll(".fil-btn")
filBtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let category=e.currentTarget.dataset.id;
        if(category==="All"){
            displayMenu(menu);
            
        }else {
            let menudisplay=menu.filter(value =>value.category===category)
            displayMenu(menudisplay);
        }
    })
})}


function displayMenu (menu){
    let display=menu.map(item =>`<section class="food-box">
    <div class="img-box">
        <img src=${item.img}>
    </div>
    <div class="food-info">
        <header>
            <h4>${item.title}</h4> 
            <h4 class="price">&#x20b9 ${item.price}</h4>
       </header>
        <div class="dotted_line"></div>
        <p>${item.desc}</p>
    </div>
</section>`) ;

    display=display.join("");
    menuBox.innerHTML=display;
}