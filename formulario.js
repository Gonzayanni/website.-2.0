// variables

const nombreCompleto=document.querySelector(".nombre-completo");
const email=document.querySelector(".correo-electronico");
const dni=document.querySelector(".dni");
const formulario=document.querySelector(".formulario-sorteo");
const botonEnviarDatos=document.querySelector(".boton-enviarDatos");
const parrafo=document.querySelector(".warnings");
const wrap=document.querySelector(".wrap");
const mercadoPago=document.querySelector(".pagar-mp-container");


// event listeners
formulario.addEventListener("submit",e=>{
    e.preventDefault();
      let warning="";
      let regexEmail=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
      let entrar=false;
       
  

    if(nombreCompleto.value.length<3 ){
        warning +=`El nombre ${nombreCompleto.value} no es valido <br>`;
       entrar=true;
    }
    
    
        if(!regexEmail.test(email.value)){
            warning +=`El EMAIL ${email.value} no es valido <br>`;
entrar=true;
        
    }
    if(dni.value.length<8 && dni.value.length>8){
        warning +=`El DNI ${dni.value} no es valido <br>`;
       entrar=true;
    }

    if(entrar){
        parrafo.classList.remove("wrap");
    parrafo.innerHTML=warning;
    }else{
        botonEnviarDatos.style.display="none";
    
        parrafo.innerHTML="Datos enviados exitosamente";
        
        setTimeout(() => {
            parrafo.style.display="none"
        }, 2000);
        
        mercadoPago.style.display="block";

    }
})
   









  


