import $ from 'jquery';

const model = {
  data: {
    number: 0
  },
  get(){
    return $.get('data.json').then(res => {
      this.data.number = res.number
      return this.data
    })
  },
  increase(){
    // 模拟向服务器发起请求
    return new Promise(resolve => {
      setTimeout(() => {
        this.data.number++
        resolve(this.data)
      }, 200)
    })
  },
  decrease(){
    return new Promise(resolve => {
      setTimeout(() => {
        this.data.number--
        resolve(this.data)
      }, 200)
    })
  }
}

export default model