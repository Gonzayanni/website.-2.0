const hamburguer=document.querySelector(".hamburguer");
const menu=document.querySelector(".menu-navegacion");

hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener("click",e=>{
    if(e.target!= menu && e.target!=hamburguer){
menu.classList.remove("spread")
    }
})




