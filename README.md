must-call
==================
[![npm version](https://badge.fury.io/js/must-call.svg)](https://badge.fury.io/js/must-call)
[![Build Status](https://travis-ci.org/yosuke-furukawa/must-call.svg?branch=master)](https://travis-ci.org/yosuke-furukawa/must-call)
[![Coverage Status](https://coveralls.io/repos/github/yosuke-furukawa/must-call/badge.svg?branch=master)](https://coveralls.io/github/yosuke-furukawa/must-call?branch=master)

`must-call` is an assertion library for async test.
This method is inspired from `node.js` project `test/common.js`.

```js
const mustCall = require('must-call');

someCallback(mustCall(() => {
  // when callback does not called at the end of the process, 
  // throw exception.
}));

somePromiseTest().then(mustCall(() => {
  // when async test does not resolved at the end of the process, 
  // throw exception.
}));
```


