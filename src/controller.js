import $ from 'jquery'

export default class Controller {
  constructor(options){
    for(const key in options){
      this[key] = options[key]
    }
    this.$element = $(this.element)
    this.bindEvents()
  }

  bindEvents(){
    for(const key in this.events){
      let arr = key.split(' ')
      let eventType = arr.shift()
      let selector = arr.join(' ')
      if(typeof this.events[key] === 'function'){
        this.$element.on(eventType, selector, this.events[key])
      }else if(typeof this.events[key] === 'string'){
        const methodName = this.events[key]
        this.$element.on(eventType, selector, this[methodName].bind(this))
      }
    }
  }
}