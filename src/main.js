import Dispatcher from './dispatcher'

let dispatcher = new Dispatcher()
let subscriber = (message) => {
  console.log(message)
}

dispatcher.subscribe(subscriber)
dispatcher.publish('Hello, World!')
