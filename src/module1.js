import $ from 'jquery'

let $module1 = $('.module1')

$module1.on('change', 'input', function(){
  console.log('change1')
})
$module1.on('click', 'button', function(){
  console.log('click1')
})
