import $ from 'jquery'

export default class Controller {
  constructor(options){
    this.$element = $(options.element)
    this.events = options.events
    this.bindEvents()
  }

  bindEvents(){
    for(const key in this.events){
      let arr = key.split(' ')
      let eventType = arr.shift()
      let selector = arr.join(' ')
      this.$element.on(eventType, selector, this.events[key])
    }
  }
}