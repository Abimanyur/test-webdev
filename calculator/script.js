let abi=document.getElementById("screen1"); 

function display(num){
    abi.value += num;

}
function Clear(){
   abi.value = "";
 }
 function del(){
    abi.value=abi.value.slice(0,-1)
 }
 function Cal(){
    try{
    abi.value=eval(abi.value);
     }
     catch(err){
        alert("invalued");
     }

}