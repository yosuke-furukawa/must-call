const mustCall = require('../..');
const assert = require('assert');
const promise = require('../promise');

promise.resolve().then(mustCall(() => {
  assert.ok('passed');
}));

process.on('uncaughtException', (e) => {
  assert(e.message === 'Mismatched <anonymous> function calls. Expected 1, actual 0.');
});

promise.dntResolve().then(mustCall(() => {
  // not called here
  assert.fail('failure');
}));

