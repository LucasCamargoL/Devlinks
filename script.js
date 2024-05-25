function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
    /* O toggle é exatamente a função de habilitar e desabilitar a classe da classlist como está escrita extensamente abaixo */
    /* if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    */
   
   //pegar a tag imagem
   const img = document.querySelector("#profile img")

   //substituir a imagem
   if(html.classList.contains('light')) {
       //se tiver lightmode, add a imagem light
   img.setAttribute('src', './assets/avatar-light.png') 
   } else {
       //sem lightmode, mander imagem normal
    img.setAttribute('src', './assets/rosto.png')

   }

}
