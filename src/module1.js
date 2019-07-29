import Controller from './controller';

new Controller({
  element: '.module1',
  events: {
    'change input': function(){
      console.log('change1')
    },
    'click button': 'clickButton'
  },
  clickButton(){
    this.addTodo()
  },
  addTodo(){
    console.log('clcik1')
  }
})