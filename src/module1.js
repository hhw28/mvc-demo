import Controller from './controller';

Controller({
  element: '.module1',
  events: {
    'change input': function(){
      console.log('change1')
    },
    'click button': function() {
      console.log('click1')
    }
  }
})