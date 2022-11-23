const imagenes=document.querySelectorAll(".foto-galery");
const contenedorLight=document.querySelector(".imagen-light");
const imagenLight=document.querySelector(".agregar-img");


imagenes.forEach(imagen=>{
imagen.addEventListener("click", ()=>{
   aparecerImagen(imagen.getAttribute("src"))
})
})

function aparecerImagen(imagen){
    imagenLight.src=imagen;
    contenedorLight.classList.toggle("show");
    imagenLight.classList.toggle("show-image");
    
}


contenedorLight.addEventListener("click",e=>{
    if(e.target!=imagenLight){
        contenedorLight.classList.remove("show");
    imagenLight.classList.remove("show-image");
    }
})