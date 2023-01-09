function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

 //pegar a tag img
  const img = document.querySelector("#profile img")

//Substituir a img
  if(html.classList.contains('light')) {

//Se tiver light mode, add img light
   img.setAttribute('src', './assents/Avatar-dark.jpg')
  } else {
    
//Se tiver sem o light mode, manter a img padrao
  img.setAttribute('src', "./assents/Avatar.png")
  }
}