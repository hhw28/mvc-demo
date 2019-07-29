import $ from 'jquery'

let $module3 = $('.module3')

$module3.on('change', 'input', function(){
  console.log('change3')
})
$module3.on('click', 'button', function(){
  console.log('click3')
})