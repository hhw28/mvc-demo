import $ from 'jquery'

let $module2 = $('.module2')

$module2.on('change', 'input', function(){
  console.log('change2')
})
$module2.on('click', 'button', function(){
  console.log('click2')
})