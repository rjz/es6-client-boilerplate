/*global sinon:false it:false, expect:false, describe:false, beforeEach:false */

import Dispatcher from './dispatcher'

describe('Dispatcher', () => {
  let dispatcher = null

  beforeEach(() => {
    dispatcher = new Dispatcher()
  })

  it('maintains a list of subscribers', () => {
    expect(dispatcher.subscribers instanceof Array).toBe(true)
  })

  describe('.subscribe', () => {
    let subscriber = sinon.stub()

    beforeEach(() => {
      subscriber.reset()
      dispatcher.subscribe(subscriber)
    })

    it('adds subscriber to the list', function () {
      expect(dispatcher.subscribers.length).toBe(1)
    })

    describe('.publish', () => {
      beforeEach(() => {
        dispatcher.publish('hello, world!')
      })

      it('notifies subscribers', () => {
        expect(subscriber.callCount).toBe(1)
        expect(subscriber.firstCall.args[0]).toBe('hello, world!')
      })
    })

    describe('.unsubscribe', () => {
      beforeEach(() => {
        dispatcher.unsubscribe(subscriber)
      })

      it('removes subscriber from the list', function () {
        expect(dispatcher.subscribers.length).toBe(0)
      })
    })
  })
})
