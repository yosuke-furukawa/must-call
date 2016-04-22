const mustCall = require('../../index');
const assert = require('assert');
const fixture = require('../fixture');

fixture.callCb(mustCall(() => {
  assert.ok('passed');
}));

process.on('uncaughtException', (e) => {
  assert(e.message === 'Mismatched <anonymous> function calls. Expected 1, actual 0.');
});

fixture.dntCallCb(mustCall(() => {
  // not called here
  assert.fail('failure');
}));

fixture.callCbTwice(mustCall(() => {
  assert.ok('passed');
}, 2));
