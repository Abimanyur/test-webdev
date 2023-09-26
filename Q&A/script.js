const questions=document.querySelectorAll(".question");

questions.forEach(function(question){

    const btns=question.querySelector(".q-Buts")

    btns.addEventListener('click',function(){

        questions.forEach(function(item){
            if(item!==question){
                item.classList.remove("show-text")
            }

            question.classList.toggle("show-text")
        })
    })
})









// const buts=document.querySelectorAll(".q-Buts");

// buts.forEach(function(buts){
//     buts.addEventListener('click',function(e){
//         const question=e.currentTarget.parentElement.parentElement.parentElement;
//         console.log(question)
//         question.classList.toggle("show-text")
//     })
// })
    