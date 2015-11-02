export class Dispatcher {

  constructor () {
    this.subscribers = []
  }

  subscribe (subscriber) {
    this.subscribers.push(subscriber)
  }

  unsubscribe (unsubscriber) {
    this.subscribers = this.subscribers.filter((subscriber) => {
      return (subscriber !== unsubscriber)
    })
  }

  publish (message) {
    this.subscribers.forEach((subscriber) => {
      subscriber(message)
    })
  }
}

export default Dispatcher
