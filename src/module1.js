import Controller from './controller';
import $ from 'jquery';

new Controller({
  element: '.module1',
  events: {
    'change input': function(){
      console.log('change1')
    },
    'click button': 'clickButton'
  },
  clickButton(e){
    const value = this.$element.find('input').val()
    this.render(value)
  },
  render(value){
    let $output = this.$element.find('.output')
    if($output.length === 0){
      $output = $('<div class="output"></div>').text(value)
      $output.appendTo(this.$element)
    }else{
      $output.text(value)
    }
  }
})