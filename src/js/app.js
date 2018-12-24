import $ from 'jquery'
import 'slick-carousel'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

$('button').on('click', () => {
  window.alert('hello webpack')
})

const openMenu = document.getElementById('open_menu')
const closeMenu = document.getElementById('close_menu')
const menu = document.getElementById('menu')

openMenu.addEventListener('click', (event) => {
  menu.classList.add('shown')
})

closeMenu.addEventListener('click', (event) => {
  menu.classList.remove('shown')
})
