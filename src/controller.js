import $ from 'jquery'

function Controller(options){
  let controller = {}
  controller.$element = $(options.element)
  controller.events = options.events

  for(const key in controller.events){
    let arr = key.split(' ')
    let event = arr.shift()
    let element = arr.join(' ')
    controller.$element.on(event, element, controller.events[key])
  }
}
export default Controller