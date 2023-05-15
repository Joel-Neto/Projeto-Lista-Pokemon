const btnTema = document.getElementById("btnAlterarTema")
const body = document.querySelector("body")
const imgBtn = document.querySelector(".imagemBtn")

btnTema.addEventListener('click', function(){
  const modoEscuroEstaAtivo = body.classList.contains('modoEscuro')
  
  body.classList.toggle("modoEscuro")
  
  if(modoEscuroEstaAtivo){
    // body.classList.remove("modoEscuro") Pode substituir essa linha por body.classList.toggle
    imgBtn.setAttribute("src", "./src/img/sun.png")

  }else{
    // body.classList.add("modoEscuro") Pode substituir essa linha por body.classList.toggle
    imgBtn.setAttribute("src", "./src/img/moon.png")
  }
} )
 