import Controller from './controller';
import model from './module3Model';

new Controller({
  element: '.module3',
  template: "#module3Template",
  model: model,
  events: {
    'click button.increase': 'increase',
    'click button.decrease': 'decrease'
  },
  init(){
    this.model.get().then(() => {
      this.render()
    })
  },
  increase(){
    this.model.increase().then(() => {
      this.render()
    })
  },
  decrease(){ 
    this.model.decrease().then(() => {
      this.render()
    })
  }
})