import Controller from './controller';

new Controller({
  element: '.module1',
  template: `
    <input type="text" placeholder="请输入">
    <button>点我</button>
    <div class="output">{{output}}</div>
  `,
  data: {
    output: 'hello world'
  },
  events: {
    'change input': function(){
      console.log('change1')
    },
    'click button': 'clickButton'
  },
  clickButton(e){ 
    this.data.output = this.$element.find('input').val()
    this.render()
  }
})