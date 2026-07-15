function showMessage(){
    alert("Thanks you for visiting my portfolio!")
}

window.addEventListener("scroll",function()

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    const position=card.getBoundingClientRect().top;

    const screen=window.innerHeight;

    if(position<screen-100){

        card.Style.opacity="1";
        card.style.transform="translateY(0)";
        
    }
})
)