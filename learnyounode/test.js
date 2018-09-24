const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.on('event 1', () => {
  console.log('loguje 1');
});

myEmitter.on('event 2', () => {
  console.log('loguje 2');
});

myEmitter.on('event 3', () => {
  console.log('loguje 3');
});

myEmitter.emit('event');
myEmitter.emit('event 3');
myEmitter.emit('event 2');
myEmitter.emit('event 1');
