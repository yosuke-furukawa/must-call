const mustCallChecks = [];

function runCallChecks(exitCode) {
  if (exitCode !== 0) {
    return;
  }

  const failed = mustCallChecks.filter((context) => {
    return context.actual !== context.expected;
  });

  failed.forEach((context) => {
    const message = `Mismatched ${context.name} function calls. Expected ${context.expected}, actual ${context.actual}.`;
    const e = new Error(message);
    const stack = context.stack.split('\n').slice(2);
    stack.unshift(message);
    e.stack = stack.join('\n');
    throw e;
  });
}


module.exports = (fn, expected) => {
  if (typeof expected !== 'number') {
    expected = 1;
  }

  const context = {
    expected: expected,
    actual: 0,
    stack: (new Error()).stack,
    name: fn.name || '<anonymous>'
  };

  if (mustCallChecks.length === 0) {
    process.on('exit', runCallChecks);
  }

  mustCallChecks.push(context);

  return function() {
    context.actual++;
    return fn.apply(this, arguments);
  };
};


