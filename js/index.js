let menu = document.querySelector('#menuBtn')
let navbar = document.querySelector('.contentNav')

menu.onclick = () =>{
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

window.scroll =() =>{
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
}