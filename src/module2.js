import Controller from './controller';

new Controller({
  element: '.module2',
  template: `
    <button class="increase">+</button>
    <span style="display:inline-block;width:20px;text-align:center;">{{number}}</span>
    <button class="decrease">-</button>
  `,
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