import $ from 'jquery'
import 'slick-carousel'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

const babel = () => {
  console.log('hello world')
}
babel()

$('button').on('click', () => {
  window.alert('hello webpack')
})
