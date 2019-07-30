import Controller from './controller';

new Controller({
  element: '.module2',
  template: "#module2Template",
  data: {
    number: 0
  },
  events: {
    'click button.increase': 'increase',
    'click button.decrease': 'decrease'
  },
  increase(){
    this.data.number++
    this.render()
  },
  decrease(){ 
    this.data.number--
    this.render()
  }
})